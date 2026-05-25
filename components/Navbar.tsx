'use client'

import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
    { href: '/',            label: 'Home' },
    { href: '/about',       label: 'About' },
    { href: '/destinations',label: 'Destinations' },
    { href: '/experience',  label: 'Experiences' },
    { href: '/contact',     label: 'Contact' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // On homepage: transparent until scrolled; on other pages: always solid
    const solidBg = !isHome || scrolled
    const textColor = solidBg ? 'text-[#1a1a1a]' : 'text-white'
    const logoFilter = solidBg ? '' : 'brightness-0 invert'

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    solidBg
                        ? 'bg-white/95 backdrop-blur-sm border-b border-[#C2AE72]/30 py-4'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <Image
                                src={Logo}
                                width={100}
                                height={84}
                                alt="African Citril Safaris"
                                className={`transition-all duration-500 ${logoFilter}`}
                                style={{ height: '48px', width: 'auto' }}
                            />
                        </Link>

                        {/* Desktop nav — centered */}
                        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                            {NAV_LINKS.map(({ href, label }) => {
                                const active = pathname === href
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`text-[10px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 relative group ${
                                            active
                                                ? 'text-[#742E13]'
                                                : `${textColor} hover:text-[#742E13]`
                                        }`}
                                    >
                                        {label}
                                        {/* Active underline */}
                                        <span className={`absolute -bottom-1 left-0 right-0 h-px bg-[#C2AE72] transition-transform duration-300 origin-left ${
                                            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`} />
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Desktop CTA */}
                        <Link
                            href="/contact"
                            className={`hidden md:inline-block text-[10px] tracking-[0.25em] uppercase px-6 py-3 transition-all duration-300 shrink-0 ${
                                solidBg
                                    ? 'bg-[#742E13] text-white hover:bg-[#5a2310]'
                                    : 'bg-white/15 text-white border border-white/40 hover:bg-white hover:text-[#742E13]'
                            }`}
                        >
                            Book Now
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className={`md:hidden p-2 ${textColor}`}
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </header>

            {/* Mobile overlay menu */}
            <div
                className={`fixed inset-0 z-[100] bg-[#1E0E05] transition-opacity duration-400 md:hidden ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Close button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-8 text-white/60 hover:text-white transition-colors"
                    aria-label="Close menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Logo */}
                <div className="absolute top-6 left-8">
                    <Image
                        src={Logo}
                        width={80}
                        height={67}
                        alt="African Citril Safaris"
                        className="brightness-0 invert"
                        style={{ height: '40px', width: 'auto' }}
                    />
                </div>

                {/* Links */}
                <nav className="flex flex-col justify-center h-full px-10 gap-8">
                    <div className="h-px w-12 bg-[#C2AE72] mb-4" />
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${
                                pathname === href ? 'text-[#C2AE72]' : 'text-white hover:text-[#C2AE72]'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 self-start inline-block bg-[#C2AE72] text-white text-xs tracking-[0.2em] uppercase px-8 py-4"
                    >
                        Book Now
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar
