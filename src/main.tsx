import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import './index.css'

import { ThemeProvider } from './providers/ThemeProvider';
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme-preference">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
