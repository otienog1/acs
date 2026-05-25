import Link from "next/link"
import Image from "next/image"
import { getExperiences, getPage } from "@/components/page"
import content from "@/lib/content.json"

const Experiences = async () => {
    await getExperiences()
    await getPage(14)
    const { hero_image } = content.experienceIndex
    const experiences = content.experiences

    return (
        <main className="bg-[#FAF8F5]">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
                <Image
                    src={hero_image}
                    alt="African Citril Safaris Experiences"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 px-8 pb-14 md:px-16 lg:px-24">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Curated Itineraries</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                        Safari Experiences
                    </h1>
                </div>
            </div>

            {/* ── INTRO ────────────────────────────────────────────── */}
            <div className="py-16 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                    <span className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase font-medium shrink-0">Our Journeys</span>
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                </div>
                <p className="text-center text-[#4a4a4a] text-lg leading-relaxed max-w-2xl mx-auto">
                    Each itinerary is crafted around the finest wildlife areas in Kenya and Tanzania, combining
                    authentic encounters with exceptional comfort at every stage of the journey.
                </p>
            </div>

            {/* ── EXPERIENCE GRID ──────────────────────────────────── */}
            <section className="pb-24 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {experiences.map((experience, i) => (
                        <Link
                            key={i}
                            href={`/experience/${experience.acf.slug}`}
                            className="group block"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-72 md:h-80 lg:h-96 mb-6">
                                <Image
                                    src={experience.acf.image}
                                    alt={experience.acf.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay with destination tag */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <span className="absolute bottom-4 left-5 text-[#C2AE72] text-[10px] tracking-[0.3em] uppercase font-medium">
                                    {experience.acf.destination}
                                </span>
                            </div>
                            {/* Meta */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#742E13] transition-colors duration-300 mb-2 leading-tight">
                                        {experience.acf.title}
                                    </h2>
                                    <p className="text-[#4a4a4a] text-sm">{experience.acf.days}</p>
                                </div>
                                {/* Arrow */}
                                <span className="shrink-0 w-10 h-10 border border-[#C2AE72] flex items-center justify-center text-[#C2AE72] group-hover:bg-[#742E13] group-hover:border-[#742E13] group-hover:text-white transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="bg-[#1E0E05] py-20 px-8 md:px-16 text-center">
                <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Tailor-Made</p>
                <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-xl mx-auto">
                    Don&apos;t see what you&apos;re looking for?
                </h2>
                <p className="text-white/60 text-base max-w-md mx-auto mb-10">
                    We build fully bespoke itineraries from scratch. Tell us your dates, destinations, and interests.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#C2AE72] text-white text-[10px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#742E13] transition-colors duration-300"
                >
                    Plan a Custom Safari
                </Link>
            </section>

        </main>
    )
}

export default Experiences
