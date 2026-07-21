import { getPage } from "@/components/page"
import Image from "next/image"
import Link from "next/link"
import content from "@/lib/content.json"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"
import PillarCard from "@/components/home/PillarCard"

const VALUES = [
    {
        index: '01',
        title: 'Conservation First',
        body: 'A portion of every booking supports wildlife conservation projects and anti-poaching initiatives in Kenya and Tanzania.',
    },
    {
        index: '02',
        title: 'Community Partnership',
        body: 'We work directly with local Maasai and Samburu communities, ensuring tourism benefits the true custodians of these lands.',
    },
    {
        index: '03',
        title: 'Authenticity',
        body: 'We favour small groups, off-the-beaten-path routes, and genuine cultural exchanges over mass-market tourism.',
    },
]

const SERVICES = [
    { title: 'Bespoke Safaris', body: 'Fully tailored itineraries built around your schedule, interests, and budget.' },
    { title: 'Group Departures', body: 'Scheduled small-group safaris for solo travellers and couples looking to share the experience.' },
    { title: 'Honeymoon Journeys', body: 'Romantic itineraries combining bush camps with coastal retreats on the Kenyan or Zanzibar coast.' },
    { title: 'Photography Safaris', body: 'Specialist trips designed for wildlife photographers, with guides who know the light and the animals.' },
    { title: 'Family Safaris', body: 'Child-friendly itineraries with experienced guides trained to make the bush accessible and exciting.' },
    { title: 'Custom Extensions', body: 'Airport transfers, accommodation bookings, and visa assistance from start to finish.' },
]

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').trim()

const getParagraphs = (html: string): string[] => {
    const matches = Array.from(html.matchAll(/<p>(.*?)<\/p>/gs)).map((m) => stripHtml(m[1]))
    return matches.length > 0 ? matches : [stripHtml(html)]
}

const AboutPage = async () => {
    await getPage(8)
    const a = content.about

    return (
        <main className="bg-ivory">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
                <Image
                    src={a.images[0].url}
                    alt="African Citril Safaris"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-16 lg:px-24">
                    <Kicker tone="light">Who We Are</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-ivory">
                        {a.title}
                    </h1>
                </div>
            </div>

            {/* ── PHILOSOPHY ───────────────────────────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Kicker align="center">Our Philosophy</Kicker>
                    {getParagraphs(a.about_us).map((para, i) => (
                        <p key={i} className={`${i === 0 ? 'mt-10' : 'mt-6'} text-lg leading-relaxed text-ink/70`}>
                            {para}
                        </p>
                    ))}
                </Reveal>
            </section>

            {/* ── OUR STORY ────────────────────────────────────────── */}
            <section className="bg-sand py-24 md:py-32">
                <div className="px-8 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        <Reveal>
                            <Kicker>{a.our_story.title}</Kicker>
                            <h2 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                                A Decade in the Field
                            </h2>
                            <div className="mt-8 space-y-4">
                                {getParagraphs(a.our_story.content).map((para, i) => (
                                    <p key={i} className="text-base leading-relaxed text-ink/70">{para}</p>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal delay={120}>
                            <div className="relative h-80 overflow-hidden lg:h-[520px]">
                                <Image
                                    src={a.our_story.url}
                                    alt="Our story — African Citril Safaris"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── VALUES ───────────────────────────────────────────── */}
            <section className="px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <Kicker align="center">{a.our_values.title}</Kicker>
                    <h2 className="mx-auto mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                        What Guides Every Itinerary
                    </h2>
                </Reveal>
                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
                    {VALUES.map((value, i) => (
                        <Reveal key={value.title} delay={i * 100}>
                            <PillarCard {...value} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── MISSION ──────────────────────────────────────────── */}
            <section className="bg-ink px-8 py-24 text-center text-ivory md:px-16 md:py-32">
                <Reveal className="mx-auto max-w-2xl">
                    <Kicker align="center" tone="light">{a.our_mission.title}</Kicker>
                    <p className="mt-10 font-serif text-xl italic leading-relaxed text-ivory md:text-2xl">
                        {stripHtml(a.our_mission.content)}
                    </p>
                </Reveal>
            </section>

            {/* ── SERVICES ─────────────────────────────────────────── */}
            <section className="bg-sand px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Reveal>
                    <Kicker>Our Services</Kicker>
                    <h2 className="mt-6 max-w-xl font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                        Every Kind of Journey, Built the Same Way
                    </h2>
                </Reveal>
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.title} delay={i * 60}>
                            <div className="group h-full border border-stone bg-ivory p-8 transition-colors duration-300 hover:border-gold">
                                <div className="mb-6 h-px w-8 bg-gold" />
                                <h3 className="font-serif text-lg text-ink">{s.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────── */}
            <section className="relative mx-8 my-24 flex min-h-[420px] items-center overflow-hidden md:mx-16 lg:mx-24">
                <Image
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
                    alt="Sundowner over the plains"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-ink/70" />
                <Reveal className="relative z-10 w-full px-10 py-16 text-center md:px-20">
                    <Kicker align="center" tone="light">Let&apos;s Begin</Kicker>
                    <h2 className="mx-auto mt-6 max-w-xl font-serif text-3xl leading-[1.1] text-ivory md:text-4xl">
                        A Team That Knows This Land — Ready to Plan Yours
                    </h2>
                    <Link
                        href="/contact"
                        className="mt-10 inline-block bg-gold px-9 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ivory"
                    >
                        Start Your Enquiry
                    </Link>
                </Reveal>
            </section>

        </main>
    )
}

export default AboutPage
