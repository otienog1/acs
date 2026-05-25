"use client"

import { useState, useEffect, useCallback } from "react"

const ContactForm = (props: any) => {
    const { handler, isLoading, isSent, hasError } = props
    const [formState, setFormState] = useState<Record<string, string>>({})

    const handleFieldChange = (field: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({ ...prev, [field]: e.target.value }))
    }

    const initFormState = useCallback(() => {
        setFormState(prev => ({ ...prev, 'your-subject': "Contact Form" }))
    }, [])

    useEffect(() => { initFormState() }, [])

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handler(e, formState)
    }

    return (
        <form onSubmit={handleFormSubmit} encType="multipart/form-data" className="space-y-6">

            <div>
                <label htmlFor="name" className="block text-[10px] tracking-[0.25em] uppercase text-[#742E13] font-medium mb-3">
                    Full Name <span className="text-[#C2AE72]">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    onChange={e => handleFieldChange('your-name', e)}
                    className="w-full bg-[#F2EDE4] border-0 border-b-2 border-[#E8E0D4] focus:border-[#742E13] text-[#1a1a1a] text-sm px-4 py-4 outline-none transition-colors duration-300 placeholder:text-[#9a9a9a]"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-[10px] tracking-[0.25em] uppercase text-[#742E13] font-medium mb-3">
                    Email Address <span className="text-[#C2AE72]">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    onChange={e => handleFieldChange('your-email', e)}
                    className="w-full bg-[#F2EDE4] border-0 border-b-2 border-[#E8E0D4] focus:border-[#742E13] text-[#1a1a1a] text-sm px-4 py-4 outline-none transition-colors duration-300 placeholder:text-[#9a9a9a]"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.25em] uppercase text-[#742E13] font-medium mb-3">
                    Message <span className="text-[#C2AE72]">*</span>
                </label>
                <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your ideal safari — destinations, dates, group size, and any special interests."
                    required
                    onChange={e => handleFieldChange('your-message', e)}
                    className="w-full bg-[#F2EDE4] border-0 border-b-2 border-[#E8E0D4] focus:border-[#742E13] text-[#1a1a1a] text-sm px-4 py-4 outline-none transition-colors duration-300 placeholder:text-[#9a9a9a] resize-none"
                />
            </div>

            <div className="flex items-center gap-6 pt-2">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-block bg-[#742E13] text-white text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#5a2310] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    {isLoading ? "Sending…" : "Send Message"}
                </button>

                {isSent && (
                    <span className="text-[#1B7632] text-sm font-medium flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Message sent — we&apos;ll be in touch soon.
                    </span>
                )}
                {hasError && (
                    <span className="text-red-600 text-sm">{hasError}</span>
                )}
            </div>

        </form>
    )
}

export default ContactForm
