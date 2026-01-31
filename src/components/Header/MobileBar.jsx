"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function MobileBar() {

    const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

    const toggleMenu = () => setIsBarOpen((prev) => !prev)

    return (
        <>
            {/* Hamburger Button that is  Only visible on small screens */}
            <div className='block md:hidden'>
                <button className="p-2 border-2 rounded active:scale-95" onClick={toggleMenu}>
                    <Menu />
                </button>
            </div>

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 z-50 bg-white h-screen w-[70vw] shadow-2xl transition-all duration-300 ease-in-out ${isBarOpen ? "left-0" : "-left-full"}`}>

                {/* Close Button Inside Drawer */}
                <div className='flex justify-end p-4'>
                    <button onClick={toggleMenu} className="p-1 hover:bg-gray-100 rounded">
                        <X />
                    </button>
                </div>

                {/* Navbar Links */}
                <ul className='flex flex-col gap-6 px-8 py-4 text-lg font-semibold text-secondary'>
                    <li onClick={toggleMenu}>
                        <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href="#about" className="hover:text-blue-600 transition">About</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* if user click out side the menu bar this is to*/}
            {isBarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </>
    )
}

export default MobileBar