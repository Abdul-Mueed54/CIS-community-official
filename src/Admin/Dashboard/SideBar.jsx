import { BookUser, GraduationCap, HomeIcon, MessageCircleCode, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menuItems = [
    { name: "Home", icon: <HomeIcon size={20} />, path: "/admin" },
    { name: "Alumni", icon: <GraduationCap size={20} />, path: "/admin/alumni" },
    { name: "Team Members", icon: <Users size={20} />, path: "/admin/teammembers" },
    { name: "Current Activity", icon: <BookUser size={20} />, path: "/admin/activity" },
    { name: "Send Bulk Msgs", icon: <MessageCircleCode size={20} />, path: "/admin/bulkmsgs" },
  ];

  return (
    <div className="h-screen w-64 bg-dblue text-slate-300 ">
      <img src="src/Logo/CIS-Community-Main-Logo.png" alt="logo" height={150} width={150}/>

      {/* Navigation */}
      <nav className="mt-4">
        <ul className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="group">
              <li className=" bg-white flex items-center justify-center gap-4 py-3 my-2 mx-4 border-2 rounded-4xl  transition-all duration-200 hover:bg-slate-200 hover:text-blue-400">
                <span className="text-slate-800 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </span>
                <span className="text-slate-800 group-hover:text-blue-500 text-sm font-medium">
                  {item.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}