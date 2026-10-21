import { NextRequest, NextResponse } from 'next/server';
import { adminDisabledResponse, isAdminEnabled } from '@/lib/admin-guard';
import { readContentFile, writeContentFile } from '@/lib/content';
import { projectListSchema } from '@/lib/content-schema';

export async function GET() {
  if (!isAdminEnabled()) return adminDisabledResponse();
  return NextResponse.json(await readContentFile('works.json'));
}

export async function PUT(req: NextRequest) {
  if (!isAdminEnabled()) return adminDisabledResponse();
  const body = await req.json();
  const parsed = projectListSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Data tidak valid.', issues: parsed.error.issues },
      { status: 400 }
    );
  }
  await writeContentFile('works.json', parsed.data);
  return NextResponse.json(parsed.data);
}
