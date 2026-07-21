interface Stat {
    value: string
    label: string
}

const StatRow = ({ stats }: { stats: Stat[] }) => {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map(({ value, label }) => (
                <div key={label} className="border-l border-stone pl-5">
                    <p className="font-serif text-3xl text-ink md:text-4xl">{value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ink/50">{label}</p>
                </div>
            ))}
        </div>
    )
}

export default StatRow
