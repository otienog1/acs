import Slider from "@/components/Slider";
import { getPage } from "@/components/page";
import Image from "next/image";
import Link from "next/link";
import content from "@/lib/content.json";

const HomePage = async () => {
    await getPage(5)

    const { section_1, section_3, section_5, section_7 } = content.home

    return (
        <main className="min-h-screen bg-[#FAF8F5]">

            {/* ── HERO ──────────────────────────────────────────────── */}
            <div className="relative h-screen w-full overflow-hidden">
                <Slider
                    slides={section_1.slider}
                    autoplay={true}
                    direction="next"
                    speed={2}
                    duration={8}
                    current={0}
                    RAF={0}
                />
                {/* Dark gradient overlay — bottom-weighted for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Editorial hero text — bottom-left, magazine style */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 md:px-16 md:pb-20 lg:px-24 lg:pb-24">
                    <p className="text-[#C2AE72] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                        East Africa · Since 2012
                    </p>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl">
                        Africa, as it<br />was meant to be.
                    </h1>
                    <div className="mt-8 flex items-center gap-6">
                        <Link
                            href="/experience"
                            className="inline-block bg-[#C2AE72] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#742E13] transition-colors duration-300"
                        >
                            Explore Safaris
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white/80 text-xs tracking-[0.2em] uppercase border-b border-white/40 pb-0.5 hover:text-white hover:border-white transition-colors duration-300"
                        >
                            Plan Your Journey
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-2 opacity-60">
                    <span className="text-white text-[10px] tracking-[0.25em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                    <div className="w-px h-12 bg-white/50" />
                </div>
            </div>

            {/* ── TAGLINE STRIP ────────────────────────────────────── */}
            <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-6 mb-10">
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                    <span className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase font-medium shrink-0">Our Expertise</span>
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
                        Safari Experts<br />in East Africa
                    </h2>
                    <div>
                        <p className="text-[#4a4a4a] leading-relaxed text-lg mb-4">
                            African Citril Safaris is a premier safari company specialising in bespoke wildlife
                            experiences across East Africa. Our expert guides bring decades of field experience,
                            ensuring every journey is safe, immersive, and unforgettable.
                        </p>
                        <p className="text-[#4a4a4a] leading-relaxed text-lg">
                            We craft each itinerary around your interests — from the Great Migration in the Masai
                            Mara to the pristine wilderness of the Serengeti — combining comfort with authentic adventure.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block mt-8 text-[#742E13] text-xs tracking-[0.25em] uppercase border-b-2 border-[#C2AE72] pb-1 hover:border-[#742E13] transition-colors duration-300 font-medium"
                        >
                            Get in touch with us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PHOTO MOSAIC ─────────────────────────────────────── */}
            <section className="px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
                <div className="max-w-screen-xl mx-auto grid grid-cols-12 grid-rows-2 gap-3 h-[70vh] min-h-[480px]">
                    {/* Large left image */}
                    <div className="col-span-7 row-span-2 relative overflow-hidden group">
                        <Image
                            alt="East Africa safari landscape"
                            src={section_3.image}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Top-right */}
                    <div className="col-span-5 row-span-1 relative overflow-hidden group">
                        <Image
                            alt="Safari experience"
                            src={section_3.tours[0].image}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Bottom-right */}
                    <div className="col-span-5 row-span-1 relative overflow-hidden group">
                        <Image
                            alt="Wildlife encounter"
                            src={section_3.tours[1].image}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCES ──────────────────────────────────────── */}
            <section className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
                    <div className="relative h-80 lg:h-auto lg:min-h-[520px] overflow-hidden">
                        <Image
                            alt="Safari experience"
                            src={section_3.tours[2].image}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="lg:pl-16 xl:pl-24 flex flex-col justify-center py-12 lg:py-0">
                        <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">Curated Itineraries</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
                            Experience<br />East Africa
                        </h2>
                        <p className="text-[#4a4a4a] leading-relaxed text-base mb-8 max-w-md">
                            Our signature itineraries combine recommended safari experiences with preferred destinations
                            throughout East Africa — immersive adventures showcasing diverse landscapes, abundant
                            wildlife, and remarkable cultural encounters.
                        </p>
                        <Link
                            href="/experience"
                            className="self-start inline-block bg-[#742E13] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#5a2310] transition-colors duration-300"
                        >
                            View All Experiences
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ─────────────────────────────────────── */}
            <section className="bg-[#F2EDE4] py-20 md:py-28">
                <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
                        <div className="lg:pr-16 xl:pr-24 flex flex-col justify-center py-12 lg:py-0 order-2 lg:order-1">
                            <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">Where We Go</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
                                Kenya &amp;<br />Tanzania
                            </h2>
                            <p className="text-[#4a4a4a] leading-relaxed text-base mb-8 max-w-md">
                                Embark on an unparalleled journey of comfort and adventure across two of the world&apos;s most
                                extraordinary wildlife destinations — from the Masai Mara to the Serengeti.
                            </p>
                            <Link
                                href="/destinations"
                                className="self-start inline-block border-2 border-[#742E13] text-[#742E13] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#742E13] hover:text-white transition-colors duration-300"
                            >
                                Explore Destinations
                            </Link>
                        </div>
                        <div className="relative h-80 lg:h-auto lg:min-h-[520px] overflow-hidden order-1 lg:order-2">
                            <Image
                                alt="African safari destination"
                                src={section_3.image}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION QUOTE ─────────────────────────────────────── */}
            <section className="py-24 md:py-36 px-8 md:px-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="flex-1 h-px bg-[#C2AE72]/50" />
                        <div className="w-2 h-2 bg-[#C2AE72] rotate-45 shrink-0" />
                        <div className="flex-1 h-px bg-[#C2AE72]/50" />
                    </div>
                    <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-8 font-medium">
                        {section_5.mission_and_values.title}
                    </p>
                    <p className="text-[#1a1a1a] text-xl md:text-2xl leading-relaxed font-light italic">
                        We are committed to delivering extraordinary safari experiences while supporting conservation
                        efforts and local communities across East Africa. Every trip you take with us contributes
                        directly to wildlife protection and the livelihoods of the people who share these landscapes
                        with the animals we treasure.
                    </p>
                    <div className="flex items-center gap-6 mt-12">
                        <div className="flex-1 h-px bg-[#C2AE72]/50" />
                        <div className="w-2 h-2 bg-[#C2AE72] rotate-45 shrink-0" />
                        <div className="flex-1 h-px bg-[#C2AE72]/50" />
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ────────────────────────────────────────── */}
            <section className="relative mx-8 md:mx-16 lg:mx-24 mb-24 overflow-hidden min-h-[480px] flex items-center">
                <Image
                    src="https://images.unsplash.com/photo-1551909175-8a68da93d5f9?auto=format&fit=crop&w=1920&q=80"
                    alt="Book your African safari adventure"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 w-full px-12 md:px-20 lg:px-28 py-20 text-center">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Begin Your Journey</p>
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-2xl mx-auto leading-[1.05]">
                        Book your adventure today
                    </h2>
                    <p className="text-white/75 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                        Customise your experience with our tailored itineraries and enjoy the expertise of our professional guides.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#C2AE72] text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#742E13] transition-colors duration-300"
                    >
                        {section_7.title}
                    </Link>
                </div>
            </section>

        </main>
    )
}

export default HomePage
