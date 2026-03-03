import { getAppRoutes } from '@/lib/sitemap';
import { siteMetadata } from '@/data/siteMetadata';

export default function sitemap() {
  const siteUrl = siteMetadata.siteUrl;

  const routes = getAppRoutes().map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
