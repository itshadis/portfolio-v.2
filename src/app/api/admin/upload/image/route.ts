import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { adminDisabledResponse, isAdminEnabled } from '@/lib/admin-guard';
import { sanitizeFilename } from '@/lib/uploads';

const ALLOWED_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  if (!isAdminEnabled()) return adminDisabledResponse();

  const form = await req.formData();
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'File tidak ditemukan.' }, { status: 400 });
  }

  const name = sanitizeFilename(file.name);
  if (!ALLOWED_EXT.has(path.extname(name))) {
    return NextResponse.json(
      { error: 'Format gambar tidak didukung. Gunakan PNG, JPG, WEBP, GIF, atau SVG.' },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Ukuran gambar maksimal 5MB.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(process.cwd(), 'public', 'images', name), buffer);

  return NextResponse.json({ path: `/images/${name}` });
}
