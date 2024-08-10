import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Projects from './pages/projects/projects.tsx'
import Gallery from './pages/gallery/gallery.tsx'
import CV from './pages/cv/cv.tsx'
import About from './pages/about/about.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/cv',
    element: <CV />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
