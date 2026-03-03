import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  BookUser,
  GraduationCap,
  HomeIcon,
  MessageCircleCode,
  Users,
  X,
  Menu,
  User,
  UserPlus,
} from "lucide-react";

// ─── Menu Config ──────────────────────────────────────────────────────────────

const menuItems = [
  { name: "Home", icon: <HomeIcon size={18} />, path: "/admin" },
  { name: "Alumni", icon: <GraduationCap size={18} />, path: "/admin/alumni" },
  {
    name: "Team Members",
    icon: <Users size={18} />,
    subItems: [
      { name: "Coding & Innovation", path: "/admin/teammembers/coding" },
      { name: "Co-Operation & Marketing", path: "/admin/teammembers/marketing" },
      { name: "Media", path: "/admin/teammembers/media" },
      { name: "Publisher", path: "/admin/teammembers/publisher" },
    ],
  },
  {
    name: "Current Activity",
    icon: <BookUser size={18} />,
    path: "/admin/activity",
  },
  {
    name: "Send Bulk Msgs",
    icon: <MessageCircleCode size={18} />,
    path: "/admin/bulkmsgs",
  },
  {
    name: "Add New Members",
    icon: <UserPlus size={18} />,
    path: "/admin/teammembers/add",
  },
];

// ─── NavItem ──────────────────────────────────────────────────────────────────

function NavItem({ item, closeMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.subItems) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-between px-3 py-2.5 rounded-xl
            text-slate-100 hover:text-white hover:bg-white/10 transition-all duration-200 group
            ${isOpen ? "bg-white/10 text-white" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            <span
              className={`transition-colors ${isOpen ? "text-indigo-400" : "text-slate-400 group-hover:text-indigo-400"}`}
            >
              {item.icon}
            </span>
            <span className="text-sm font-medium tracking-wide">
              {item.name}
            </span>
          </div>
          <ChevronDown
            size={14}
            className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <ul className="mt-1 ml-4 pl-4 border-l border-white/10 space-y-0.5">
            {item.subItems.map((sub, idx) => (
              <li key={idx}>
                <Link
                  to={sub.path}
                  onClick={closeMobileMenu}
                  className="block py-2 px-2 text-xs text-slate-100 hover:text-indigo-300 rounded-lg hover:bg-white/5 transition-all"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <Link to={item.path} onClick={closeMobileMenu} className="block">
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-100 hover:text-blue-300 hover:bg-white/10 transition-all duration-200 group">
        <span className="text-slate-400 group-hover:text-indigo-400 transition-colors">
          {item.icon}
        </span>
        <span className="text-sm font-medium tracking-wide">{item.name}</span>
      </div>
    </Link>
  );
}

// ─── MobileHeader ─────────────────────────────────────────────────────────────

function MobileHeader({ onOpen }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 bg-dblue border-b border-white/10">
      <button
        onClick={onOpen}
        className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>
      <img
        src="/src/Logo/CIS-Community-Main-Logo.png"
        alt="logo"
        className="h-8 object-contain"
      />
      <div className="w-9" /> {/* balance spacer */}
    </header>
  );
}

// ─── SideBar ──────────────────────────────────────────────────────────────────

export default function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeMenu = () => setIsSideBarOpen(false);

  return (
    <>
      <MobileHeader onOpen={() => setIsSideBarOpen(true)} />

      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-60 flex flex-col
        bg-dblue border-r border-white/6
        transition-transform duration-300 ease-in-out
        ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0 h-screen overflow-y-auto
      `}
      >
        {/* Logo + close */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/6">
          <img
            src="/src/Logo/CIS-Community-Main-Logo.png"
            alt="CIS Community"
            className="h-25 object-contain"
          />
          <button
            onClick={closeMenu}
            className="lg:hidden p-1.5 text-black hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item, index) => (
            <NavItem key={index} item={item} closeMobileMenu={closeMenu} />
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-white/[0.06]">
          <p className="text-[11px] text-slate-500 text-center tracking-widest uppercase">
            CIS Community Admin
          </p>
        </div>
      </aside>
    </>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-100">
      <SideBar />
      <main className="flex-1 p-6 lg:mt-0 mt-14">{children}</main>
    </div>
  );
}
