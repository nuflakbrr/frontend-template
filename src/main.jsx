import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import './index.css'

import { ThemeProvider } from './providers/ThemeProvider';
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
