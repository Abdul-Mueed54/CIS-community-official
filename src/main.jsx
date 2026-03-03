import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Event from "./components/Event/Event.jsx";
import Teams from "./components/Teams/Teams.jsx";
import Registrations from "./components/Registration/Registrations.jsx";
import DashBoard from "./Admin/Dashboard/DashBoard.jsx";
import AdminLayout from "./Admin/Dashboard/AdminLayout.jsx";
import Activity from "./Admin/CurrentActivity/Activity.jsx";
import Alumni from "./Admin/Alumni/Alumni.jsx";
import TeamMembers from "./Admin/TeamsMembers/Marketing.jsx";
import BulkMsgs from "./Admin/SendBulkMsgs/BulkMsgs.jsx";
import AddNewMembers from "./Admin/AddNewMembers/AddNewMembers.js";
import MarketingMembersTable from "./Admin/TeamsMembers/Marketing.jsx";
import CodingMembersTable from "./Admin/TeamsMembers/Coding.jsx";
import MediaMembersTable from "./Admin/TeamsMembers/Media.jsx";
import PublisherMembersTable from "./Admin/TeamsMembers/Publisher.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PUBLIC LAYOUT */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Event />} />
        <Route path="teams" element={<Teams />} />
        <Route path="registration" element={<Registrations />} />
      </Route>

      {/* ADMIN LAYOUT */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="activity" element={<Activity />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="teammembers" element={<TeamMembers />} />
        <Route path="teammembers/add" element={<AddNewMembers />} />
        <Route
          path="teammembers/marketing"
          element={<MarketingMembersTable />}
        />
        <Route path="teammembers/coding" element={<CodingMembersTable />} />
        <Route path="teammembers/media" element={<MediaMembersTable />} />
        <Route
          path="teammembers/publisher"
          element={<PublisherMembersTable />}
        />

        <Route path="bulkmsgs" element={<BulkMsgs />} />
      </Route>
    </>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
