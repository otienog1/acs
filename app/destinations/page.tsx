import { getPage } from "@/components/page"
import { Destination } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import content from "@/lib/content.json"
import { DESTINATIONS } from "@/lib/destinationsData"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"
import RegionCard from "@/components/destinations/RegionCard"

const Destinations = async () => {
    await getPage(12)
    const { hero_image, title, destinations } = content.destinations
    const kenyaRegions = DESTINATIONS.filter((d) => d.country === 'Kenya')
    const tanzaniaRegions = DESTINATIONS.filter((d) => d.country === 'Tanzania')

    return (
        <main className="bg-ivory">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
                <Image
                    src={hero_image}
                    alt="African Citril Safaris destinations across Kenya and Tanzania"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 md:px-16 lg:px-24">
                    <Kicker tone="light">Where We Go</Kicker>
                    <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-ivory">
                        {title}
                    </h1>
                </div>
            </div>

            {/* ── INTRO ────────────────────────────────────────────── */}
            <div className="px-8 md:px-16 lg:px-24 py-16">
                <Kicker align="center">Kenya &amp; Tanzania</Kicker>
            </div>

            {/* ── COUNTRY OVERVIEWS ────────────────────────────────── */}
            {destinations.map((item: { destination: Destination }, index: number) => (
                <DestinationSection
                    key={index}
                    destination={item.destination}
                    href={`/destinations/${item.destination.name.toLowerCase()}`}
                    reversed={index % 2 !== 0}
                />
            ))}

            {/* ── EXPLORE BY REGION ────────────────────────────────── */}
            <section className="bg-sand py-20 md:py-28">
                <div className="px-8 md:px-16 lg:px-24">
                    <Reveal>
                        <Kicker>Explore by Region</Kicker>
                        <h2 className="mt-6 max-w-xl font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                            Nine Places We Know Well
                        </h2>
                    </Reveal>

                    <RegionGroup heading="Kenya" regions={kenyaRegions} />
                    <RegionGroup heading="Tanzania" regions={tanzaniaRegions} />
                </div>
            </section>

        </main>
    )
}

const DestinationSection = ({
    destination,
    href,
    reversed,
}: {
    destination: Destination
    href: string
    reversed: boolean
}) => (
    <section className={reversed ? "bg-sand" : "bg-ivory"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
            {/* Image */}
            <div className={`relative h-72 lg:h-auto order-1 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                <Image
                    src={destination.image}
                    alt={`${destination.name} — African Citril Safaris`}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            {/* Text */}
            <div className={`flex flex-col justify-center px-8 py-16 md:px-16 lg:px-16 xl:px-20 order-2 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                <Kicker>Country</Kicker>
                <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
                    {destination.name}
                </h2>
                <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
                    {destination.content.replace(/<[^>]+>/g, "")}
                </p>
                <Link
                    href={href}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-clay transition-all duration-300 hover:gap-3"
                >
                    Explore {destination.name}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    </section>
)

const RegionGroup = ({ heading, regions }: { heading: string; regions: typeof DESTINATIONS }) => (
    <div className="mt-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-clay">{heading}</p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, i) => (
                <Reveal key={region.slug} delay={i * 80}>
                    <RegionCard slug={region.slug} name={region.name} summary={region.summary} image={region.image} />
                </Reveal>
            ))}
        </div>
    </div>
)

export default Destinations
