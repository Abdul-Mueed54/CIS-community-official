import React, { useState } from "react"; // 1. Added useState
import { Link, NavLink } from "react-router-dom";

export default function Header() {
      const [isOpen, setIsOpen] = useState(false); // 2. State to toggle menu

      return (
            <header className="shadow sticky z-50 top-0">
                  <nav className="bg-blue-900 border-gray-200 px-4 lg:px-6 py-2.5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl ">
                              <Link to="/" className="flex items-center">
                                    <img
                                          src="src/Logo/CIS-Community-Main-Logo.png" alt="Community logo"
                                          className="mr-3 h-12"
                                    />
                                    <h1 className="text-white text-2xl md:text-4xl font-semibold">CIS COMMUNITY</h1>
                              </Link>

                              {/* 3. Hamburger Button (Visible only on mobile/tablet) */}
                              <div className="flex items-center lg:hidden">
                                    <button
                                          onClick={() => setIsOpen(!isOpen)}
                                          className="text-white p-2 focus:outline-none"
                                    >
                                          {/* Simple SVG Hamburger Icon */}
                                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 26 24">
                                                {isOpen ? (
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                ) : (
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                                )}
                                          </svg>
                                    </button>
                              </div>
                              
                              {/* 4. Desktop Menu (Hidden on mobile) */}
                              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                          <NavLinks />
                                    </ul>
                              </div>

                              {/* 5. Mobile Menu Dropdown */}
                              <div className={`${isOpen ? "block" : "hidden"} w-full lg:hidden`}>
                                    <ul className="flex flex-col mt-4 font-medium space-y-2 pb-4">
                                          <NavLinks />
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </header>
      );
}

// Helper component to avoid repeating the list items twice
function NavLinks() {
      const links = ["Home", "About", "Events", "Teams", "Registration"];
      return (
            <>
                  {links.map((link) => (
                        <li key={link}>
                              <NavLink
                                    to={link === "Home" ? "/" : link.toLowerCase()}
                                    className={({ isActive }) =>
                                          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} hover:text-black lg:hover:bg-transparent`
                                    }
                              >
                                    {link}
                              </NavLink>
                        </li>
                  ))}
            </>
      );
}