import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";

export default function DashBoardLayout()
 {
      return (
   <div className="flex h-[calc(100vh-1rem)] overflow-hidden shadow-2xl shadow-blue-400 rounded-2xl m-2">


  <div className="">
      <SideBar />
   </div>        
      
      {/* Main Content Area */}
      <main className="flex-1 bg-slate-100  overflow-y-auto p-8 ">
        <Outlet />
      </main>
    </div>
  
      );
}