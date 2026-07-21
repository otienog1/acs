import Image from 'next/image'
import Link from 'next/link'
import type { MegaConfig, NavLink } from './navData'

interface MegaPanelProps {
    mega: MegaConfig
    onNavigate?: () => void
}

const LinkRow = ({ link, onNavigate }: { link: NavLink; onNavigate?: () => void }) => (
    <Link href={link.href} onClick={onNavigate} className="group flex items-center gap-4">
        {link.image && (
            <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-stone">
                <Image
                    src={link.image}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 ease-editorial group-hover:scale-110"
                />
            </span>
        )}
        <span className="font-serif text-[15px] leading-snug text-ink/80 transition-colors duration-200 group-hover:text-clay">
            {link.label}
        </span>
    </Link>
)

const MegaPanel = ({ mega, onNavigate }: MegaPanelProps) => {
    return (
        <div className="grain-overlay grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr,1.9fr]">
            <div className="hidden lg:block">
                <Link href={mega.featured.href} onClick={onNavigate} className="group relative block h-full min-h-[280px] overflow-hidden">
                    <Image
                        src={mega.featured.image}
                        alt={mega.featured.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-[1100ms] ease-editorial group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">{mega.featured.eyebrow}</p>
                        <h4 className="mt-3 font-serif text-2xl italic leading-snug text-ivory">{mega.featured.title}</h4>
                        <p className="mt-3 text-xs leading-relaxed text-ivory/70">{mega.featured.blurb}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ivory transition-all duration-300 group-hover:gap-3">
                            Explore
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:border-l lg:border-stone lg:pl-14">
                {mega.columns.map((col) => (
                    <div key={col.heading}>
                        <h3 className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-clay">
                            <span className="h-px w-4 bg-gold" />
                            {col.headingHref ? (
                                <Link
                                    href={col.headingHref}
                                    onClick={onNavigate}
                                    className="transition-colors duration-200 hover:text-ink"
                                >
                                    {col.heading}
                                </Link>
                            ) : (
                                col.heading
                            )}
                        </h3>
                        <ul className="mt-6 space-y-5">
                            {col.links.map((link) => (
                                <li key={link.href}>
                                    <LinkRow link={link} onNavigate={onNavigate} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="col-span-1 border-t border-stone pt-6 sm:col-span-2">
                    <Link
                        href={mega.viewAll.href}
                        onClick={onNavigate}
                        className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-clay"
                    >
                        {mega.viewAll.label}
                        <svg
                            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MegaPanel
