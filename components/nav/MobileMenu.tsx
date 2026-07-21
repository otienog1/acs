'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/_Logo.svg'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from './navData'

interface MobileMenuProps {
    open: boolean
    onClose: () => void
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    const [expanded, setExpanded] = useState<string | null>(null)
    const pathname = usePathname()

    return (
        <div
            className={`fixed inset-0 z-[100] bg-ink transition-opacity duration-400 lg:hidden ${
                open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-8 text-ivory/60 hover:text-ivory transition-colors"
                aria-label="Close menu"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

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

            <nav className="flex h-full flex-col justify-center gap-1 overflow-y-auto px-8 pt-28 pb-16">
                <div className="mb-6 h-px w-12 bg-gold" />
                {NAV_ITEMS.map((item) => {
                    const isExpanded = expanded === item.key
                    const active = pathname === item.href

                    if (!item.mega) {
                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                onClick={onClose}
                                className={`py-3 font-serif text-2xl tracking-tight transition-colors duration-200 ${
                                    active ? 'text-gold' : 'text-ivory hover:text-gold'
                                }`}
                            >
                                {item.label}
                            </Link>
                        )
                    }

                    return (
                        <div key={item.key} className="border-b border-white/10 py-1">
                            <button
                                onClick={() => setExpanded(isExpanded ? null : item.key)}
                                aria-expanded={isExpanded}
                                className={`flex w-full items-center justify-between py-2.5 font-serif text-2xl tracking-tight transition-colors duration-200 ${
                                    active ? 'text-gold' : 'text-ivory'
                                }`}
                            >
                                {item.label}
                                <svg
                                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={`grid overflow-hidden transition-all duration-300 ${isExpanded ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="min-h-0">
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-2">
                                        {item.mega.columns.map((col) => (
                                            <div key={col.heading}>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{col.heading}</p>
                                                <ul className="mt-3 space-y-2.5">
                                                    {col.links.map((link) => (
                                                        <li key={link.href}>
                                                            <Link
                                                                href={link.href}
                                                                onClick={onClose}
                                                                className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-200"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={item.mega.viewAll.href}
                                        onClick={onClose}
                                        className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-gold-soft border-b border-gold-soft/50 pb-0.5"
                                    >
                                        {item.mega.viewAll.label}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <Link
                    href="/contact"
                    onClick={onClose}
                    className="mt-8 self-start inline-block bg-gold text-ink text-xs tracking-[0.2em] uppercase px-8 py-4"
                >
                    Enquire
                </Link>
            </nav>
        </div>
    )
}

export default MobileMenu
