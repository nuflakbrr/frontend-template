import { siteMetadata } from '@/data/siteMetadata';

export default function sitemap() {
  const siteUrl = siteMetadata.siteUrl;

  const routes = ['', 'about', 'contact', 'login', 'register'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
