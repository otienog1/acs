import { getPage } from "@/components/page"
import { Destination } from "@/lib/types"
import Image from "next/image"
import content from "@/lib/content.json"

const Destinations = async () => {
    await getPage(12)
    const { hero_image, title, destinations } = content.destinations

    return (
        <main className="bg-[#FAF8F5]">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
                <Image
                    src={hero_image}
                    alt="African Citril Safaris Destinations"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 px-8 pb-14 md:px-16 lg:px-24">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Where We Go</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                        {title}
                    </h1>
                </div>
            </div>

            {/* ── INTRO RULE ───────────────────────────────────────── */}
            <div className="py-16 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-6">
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                    <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase font-medium shrink-0">
                        Kenya &amp; Tanzania
                    </p>
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                </div>
            </div>

            {/* ── DESTINATION CARDS ────────────────────────────────── */}
            {destinations.map((item: { destination: Destination }, index: number) => (
                <DestinationSection
                    key={index}
                    destination={item.destination}
                    reversed={index % 2 !== 0}
                />
            ))}

        </main>
    )
}

const DestinationSection = ({
    destination,
    reversed,
}: {
    destination: Destination
    reversed: boolean
}) => (
    <section className={`${reversed ? "bg-[#F2EDE4]" : "bg-[#FAF8F5]"} py-0`}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
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
            <div className={`flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 xl:px-20 order-2 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">Destination</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.05] tracking-tight mb-8">
                    {destination.name}
                </h2>
                <div className="h-px w-12 bg-[#C2AE72] mb-8" />
                <p className="text-[#4a4a4a] leading-relaxed text-base max-w-md">
                    {destination.content.replace(/<[^>]+>/g, "")}
                </p>
            </div>
        </div>
    </section>
)

export default Destinations
