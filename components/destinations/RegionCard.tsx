import Image from 'next/image'
import Link from 'next/link'

interface RegionCardProps {
    slug: string
    name: string
    summary: string
    image: string
}

const RegionCard = ({ slug, name, summary, image }: RegionCardProps) => (
    <Link href={`/destinations/${slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-[1100ms] ease-editorial group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-lg leading-snug text-ivory">{name}</h3>
            </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/60">{summary}</p>
    </Link>
)

export default RegionCard
