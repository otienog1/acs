'use client'

import { useState } from 'react'

const NewsletterForm = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <p className="text-sm text-gold-soft">
                Thank you — you&apos;ll hear from us only when there&apos;s something worth reading.
            </p>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex max-w-sm items-stretch gap-0">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-white/20 bg-transparent px-4 py-3.5 text-sm text-ivory placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-gold"
            />
            <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 border border-l-0 border-white/20 px-5 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </form>
    )
}

export default NewsletterForm
