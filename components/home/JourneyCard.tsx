import Image from 'next/image'
import Link from 'next/link'

interface JourneyCardProps {
    href: string
    destination: string
    days: string
    title: string
    teaser: string
    image: string
}

const JourneyCard = ({ href, destination, days, title, teaser, image }: JourneyCardProps) => {
    return (
        <Link href={href} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-[1100ms] ease-editorial group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute top-5 left-5 border border-ivory/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ivory/90 backdrop-blur-sm">
                    {destination}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-gold-soft">{days}</p>
                    <h3 className="font-serif text-2xl leading-snug text-ivory">{title}</h3>
                </div>
            </div>
            <div className="pt-5">
                <p className="mb-4 text-sm leading-relaxed text-ink/60">{teaser}</p>
                <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-clay transition-all duration-300 group-hover:gap-3">
                    View Itinerary
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </Link>
    )
}

export default JourneyCard
