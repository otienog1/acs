import { getPage } from "@/components/page"
import Image from "next/image"
import content from "@/lib/content.json"

const AboutPage = async () => {
    await getPage(8)
    const a = content.about

    return (
        <main className="bg-[#FAF8F5]">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
                <Image
                    src={a.images[0].url}
                    alt="African Citril Safaris"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 px-8 pb-14 md:px-16 lg:px-24">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Who We Are</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-2xl">
                        {a.title}
                    </h1>
                </div>
            </div>

            {/* ── INTRO ────────────────────────────────────────────── */}
            <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                    <div className="w-2 h-2 bg-[#C2AE72] rotate-45 shrink-0" />
                    <div className="flex-1 h-px bg-[#C2AE72]/40" />
                </div>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-[#4a4a4a] text-lg leading-relaxed mb-4">
                        African Citril Safaris was founded with a singular passion: to share the magic of East
                        Africa&apos;s wilderness with the world. Based in Nairobi, Kenya, we are a team of dedicated
                        conservationists, naturalists, and hospitality professionals who believe that travel can be a
                        force for good.
                    </p>
                    <p className="text-[#4a4a4a] text-lg leading-relaxed">
                        We work with a carefully selected network of lodges, camps, and guides who share our values
                        of sustainability, authenticity, and excellence.
                    </p>
                </div>
            </section>

            {/* ── OUR STORY ────────────────────────────────────────── */}
            <section className="bg-[#F2EDE4] py-20 md:py-28">
                <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">
                                {a.our_story.title}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-8">
                                A decade of extraordinary journeys
                            </h2>
                            <p className="text-[#4a4a4a] leading-relaxed mb-4">
                                Our journey began over a decade ago when our founder, a lifelong wildlife enthusiast, set
                                out to create a safari company that went beyond the ordinary. Frustrated by one-size-fits-all
                                itineraries, he built African Citril Safaris on the belief that every traveller deserves a
                                personalised experience rooted in genuine connection with nature.
                            </p>
                            <p className="text-[#4a4a4a] leading-relaxed">
                                Today, we have guided hundreds of guests from around the world through some of the most
                                spectacular landscapes on earth, earning a reputation for excellence, integrity, and deep
                                knowledge of the bush.
                            </p>
                        </div>
                        <div className="relative h-80 lg:h-[520px] overflow-hidden">
                            <Image
                                src={a.our_story.url}
                                alt="Our story — African Citril Safaris"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ───────────────────────────────────────────── */}
            <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">
                        {a.our_values.title}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight">
                        What guides everything we do
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {[
                        {
                            title: "Conservation First",
                            body: "A portion of every booking supports wildlife conservation projects and anti-poaching initiatives in Kenya and Tanzania.",
                        },
                        {
                            title: "Community Partnership",
                            body: "We work directly with local Maasai and Samburu communities, ensuring tourism benefits the true custodians of these lands.",
                        },
                        {
                            title: "Authenticity",
                            body: "We favour small groups, off-the-beaten-path routes, and genuine cultural exchanges over mass-market tourism.",
                        },
                    ].map((v) => (
                        <div key={v.title} className="border-t-2 border-[#C2AE72] pt-8">
                            <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">{v.title}</h3>
                            <p className="text-[#4a4a4a] leading-relaxed text-sm">{v.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MISSION ──────────────────────────────────────────── */}
            <section className="bg-[#1E0E05] py-24 md:py-32 px-8 md:px-16">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-[#C2AE72] text-[10px] tracking-[0.35em] uppercase mb-8 font-medium">
                        {a.our_mission.title}
                    </p>
                    <p className="text-white text-xl md:text-2xl leading-relaxed font-light italic">
                        To curate transformative safari experiences that connect people with the natural world, foster
                        a lasting commitment to conservation, and create meaningful economic opportunities for East
                        African communities.
                    </p>
                </div>
            </section>

            {/* ── SERVICES ─────────────────────────────────────────── */}
            <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="mb-16">
                    <p className="text-[#742E13] text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">
                        {a.our_services.title}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight max-w-xl">
                        Every kind of safari experience, perfectly crafted
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Bespoke Safaris", body: "Fully tailored itineraries built around your schedule, interests, and budget." },
                        { title: "Group Departures", body: "Scheduled small-group safaris for solo travellers and couples looking to share the experience." },
                        { title: "Honeymoon Packages", body: "Romantic itineraries combining bush camps with coastal retreats on the Kenyan or Zanzibar coast." },
                        { title: "Photography Safaris", body: "Specialist trips designed for wildlife photographers, with expert guides who know the light and the animals." },
                        { title: "Family Safaris", body: "Child-friendly itineraries with experienced guides trained to make the bush accessible and exciting for younger travellers." },
                        { title: "Custom Extensions", body: "Airport transfers, accommodation bookings, and visa assistance to make your journey seamless from start to finish." },
                    ].map((s) => (
                        <div key={s.title} className="group bg-white p-8 border border-[#E8E0D4] hover:border-[#C2AE72] transition-colors duration-300">
                            <div className="w-8 h-px bg-[#C2AE72] mb-6" />
                            <h3 className="text-base font-bold text-[#1a1a1a] mb-3">{s.title}</h3>
                            <p className="text-[#4a4a4a] text-sm leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}

export default AboutPage
