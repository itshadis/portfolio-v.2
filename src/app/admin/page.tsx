import { notFound } from 'next/navigation';
import { isAdminEnabled } from '@/lib/admin-guard';
import AdminPanel from './AdminPanel';

export default function AdminPage() {
  if (!isAdminEnabled()) notFound();
  return <AdminPanel />;
}
