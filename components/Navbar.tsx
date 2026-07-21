'use client'

import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'
import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from './nav/navData'
import MegaPanel from './nav/MegaPanel'
import MobileMenu from './nav/MobileMenu'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openMega, setOpenMega] = useState<string | null>(null)
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const pathname = usePathname()
    const isHome = pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close everything whenever the route changes
    useEffect(() => {
        setOpenMega(null)
        setMenuOpen(false)
    }, [pathname])

    // Escape closes the open mega menu
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpenMega(null)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    const clearCloseTimer = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current)
            closeTimer.current = null
        }
    }, [])

    const openNow = useCallback((key: string) => {
        clearCloseTimer()
        setOpenMega(key)
    }, [clearCloseTimer])

    const scheduleClose = useCallback(() => {
        clearCloseTimer()
        closeTimer.current = setTimeout(() => setOpenMega(null), 150)
    }, [clearCloseTimer])

    // On homepage: transparent until scrolled or a mega menu is open; on other pages: always solid
    const solidBg = !isHome || scrolled || !!openMega
    const textColor = solidBg ? 'text-ink' : 'text-ivory'
    const logoFilter = solidBg ? '' : 'brightness-0 invert'

    return (
        <>
            <header
                onMouseLeave={scheduleClose}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    solidBg
                        ? 'bg-ivory/95 backdrop-blur-sm border-b border-gold/25 py-4'
                        : 'bg-transparent py-7'
                }`}
            >
                <div className="px-8 md:px-16 lg:px-24">
                    <div className="flex items-center justify-between">

                        {/* Logo — larger over the hero, shrinks once the bar turns solid */}
                        <Link href="/" className="shrink-0">
                            <Image
                                src={Logo}
                                width={100}
                                height={84}
                                alt="African Citril Safaris"
                                className={`transition-all duration-500 ${logoFilter}`}
                                style={{ height: solidBg ? '46px' : '60px', width: 'auto' }}
                            />
                        </Link>

                        {/* Desktop nav + CTA, grouped together on the right */}
                        <div className="hidden lg:flex items-center gap-10 xl:gap-12">
                            <nav aria-label="Main" className="flex items-center gap-7 xl:gap-9">
                                {NAV_ITEMS.map((item) => {
                                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
                                const isOpen = openMega === item.key

                                return (
                                    <div
                                        key={item.key}
                                        className="relative"
                                        onMouseEnter={() => item.mega && openNow(item.key)}
                                    >
                                        {item.mega ? (
                                            <button
                                                onClick={() => setOpenMega(isOpen ? null : item.key)}
                                                aria-expanded={isOpen}
                                                aria-haspopup="true"
                                                className={`group flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                                                    active || isOpen ? 'text-clay' : `${textColor} hover:text-clay`
                                                }`}
                                            >
                                                {item.label}
                                                <svg
                                                    className={`h-2.5 w-2.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                                <span className={`absolute -bottom-1.5 left-0 right-0 h-px origin-left bg-gold transition-transform duration-300 ${
                                                    active || isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                }`} />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`group relative text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                                                    active ? 'text-clay' : `${textColor} hover:text-clay`
                                                }`}
                                            >
                                                {item.label}
                                                <span className={`absolute -bottom-1.5 left-0 right-0 h-px origin-left bg-gold transition-transform duration-300 ${
                                                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                }`} />
                                            </Link>
                                        )}
                                    </div>
                                )
                            })}
                        </nav>

                        {/* Desktop CTA — styled like the other nav links, but always in the active state */}
                        <Link
                            href="/contact"
                            className="relative shrink-0 text-[10px] font-medium uppercase tracking-[0.25em] text-clay"
                        >
                            Enquire
                            <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />
                        </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className={`lg:hidden p-2 ${textColor}`}
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </div>
                </div>

                {/* Mega menu panel — mounted only while open, so hidden links aren't tabbable */}
                {NAV_ITEMS.map((item) => item.mega && openMega === item.key && (
                    <div
                        key={item.key}
                        onMouseEnter={() => openNow(item.key)}
                        className="absolute inset-x-0 top-full animate-[menu-in_0.22s_ease-out] border-t border-gold/40 bg-ivory shadow-2xl"
                    >
                        <div className="px-8 md:px-16 lg:px-24 py-14">
                            <MegaPanel mega={item.mega} onNavigate={() => setOpenMega(null)} />
                        </div>
                    </div>
                ))}
            </header>

            {/* Scrim behind an open mega menu */}
            <div
                onClick={() => setOpenMega(null)}
                className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${
                    openMega ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                aria-hidden="true"
            />

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}

export default Navbar
