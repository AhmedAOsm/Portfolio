/** Prefix a site path with Astro's configured base (needed for GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') return base || '/';
  return `${base}/${path.replace(/^\//, '')}`;
}
