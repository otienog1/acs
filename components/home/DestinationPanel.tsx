import Image from 'next/image'
import Link from 'next/link'

interface DestinationPanelProps {
    href: string
    name: string
    teaser: string
    image: string
}

const DestinationPanel = ({ href, name, teaser, image }: DestinationPanelProps) => {
    return (
        <Link href={href} className="group relative block h-[62vh] min-h-[440px] overflow-hidden">
            <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-[1300ms] ease-editorial group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold-soft">Signature Destination</p>
                <h3 className="mb-4 font-serif text-4xl text-ivory md:text-5xl">{name}</h3>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-ivory/70">{teaser}</p>
                <span className="inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.25em] text-ivory transition-all duration-300 group-hover:gap-3 group-hover:border-ivory">
                    Explore {name}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </Link>
    )
}

export default DestinationPanel
