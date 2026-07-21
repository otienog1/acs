interface PillarCardProps {
    index: string
    title: string
    body: string
}

const PillarCard = ({ index, title, body }: PillarCardProps) => {
    return (
        <div className="border-t border-stone pt-6">
            <span className="font-serif text-3xl text-gold/50">{index}</span>
            <h3 className="mt-4 mb-3 font-serif text-xl text-ink">{title}</h3>
            <p className="text-sm leading-relaxed text-ink/60">{body}</p>
        </div>
    )
}

export default PillarCard
