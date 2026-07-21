import Image from 'next/image'
import Link from 'next/link'
import content from '@/lib/content.json'
import { DESTINATIONS } from '@/lib/destinationsData'
import type { CountryEntry } from '@/lib/countriesData'
import Kicker from '@/components/home/Kicker'
import Reveal from '@/components/home/Reveal'
import RegionCard from '@/components/destinations/RegionCard'
import JourneyCard from '@/components/home/JourneyCard'

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').trim()

const firstSentence = (html: string) => {
    const text = stripHtml(html)
    const cut = text.indexOf('. ')
    return cut === -1 ? text : text.slice(0, cut + 1)
}

const CountryDetail = ({ country }: { country: CountryEntry }) => {
    const { name, kicker, overview, highlights, gateway, image } = country

    const regions = DESTINATIONS.filter((d) => d.country === name)
    const relatedExperiences = content.experiences.filter((exp) => exp.acf.destination.includes(name))

    return (
        <main className="bg-ivory">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
                <Image src={image} alt={name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-16 lg:px-24">
                    <Kicker tone="light">Country</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-ivory">
                        {name}
                    </h1>
                    <p className="mt-4 max-w-lg font-serif text-lg italic text-ivory/80">{kicker}</p>
                </div>
            </div>

            {/* ── CONTENT ──────────────────────────────────────────── */}
            <div className="px-8 md:px-16 lg:px-24 py-20">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">

                    {/* Main — 2/3 */}
                    <div className="lg:col-span-2">
                        <Reveal>
                            <Kicker>Overview</Kicker>
                            <div className="mt-6 space-y-5">
                                {overview.map((paragraph, i) => (
                                    <p key={i} className="text-base leading-relaxed text-ink/70">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="mt-16">
                                <Kicker>{`Why ${name}`}</Kicker>
                                <ul className="mt-6 space-y-4">
                                    {highlights.map((line) => (
                                        <li key={line} className="flex gap-4 text-sm leading-relaxed text-ink/70">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar — 1/3 */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-ink p-8">
                                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Plan Your Visit</p>
                                <h3 className="font-serif text-xl text-ivory">{name}</h3>
                                <p className="mb-8 mt-2 text-sm text-ivory/50">{regions.length} regions we know well</p>
                                <Link
                                    href="/contact"
                                    className="block bg-gold px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ivory"
                                >
                                    Enquire Now
                                </Link>
                            </div>

                            <div className="border border-stone p-8">
                                <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-clay">Country Facts</p>
                                <ul className="space-y-4 text-sm text-ink/70">
                                    <li className="border-b border-stone pb-4">
                                        <span className="block font-medium text-ink">Gateway</span>
                                        {gateway}
                                    </li>
                                    <li>
                                        <span className="block font-medium text-ink">Regions We Cover</span>
                                        {regions.map((r) => r.name).join(', ')}
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href="/destinations"
                                className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-clay transition-all duration-300 hover:gap-3"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                All Destinations
                            </Link>
                        </div>
                    </aside>

                </div>
            </div>

            {/* ── REGIONS ────────────────────────────────────────────── */}
            <section className="bg-sand py-20 md:py-28">
                <div className="px-8 md:px-16 lg:px-24">
                    <Kicker>{`Regions Within ${name}`}</Kicker>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {regions.map((region, i) => (
                            <Reveal key={region.slug} delay={i * 80}>
                                <RegionCard slug={region.slug} name={region.name} summary={region.summary} image={region.image} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RELATED JOURNEYS ───────────────────────────────────── */}
            <section className="py-20 md:py-28">
                <div className="px-8 md:px-16 lg:px-24">
                    <Kicker>{`Journeys Through ${name}`}</Kicker>
                    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedExperiences.map((exp) => (
                            <JourneyCard
                                key={exp.acf.slug}
                                href={`/experience/${exp.acf.slug}`}
                                destination={exp.acf.destination}
                                days={exp.acf.days}
                                title={exp.acf.title}
                                teaser={firstSentence(exp.acf.description)}
                                image={exp.acf.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default CountryDetail
