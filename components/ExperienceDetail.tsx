import Image from "next/image"
import Link from "next/link"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"

type ItinItem = {
    title: { day: string; location: string }
    activity: string
}

type ExperienceProps = {
    image: string
    title: string
    destination: string
    days: string
    description: string
    itinerary: ItinItem[]
}

const ExperienceDetail = ({ image, title, destination, days, description, itinerary }: ExperienceProps) => {
    return (
        <main className="bg-ivory">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
                <Image src={image} alt={title} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-16 lg:px-24">
                    <Kicker tone="light">{destination}</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-ivory">
                        {title}
                    </h1>
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-ivory/60">{days}</p>
                </div>
            </div>

            {/* ── CONTENT ──────────────────────────────────────────── */}
            <div className="px-8 md:px-16 lg:px-24 py-20">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">

                    {/* Main — 2/3 */}
                    <div className="lg:col-span-2">
                        <Reveal>
                            <Kicker>Overview</Kicker>
                            <p className="mt-6 text-lg leading-relaxed text-ink/70">
                                {description.replace(/<[^>]+>/g, "")}
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="mt-16">
                                <Kicker>Itinerary</Kicker>
                                <div className="mt-6">
                                    {itinerary.map((itin, i) => (
                                        <div key={i} className="border-b border-dotted border-stone py-6 last:border-0">
                                            <div className="flex items-baseline justify-between gap-6">
                                                <div className="flex items-baseline gap-4">
                                                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.25em] text-clay">
                                                        {itin.title.day}
                                                    </span>
                                                    <span className="font-serif text-lg text-ink">{itin.title.location}</span>
                                                </div>
                                                <span className="shrink-0 text-[10px] font-medium text-gold">
                                                    {i + 1} / {itinerary.length}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                                {itin.activity.replace(/<[^>]+>/g, "")}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar — 1/3 */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-ink p-8">
                                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Enquire About This Safari</p>
                                <h3 className="font-serif text-xl text-ivory">{title}</h3>
                                <p className="mb-8 mt-2 text-sm text-ivory/50">{days}</p>
                                <Link
                                    href="/contact"
                                    className="block bg-gold px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ivory"
                                >
                                    Enquire Now
                                </Link>
                            </div>

                            <div className="border border-stone p-8">
                                <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-clay">Trip Details</p>
                                <ul className="space-y-4 text-sm text-ink/70">
                                    <li className="flex items-center justify-between border-b border-stone pb-4">
                                        <span className="font-medium text-ink">Duration</span>
                                        <span>{days}</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-stone pb-4">
                                        <span className="font-medium text-ink">Destination</span>
                                        <span>{destination}</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-stone pb-4">
                                        <span className="font-medium text-ink">Days</span>
                                        <span>{itinerary.length}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="font-medium text-ink">Style</span>
                                        <span>Bespoke</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href="/experience"
                                className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-clay transition-all duration-300 hover:gap-3"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                All Safaris
                            </Link>
                        </div>
                    </aside>

                </div>
            </div>

        </main>
    )
}

export default ExperienceDetail
