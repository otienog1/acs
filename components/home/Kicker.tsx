interface KickerProps {
    children: string
    align?: 'left' | 'center'
    tone?: 'dark' | 'light'
    className?: string
}

/** Small tracked eyebrow label with a flanking rule — the recurring section marker. */
const Kicker = ({ children, align = 'left', tone = 'dark', className = '' }: KickerProps) => {
    const textColor = tone === 'dark' ? 'text-gold' : 'text-gold-soft'
    const ruleColor = tone === 'dark' ? 'bg-gold/40' : 'bg-gold-soft/40'

    if (align === 'center') {
        return (
            <div className={`flex items-center gap-5 ${className}`}>
                <span className={`h-px flex-1 ${ruleColor}`} />
                <span className={`shrink-0 text-[10px] font-medium uppercase tracking-[0.35em] ${textColor}`}>
                    {children}
                </span>
                <span className={`h-px flex-1 ${ruleColor}`} />
            </div>
        )
    }

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <span className={`h-px w-10 ${ruleColor}`} />
            <span className={`text-[10px] font-medium uppercase tracking-[0.35em] ${textColor}`}>
                {children}
            </span>
        </div>
    )
}

export default Kicker
