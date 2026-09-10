import { getPage } from "@/components/page"
import Image from "next/image"
import Link from "next/link"
import content from "@/lib/content.json"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"
import JourneyCard from "@/components/home/JourneyCard"
import DestinationPanel from "@/components/home/DestinationPanel"
import PillarCard from "@/components/home/PillarCard"
import StatRow from "@/components/home/StatRow"
import CampCategoryCard from "@/components/home/CampCategoryCard"
import TestimonialCard from "@/components/home/TestimonialCard"
import JournalCard from "@/components/home/JournalCard"

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').trim()

const firstSentence = (html: string) => {
    const text = stripHtml(html)
    const cut = text.indexOf('. ')
    return cut === -1 ? text : text.slice(0, cut + 1)
}

const PILLARS = [
    {
        index: '01',
        title: 'Bespoke by Design',
        body: "No two itineraries leave our studio alike. Every journey is drawn up around your pace, your interests, and the season's own rhythm — never lifted from a template.",
    },
    {
        index: '02',
        title: 'Guides Who Read the Land',
        body: 'Our naturalist guides train for years before leading a single safari — versed not only in species, but in behaviour, terrain, and the quiet signs that precede a sighting.',
    },
    {
        index: '03',
        title: 'Access, Not Just Itinerary',
        body: "Long-standing relationships with conservancies and camp owners open doors that don't appear in any brochure — private concessions and rooms held for journeys that matter.",
    },
    {
        index: '04',
        title: 'Presence Throughout',
        body: 'A dedicated journey designer is reachable from first enquiry to final farewell drive — in Nairobi, in the bush, and everywhere in between.',
    },
]

const STATS = [
    { value: '2012', label: 'Founded in Nairobi' },
    { value: '2', label: 'Countries, One Standard' },
    { value: '100%', label: 'Tailor-Made Itineraries' },
    { value: '14', label: 'Years in the Field' },
]

const CAMP_CATEGORIES = [
    {
        title: 'Private Tented Camps',
        body: 'Canvas suites set deep in exclusive conservancies, where the only sounds after dark belong to the bush itself.',
        image: '/images/home/camp-private-tented.webp',
    },
    {
        title: 'Owner-Run Boutique Lodges',
        body: 'Small, personally run properties where the person who greets you at dinner is often the one who built the place.',
        image: '/images/home/camp-boutique-lodges.webp',
    },
    {
        title: 'Exclusive-Use Villas',
        body: 'Entire houses and their staff held for you alone — for families, milestone gatherings, and journeys that ask for privacy.',
        image: '/images/home/camp-villas.webp',
    },
    {
        title: 'Mobile Migration Camps',
        body: 'Seasonal camps that follow the herds across the Mara and Serengeti, moved by hand so the wilderness is left as it was found.',
        image: '/images/home/camp-mobile-migration.webp',
    },
]

const TAILORED_EXPERIENCES = [
    {
        title: 'Photography Safaris',
        body: 'Vehicles built for glass, guides who know the light, and a pace set by the frame you are waiting for.',
        image: '/images/home/tailored-photography.webp',
    },
    {
        title: 'Family Safaris',
        body: 'Itineraries paced for younger travellers, with guides trained to make the bush as thrilling as it is safe.',
        image: '/images/home/tailored-family.webp',
    },
    {
        title: 'Honeymoons & Private Journeys',
        body: 'Remote camps, candlelit bush dinners, and itineraries designed around two people and nothing else.',
        image: '/images/home/tailored-honeymoons.webp',
    },
    {
        title: 'Walking & Cultural Immersion',
        body: 'Slower mornings on foot with an armed naturalist, and time spent with the Maasai and Samburu families who call this land home.',
        image: '/images/home/tailored-walking.webp',
    },
]

const TESTIMONIALS = [
    {
        quote: 'Every detail felt considered before we thought to ask for it. The guiding was the finest we have experienced anywhere in the world.',
        attribution: 'E. Whitfield — United Kingdom',
    },
    {
        quote: "They listened first and planned second. What came back was closer to what we didn't know we wanted than what we'd asked for.",
        attribution: 'M. & J. Laurent — France',
    },
    {
        quote: 'The kind of quiet, unshowy expertise you only notice by how effortless everything felt. We are already planning our return.',
        attribution: 'A. Kapoor — Singapore',
    },
]

const JOURNAL_ENTRIES = [
    {
        category: 'The Migration',
        title: 'Reading the Great Migration: A Guide to Timing Your Crossing',
        teaser: "The herds don't follow a calendar so much as the rain. Here is how our guides read the season.",
        image: '/images/journal/great-migration.webp',
    },
    {
        category: 'Conservation',
        title: "Inside the Conservancy Model: How Private Land Is Reshaping Kenya's Wildlife",
        teaser: 'A quiet land-lease system is doing more for Kenyan wildlife than any single park — and changing how we plan journeys.',
        image: '/images/journal/conservancy-model.webp',
    },
    {
        category: 'Field Notes',
        title: 'Packing for the Bush: What a Decade of Safaris Has Taught Us',
        teaser: 'Fewer items, better chosen. Notes from guides who have packed this list more times than they can count.',
        image: '/images/journal/packing-for-the-bush.webp',
    },
]

const HomePage = async () => {
    await getPage(5)

    const { section_1 } = content.home
    const experiences = content.experiences
    const [kenya, tanzania] = content.destinations.destinations

    return (
        <main className="min-h-screen bg-ivory">

            {/* ── 1. HERO ───────────────────────────────────────────── */}
            <div className="relative h-screen w-full overflow-hidden">
                <Image
                    src={section_1.slider[0].image}
                    alt={section_1.slider[0].alt}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="bg-ink"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />

                <div className="animate-fade-in absolute bottom-0 left-0 right-0 z-10 px-8 pb-16 md:px-16 md:pb-20 lg:px-24 lg:pb-24">
                    <Kicker tone="light">Kenya &amp; Tanzania</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] text-ivory">
                        Africa, on your own terms.
                    </h1>
                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block border border-ivory/50 px-9 py-4 text-xs uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink"
                        >
                            Begin Your Journey
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 opacity-60 md:right-16 md:flex lg:right-24">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-ivory" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                    <div className="h-12 w-px bg-ivory/50" />
                </div>
            </div>

            {/* ── 2. FEATURED SAFARI JOURNEYS ───────────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal>
                    <Kicker>Signature Itineraries</Kicker>
                    <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr,1fr] lg:gap-24">
                        <h2 className="font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                            Journeys, Composed — Not Packaged
                        </h2>
                        <p className="text-base leading-relaxed text-ink/60">
                            Each itinerary begins as a conversation. What follows is a sequence of places, camps, and
                            encounters built around the way you want to experience the bush — never a fixed template.
                            These are the four journeys where most conversations begin.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {experiences.map((exp, i) => (
                        <Reveal key={exp.acf.slug} delay={i * 100}>
                            <JourneyCard
                                href={`/experience/${exp.acf.slug}`}
                                destination={exp.acf.destination}
                                days={exp.acf.days}
                                title={exp.acf.title}
                                teaser={firstSentence(exp.acf.description)}
                                image={exp.acf.image}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={200}>
                    <div className="mt-16 flex justify-center">
                        <Link
                            href="/experience"
                            className="inline-block border-2 border-clay px-10 py-4 text-xs uppercase tracking-[0.2em] text-clay transition-colors duration-300 hover:bg-clay hover:text-ivory"
                        >
                            View All Experiences
                        </Link>
                    </div>
                </Reveal>
            </section>

            {/* ── 3. SIGNATURE DESTINATIONS ─────────────────────────── */}
            <section className="bg-ivory pb-24 md:pb-32">
                <div className="px-8 md:px-16 lg:px-24">
                    <Reveal>
                        <Kicker>Where We Go</Kicker>
                        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr,1fr] lg:gap-24">
                            <h2 className="font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                                Two Landscapes, One Standard of Craft
                            </h2>
                            <p className="text-base leading-relaxed text-ink/60">
                                Kenya and Tanzania hold the greatest concentration of wildlife on the continent — and
                                the greatest range of ways to experience it. We know both intimately: which
                                conservancies to enter quietly, which crossings to wait for, which camps disappear
                                into the landscape rather than dominate it.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-3 px-8 md:px-16 lg:grid-cols-2 lg:px-24">
                    <Reveal>
                        <DestinationPanel
                            href="/destinations"
                            name={kenya.destination.name}
                            image={kenya.destination.image}
                            teaser="Birthplace of safari — from the Mara's open plains and the Great Migration to the conservancy model quietly redefining African conservation."
                        />
                    </Reveal>
                    <Reveal delay={120}>
                        <DestinationPanel
                            href="/destinations"
                            name={tanzania.destination.name}
                            image={tanzania.destination.image}
                            teaser="The Serengeti's endless horizon, the ancient bowl of the Ngorongoro Crater, and the slow rhythm of Zanzibar waiting at journey's end."
                        />
                    </Reveal>
                </div>
            </section>

            {/* ── 4. WHY TRAVEL WITH US ─────────────────────────────── */}
            <section className="bg-sand py-24 md:py-32">
                <div className="px-8 md:px-16 lg:px-24">
                    <Reveal>
                        <Kicker align="center">Our Approach</Kicker>
                        <h2 className="mx-auto mt-6 max-w-2xl text-center font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                            The Difference Is in the Detail
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {PILLARS.map((pillar, i) => (
                            <Reveal key={pillar.title} delay={i * 100}>
                                <PillarCard {...pillar} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={200}>
                        <div className="mt-20 border-t border-stone pt-12">
                            <StatRow stats={STATS} />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── 5. LUXURY LODGES & CAMPS ──────────────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal>
                    <Kicker>Where You&apos;ll Stay</Kicker>
                    <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr,1fr] lg:gap-24">
                        <h2 className="font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                            Camps Chosen, Not Just Booked
                        </h2>
                        <p className="text-base leading-relaxed text-ink/60">
                            We work with a small, deliberately curated circle of camps and lodges — owner-run tented
                            camps deep in private conservancies, boutique lodges with a genuine sense of place, and
                            exclusive-use villas for those who want the bush entirely to themselves. Every property on
                            our list has been visited, vetted, and revisited.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {CAMP_CATEGORIES.map((camp, i) => (
                        <Reveal key={camp.title} delay={i * 100}>
                            <CampCategoryCard {...camp} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── 6. TAILOR-MADE EXPERIENCES ────────────────────────── */}
            <section className="bg-sand py-24 md:py-32">
                <div className="px-8 md:px-16 lg:px-24">
                    <Reveal>
                        <Kicker>Built Around You</Kicker>
                        <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                            Every Journey Begins With a Question: What Do You Want to Feel?
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {TAILORED_EXPERIENCES.map((exp, i) => (
                            <Reveal key={exp.title} delay={i * 100}>
                                <CampCategoryCard {...exp} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={200}>
                        <div className="mt-16 flex justify-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-clay px-10 py-4 text-xs uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-ink"
                            >
                                Start Planning
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── 7. CONSERVATION & SUSTAINABILITY ──────────────────── */}
            <section className="relative overflow-hidden bg-olive-deep py-24 text-ivory md:py-32">
                <div className="grid grid-cols-1 gap-16 px-8 md:px-16 lg:grid-cols-2 lg:px-24 lg:gap-24">
                    <Reveal>
                        <Kicker tone="light">Beyond the Itinerary</Kicker>
                        <h2 className="mt-6 font-serif text-3xl leading-[1.1] md:text-4xl lg:text-5xl">
                            Travel That Leaves the Land Better Held
                        </h2>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">
                            We believe travel can be a force for good — not as a slogan, but as a working principle
                            behind every itinerary we design. A share of every journey supports the conservancies,
                            guides, and communities who are the true custodians of this land.
                        </p>
                        <ul className="mt-10 space-y-5">
                            {[
                                'A portion of every booking funds anti-poaching and habitat protection initiatives across Kenya and Tanzania.',
                                'Long-term partnerships with Maasai and Samburu communities, so tourism benefits the people who share these landscapes.',
                                'A preference for low-impact camps, small groups, and routes that leave room for the wilderness to remain wild.',
                            ].map((line) => (
                                <li key={line} className="flex gap-4 text-sm leading-relaxed text-ivory/80">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-full">
                            <Image
                                src="/images/home/conservation.webp"
                                alt="A lone bull elephant grazing on open grassland in a protected conservancy"
                                fill
                                sizes="(min-width: 1024px) 45vw, 100vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── 8. GUEST STORIES & TESTIMONIALS ───────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal>
                    <Kicker align="center">In Their Words</Kicker>
                    <h2 className="mx-auto mt-6 max-w-xl text-center font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                        Guest Stories
                    </h2>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={t.attribution} delay={i * 100} className="h-full">
                            <TestimonialCard {...t} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── 9. TRUST INDICATORS ───────────────────────────────── */}
            <section className="bg-ink py-16 text-ivory">
                <div className="px-8 md:px-16 lg:px-24">
                    <Reveal>
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                'Nairobi-based, East Africa-focused since 2012',
                                'Small-group and fully private departures only',
                                'Direct relationships with every camp we recommend',
                                'A journey designer with you from first enquiry to farewell',
                            ].map((line) => (
                                <p key={line} className="border-l border-white/20 pl-5 text-sm leading-relaxed text-ivory/70">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── 10. TRAVEL JOURNAL / INSPIRATION ──────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal>
                    <Kicker>The Journal</Kicker>
                    <h2 className="mt-6 max-w-xl font-serif text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                        Field Notes &amp; Inspiration
                    </h2>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
                    {JOURNAL_ENTRIES.map((entry, i) => (
                        <Reveal key={entry.title} delay={i * 100}>
                            <JournalCard {...entry} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── 11. FINAL PREMIUM CTA ─────────────────────────────── */}
            <section className="relative mx-8 my-24 flex min-h-[520px] items-center overflow-hidden md:mx-16 lg:mx-24">
                <Image
                    src="/images/home/cta.webp"
                    alt="A lilac-breasted roller taking flight over the bush"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-ink/60" />
                <Reveal className="relative z-10 w-full px-10 py-20 text-center md:px-20 lg:px-28">
                    <Kicker align="center" tone="light">Begin</Kicker>
                    <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.1] text-ivory md:text-5xl lg:text-6xl">
                        Your Safari, Considered From First Enquiry
                    </h2>
                    <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ivory/75">
                        Tell us when you would like to travel and what draws you to East Africa. A journey designer
                        will reply within one business day with a proposal built around you — not a brochure.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-10 inline-block bg-gold px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ivory"
                    >
                        Start Your Enquiry
                    </Link>
                </Reveal>
            </section>

        </main>
    )
}

export default HomePage
