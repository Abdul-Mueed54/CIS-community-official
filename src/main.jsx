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
import DashBoard from './Admin/Dashboard/DashBoard.jsx'
import DashBoardLayout from './Admin/Dashboard/DashBoardLayout.jsx'
import Activity from './Admin/CurrentActivity/Activity.jsx'
import Alumni from './Admin/Alumni/Alumni.jsx'
import TeamMembers from './Admin/TeamsMembers/TeamMembers.jsx'
import BulkMsgs from './Admin/SendBulkMsgs/BulkMsgs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PUBLIC LAYOUT */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='events' element={<Event />} />
        <Route path='teams' element={<Teams />} />
        <Route path='registration' element={<Registrations />} />
      </Route>

      {/* ADMIN LAYOUT */}
      <Route path='admin' element={<DashBoardLayout />}>
        <Route index element={<DashBoard />} />
        <Route path='activity' element={<Activity />} />
        <Route path='alumni' element={<Alumni />} />
        <Route path='teammembers' element={<TeamMembers />} />
        <Route path='bulkmsgs' element={<BulkMsgs />} />
        
      </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
