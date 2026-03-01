import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { siteMetadata } from '@/data/siteMetadata';
import ThemeProvider from '@/providers/ThemeProvider';
import Navbar from '@/components/Mixins/Navbar';
import Footer from '@/components/Mixins/Footer';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl || 'http://localhost:3000'),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.headerTitle}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
