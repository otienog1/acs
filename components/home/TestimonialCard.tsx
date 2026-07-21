interface TestimonialCardProps {
    quote: string
    attribution: string
}

const TestimonialCard = ({ quote, attribution }: TestimonialCardProps) => {
    return (
        <figure className="flex h-full flex-col border border-stone/70 bg-ivory p-8 md:p-10">
            <span className="font-serif text-5xl leading-none text-gold/50">&ldquo;</span>
            <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
                {quote}
            </blockquote>
            <figcaption className="mt-8 text-[11px] uppercase tracking-[0.25em] text-ink/50">
                {attribution}
            </figcaption>
        </figure>
    )
}

export default TestimonialCard
