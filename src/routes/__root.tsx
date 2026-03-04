/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { siteMetadata } from '@/data/siteMetadata'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navbar from '@/components/Mixins/Navbar'
import Footer from '@/components/Mixins/Footer'
import ScrollToTop from '@/components/Common/ScrollToTop'
import ErrorState from '@/components/Common/ErrorState'
import '../index.css'

export const Route = createRootRoute({
  errorComponent: (props: { error: Error }) => {
    const error = props.error as unknown as Record<string, unknown>
    const statusCode =
      typeof error.status === 'number'
        ? error.status
        : typeof error.statusCode === 'number'
          ? error.statusCode
          : 500
    return <ErrorState code={statusCode} error={props.error} />
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteMetadata.title,
      },
      {
        name: 'description',
        content: siteMetadata.description,
      },
      {
        name: 'author',
        content: siteMetadata.author,
      },
      {
        name: 'keywords',
        content:
          'tanstack, react, start, template, frontend, seo, sitemap, naufal akbar nugroho',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteMetadata.siteUrl,
      },
      {
        property: 'og:title',
        content: siteMetadata.title,
      },
      {
        property: 'og:description',
        content: siteMetadata.description,
      },
      {
        property: 'og:image',
        content: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: siteMetadata.siteUrl,
      },
      {
        name: 'twitter:title',
        content: siteMetadata.title,
      },
      {
        name: 'twitter:description',
        content: siteMetadata.description,
      },
      {
        name: 'twitter:image',
        content: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
      },
      {
        name: 'twitter:creator',
        content: siteMetadata.x,
      },
    ],
    links: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'canonical',
        href: siteMetadata.siteUrl,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
        <TanStackRouterDevtools initialIsOpen={false} />
      </RootDocument>
    </ThemeProvider>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ScrollToTop />
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}