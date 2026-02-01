import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Event from './components/Event/Event.jsx'
import Teams from './components/Teams/Teams.jsx'
import Registrations from './components/Registration/Registrations.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      
    <Route path='/' element={<Layout />}>

    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='events' element={<Event />} />
    <Route path='teams' element={<Teams />} />
    <Route path='registration' element={<Registrations />} />
    </Route>


  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
