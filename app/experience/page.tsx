import Link from "next/link"
import Image from "next/image"
import { getExperiences, getPage } from "@/components/page"
import content from "@/lib/content.json"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"
import JourneyCard from "@/components/home/JourneyCard"

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').trim()

const firstSentence = (html: string) => {
    const text = stripHtml(html)
    const cut = text.indexOf('. ')
    return cut === -1 ? text : text.slice(0, cut + 1)
}

const Experiences = async () => {
    await getExperiences()
    await getPage(14)
    const { hero_image } = content.experienceIndex
    const experiences = content.experiences

    return (
        <main className="bg-ivory">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
                <Image
                    src={hero_image}
                    alt="Maasai guides sitting with travellers on the grass, demonstrating fire-making"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-16 lg:px-24">
                    <Kicker tone="light">Curated Itineraries</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-ivory">
                        Safari Journeys
                    </h1>
                </div>
            </div>

            {/* ── INTRO ────────────────────────────────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Kicker align="center">Signature Itineraries</Kicker>
                    <p className="mt-10 text-lg leading-relaxed text-ink/70">
                        Each itinerary is crafted around the finest wildlife areas in Kenya and Tanzania, combining
                        authentic encounters with exceptional comfort at every stage of the journey — a starting
                        point for a conversation, not a fixed template.
                    </p>
                </Reveal>
            </section>

            {/* ── JOURNEYS GRID ────────────────────────────────────── */}
            <section className="px-8 pb-24 md:px-16 md:pb-32 lg:px-24">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
            </section>

            {/* ── BESPOKE CTA ──────────────────────────────────────── */}
            <section className="relative mx-8 my-24 flex min-h-[420px] items-center overflow-hidden md:mx-16 lg:mx-24">
                <Image
                    src="/images/home/cta.webp"
                    alt="A lilac-breasted roller taking flight over the bush"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-ink/70" />
                <Reveal className="relative z-10 w-full px-10 py-16 text-center md:px-20">
                    <Kicker align="center" tone="light">Tailor-Made</Kicker>
                    <h2 className="mx-auto mt-6 max-w-xl font-serif text-3xl leading-[1.1] text-ivory md:text-4xl">
                        Don&apos;t See What You&apos;re Looking For?
                    </h2>
                    <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/70">
                        We build fully bespoke itineraries from scratch. Tell us your dates, destinations, and interests.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-10 inline-block bg-gold px-9 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ivory"
                    >
                        Plan a Custom Safari
                    </Link>
                </Reveal>
            </section>

        </main>
    )
}

export default Experiences
