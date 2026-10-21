export function sanitizeFilename(original: string): string {
  const dot = original.lastIndexOf('.');
  const base = (dot > 0 ? original.slice(0, dot) : original).toLowerCase();
  const ext = dot > 0 ? original.slice(dot).toLowerCase() : '';
  const slug = base.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'file';
  return `${slug}${ext}`;
}
