import Image from 'next/image'

interface CampCategoryCardProps {
    title: string
    body: string
    image: string
}

const CampCategoryCard = ({ title, body, image }: CampCategoryCardProps) => {
    return (
        <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-[1100ms] ease-editorial group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/0" />
            </div>
            <h3 className="mt-5 font-serif text-lg text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{body}</p>
        </div>
    )
}

export default CampCategoryCard
