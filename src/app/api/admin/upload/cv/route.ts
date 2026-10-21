import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { adminDisabledResponse, isAdminEnabled } from '@/lib/admin-guard';
import { readContentFile, writeContentFile } from '@/lib/content';
import { siteSchema } from '@/lib/content-schema';
import { sanitizeFilename } from '@/lib/uploads';

const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  if (!isAdminEnabled()) return adminDisabledResponse();

  const form = await req.formData();
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'File tidak ditemukan.' }, { status: 400 });
  }

  const name = sanitizeFilename(file.name);
  if (path.extname(name) !== '.pdf') {
    return NextResponse.json({ error: 'CV harus berupa file PDF.' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Ukuran PDF maksimal 10MB.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const docsDir = path.join(process.cwd(), 'public', 'documents');
  await fs.writeFile(path.join(docsDir, name), buffer);

  const site = siteSchema.parse(await readContentFile('site.json'));
  if (site.cvFilename !== name) {
    await fs.rm(path.join(docsDir, site.cvFilename), { force: true });
    await writeContentFile('site.json', { cvFilename: name });
  }

  return NextResponse.json({ cvFilename: name });
}
