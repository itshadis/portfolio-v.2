import { NextResponse } from 'next/server';

export function isAdminEnabled(): boolean {
  return process.env.ADMIN_ENABLED === 'true' && process.env.NODE_ENV !== 'production';
}

export function adminDisabledResponse(): NextResponse {
  return NextResponse.json({ error: 'Admin hanya tersedia di lingkungan lokal.' }, { status: 404 });
}
