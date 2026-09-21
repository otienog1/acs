import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'
import NewsletterForm from './home/NewsletterForm'
import { KENYA_LINKS, TANZANIA_LINKS, SAFARI_STYLE_LINKS, type NavLink } from './nav/navData'

const DESTINATION_LINKS: NavLink[] = [KENYA_LINKS[0], TANZANIA_LINKS[0], KENYA_LINKS[1], TANZANIA_LINKS[1]]
const SAFARI_LINKS: NavLink[] = SAFARI_STYLE_LINKS.slice(0, 4)

interface FooterColumnProps {
    heading: string
    links: NavLink[]
    viewAll?: NavLink
}

const FooterColumn = ({ heading, links, viewAll }: FooterColumnProps) => (
    <div>
        <h3 className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-6">{heading}</h3>
        <ul className="space-y-3">
            {links.map(({ href, label }) => (
                <li key={href}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
        {viewAll && (
            <Link
                href={viewAll.href}
                className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-gold-soft hover:text-gold transition-colors duration-300"
            >
                {viewAll.label} &rarr;
            </Link>
        )}
    </div>
)

const Footer = () => {
    return (
        <footer className="bg-ink text-ivory grain-overlay">

            {/* Newsletter strip */}
            <div className="border-b border-white/10">
                <div className="px-8 md:px-16 lg:px-24 py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Field Notes, Occasionally</p>
                        <h3 className="font-serif text-2xl md:text-3xl text-ivory max-w-md">
                            Dispatches on the migration, the conservancies, and where to go next.
                        </h3>
                    </div>
                    <NewsletterForm />
                </div>
            </div>

            {/* Main */}
            <div className="px-8 md:px-16 lg:px-24 pt-16 pb-14">
                <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:grid-cols-[1.5fr,1fr,1fr,1.2fr]">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <Image
                            src={Logo}
                            width={100}
                            height={84}
                            alt="African Citril Safaris"
                            className="brightness-0 invert mb-6"
                            style={{ height: '52px', width: 'auto' }}
                        />
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Private safari journeys across Kenya and Tanzania, designed around you and held to a standard of quiet, considered craft.
                        </p>
                        <div className="flex gap-3.5 mt-7">
                            <Link href="#" aria-label="Instagram" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Facebook" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="X / Twitter" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <FooterColumn
                        heading="Destinations"
                        links={DESTINATION_LINKS}
                        viewAll={{ label: 'All Destinations', href: '/destinations' }}
                    />

                    <FooterColumn
                        heading="Safaris"
                        links={SAFARI_LINKS}
                        viewAll={{ label: 'All Safaris', href: '/experience' }}
                    />

                    {/* Contact */}
                    <div>
                        <h3 className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-6">Get in Touch</h3>
                        <ul className="space-y-3 text-white/50 text-sm">
                            <li>Nairobi, Kenya</li>
                            <li>
                                <a href="mailto:info@africancitrilsafaris.com" className="hover:text-white transition-colors duration-300">
                                    info@africancitrilsafaris.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+254720091713" className="hover:text-white transition-colors duration-300">
                                    +254 720 091 713
                                </a>
                            </li>
                            <li>
                                <a href="tel:+254725773534" className="hover:text-white transition-colors duration-300">
                                    +254 725 773 534
                                </a>
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-block mt-7 bg-gold text-ink text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-clay hover:text-ivory transition-colors duration-300"
                        >
                            Begin an Enquiry
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="px-8 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/30 text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} African Citril Safaris. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs">
                        <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors duration-300">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors duration-300">Terms of Service</Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
