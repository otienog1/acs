import Image from 'next/image'

interface JournalCardProps {
    category: string
    title: string
    teaser: string
    image: string
}

const JournalCard = ({ category, title, teaser, image }: JournalCardProps) => {
    return (
        <article>
            <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
            </div>
            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-clay">{category}</p>
            <h3 className="mt-3 font-serif text-xl leading-snug text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{teaser}</p>
        </article>
    )
}

export default JournalCard
