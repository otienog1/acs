import Image from "next/image"
import Link from "next/link"

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
        <main className="bg-[#FAF8F5]">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 px-8 pb-14 md:px-16 lg:px-24">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">
                        {destination}
                    </p>
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight max-w-2xl">
                        {title}
                    </h1>
                    <p className="text-white/70 text-sm mt-3 tracking-wide">{days}</p>
                </div>
            </div>

            {/* ── CONTENT ──────────────────────────────────────────── */}
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main content — 2/3 */}
                    <div className="lg:col-span-2">
                        {/* Divider */}
                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex-1 h-px bg-[#C2AE72]/40" />
                            <span className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase font-medium shrink-0">Overview</span>
                            <div className="flex-1 h-px bg-[#C2AE72]/40" />
                        </div>

                        <p className="text-[#4a4a4a] text-lg leading-relaxed mb-16">
                            {description.replace(/<[^>]+>/g, "")}
                        </p>

                        {/* Itinerary heading */}
                        <div className="flex items-center gap-6 mb-10">
                            <div className="flex-1 h-px bg-[#C2AE72]/40" />
                            <span className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase font-medium shrink-0">Itinerary</span>
                            <div className="flex-1 h-px bg-[#C2AE72]/40" />
                        </div>

                        {/* Itinerary items */}
                        <div className="space-y-0">
                            {itinerary.map((itin, i) => (
                                <div key={i} className="border-b border-[#E8E0D4] last:border-0">
                                    {/* Day header */}
                                    <div className="flex items-center gap-6 py-5">
                                        <span className="text-[#742E13] text-[10px] tracking-[0.25em] uppercase font-medium w-14 shrink-0">
                                            {itin.title.day}
                                        </span>
                                        <span className="font-bold text-[#1a1a1a]">{itin.title.location}</span>
                                        <div className="flex-1 h-px bg-[#E8E0D4]" />
                                        <span className="text-[#C2AE72] text-[10px] font-medium shrink-0">
                                            Day {i + 1} / {itinerary.length}
                                        </span>
                                    </div>
                                    {/* Activity */}
                                    <p className="text-[#4a4a4a] text-sm leading-relaxed pb-6 pl-20">
                                        {itin.activity.replace(/<[^>]+>/g, "")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar — 1/3 */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Booking card */}
                            <div className="bg-[#1E0E05] p-8">
                                <p className="text-[#C2AE72] text-[10px] tracking-[0.3em] uppercase mb-4 font-medium">Book This Safari</p>
                                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                                <p className="text-white/50 text-sm mb-8">{days}</p>
                                <Link
                                    href="/contact"
                                    className="block text-center bg-[#C2AE72] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-white hover:text-[#742E13] transition-colors duration-300"
                                >
                                    Enquire Now
                                </Link>
                            </div>

                            {/* Details card */}
                            <div className="border border-[#E8E0D4] p-8">
                                <p className="text-[#742E13] text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Trip Details</p>
                                <ul className="space-y-4 text-sm text-[#4a4a4a]">
                                    <li className="flex justify-between items-center border-b border-[#E8E0D4] pb-4">
                                        <span className="text-[#1a1a1a] font-medium">Duration</span>
                                        <span>{days}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-[#E8E0D4] pb-4">
                                        <span className="text-[#1a1a1a] font-medium">Destination</span>
                                        <span>{destination}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-[#E8E0D4] pb-4">
                                        <span className="text-[#1a1a1a] font-medium">Days</span>
                                        <span>{itinerary.length}</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-[#1a1a1a] font-medium">Style</span>
                                        <span>Bespoke</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Back link */}
                            <Link
                                href="/experience"
                                className="flex items-center gap-2 text-[#742E13] text-[10px] tracking-[0.25em] uppercase font-medium hover:gap-3 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                All Experiences
                            </Link>
                        </div>
                    </aside>

                </div>
            </div>

        </main>
    )
}

export default ExperienceDetail
