'use client'

import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'
import { useState } from "react"
import { usePathname } from 'next/navigation'
// import ThemeSwitcher from '@/components/ThemeSwitcher'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 py-8" style={{ borderBottom: '1px solid red', borderBottomColor: 'rgba(27, 118, 50, .1)' }}>
            <div className="flex items-center justify-center mx-auto pb-12">
                <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={Logo}
                        width={137 * 1.5}
                        height={115 * 1.5}
                        alt="Starlyn Thrilling Adventures"
                        className="mr-3"
                    />
                </Link>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`${open ? 'block' : "hidden"} w-full md:block md:w-auto`}>
                    <div className="font-medium uppercase tracking-widest flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <Link href="/" onClick={() => setOpen(false)}>
                            <span className={`block py-2 px-3 ${pathname === '/' ? 'text-white bg-blue-700' : 'text-gray-900'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</span>
                        </Link>
                        <Link href="/about" onClick={() => setOpen(false)}>
                            <span className={`block py-2 px-3 ${pathname === '/about' ? 'text-white bg-blue-700' : 'text-gray-900'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>About</span>
                        </Link>
                        <Link href="/destinations" onClick={() => setOpen(false)}>
                            <span className={`block py-2 px-3 ${pathname === '/destinations' ? 'text-white bg-blue-700' : 'text-gray-900'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Destinations</span>
                        </Link>
                        <Link href="/experience" onClick={() => setOpen(false)}>
                            <span className={`block py-2 px-3 ${pathname === '/experience' ? 'text-white bg-blue-700' : 'text-gray-900'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Experience</span>
                        </Link>
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            <span className={`block py-2 px-3 ${pathname === '/contact' ? 'text-white bg-blue-700' : 'text-gray-900'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Contact</span>
                        </Link>
                        {/* <ThemeSwitcher /> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar