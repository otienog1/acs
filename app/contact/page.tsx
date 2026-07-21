import ContactForm from "@/components/ContactForm"
import Cf7FormWrapper from "@/components/Cf7FormWrapper"
import Link from "next/link"
import Kicker from "@/components/home/Kicker"
import Reveal from "@/components/home/Reveal"

const Contact = () => {
    return (
        <main className="bg-ivory">

            {/* ── PAGE HEADER ──────────────────────────────────────── */}
            <div className="bg-ink px-8 py-24 md:px-16 md:py-32 lg:px-24">
                <Kicker tone="light">Reach Out</Kicker>
                <h1 className="mt-6 max-w-xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ivory">
                    Begin Your Enquiry
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
                    Tell us when you&apos;d like to travel and what draws you to East Africa. A journey designer
                    will reply within one business day.
                </p>
            </div>

            {/* ── MAIN CONTENT ─────────────────────────────────────── */}
            <div className="px-8 py-20 md:px-16 md:py-28 lg:px-24">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left — Info */}
                    <Reveal>
                        <Kicker>Contact</Kicker>

                        <p className="mt-10 text-lg leading-relaxed text-ink/70">
                            Whether you have a specific itinerary in mind or are looking for inspiration, our team
                            is here to help you design a considered East African journey.
                        </p>

                        {/* Contact details */}
                        <div className="mt-12 space-y-6">
                            <div className="flex items-start gap-4 border-b border-stone pb-6">
                                <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-[0.25em] uppercase text-clay font-medium mb-2">Phone</p>
                                    <Link href="tel:+254720091713" className="text-ink hover:text-clay transition-colors text-sm block">
                                        +254 720 091 713
                                    </Link>
                                    <Link href="tel:+254725773534" className="text-ink hover:text-clay transition-colors text-sm block">
                                        +254 725 773 534
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 border-b border-stone pb-6">
                                <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-[0.25em] uppercase text-clay font-medium mb-2">Email</p>
                                    <Link href="mailto:info@africancitrilsafaris.com" className="text-ink hover:text-clay transition-colors text-sm block">
                                        info@africancitrilsafaris.com
                                    </Link>
                                    <Link href="mailto:africancitril@gmail.com" className="text-ink hover:text-clay transition-colors text-sm block">
                                        africancitril@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 border-b border-stone pb-6">
                                <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-[0.25em] uppercase text-clay font-medium mb-2">Office Hours</p>
                                    <p className="text-ink text-sm">Mon – Fri: 9:00am – 5:00pm</p>
                                    <p className="text-ink text-sm">Saturday: 9:00am – 1:00pm</p>
                                    <p className="text-ink/40 text-sm">Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-sand flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-[0.25em] uppercase text-clay font-medium mb-2">Location</p>
                                    <p className="text-ink text-sm">Nairobi, Kenya</p>
                                    <p className="text-ink/40 text-sm">East Africa</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Form */}
                    <Reveal delay={100}>
                        <Kicker>Send a Message</Kicker>
                        <div className="mt-10">
                            <Cf7FormWrapper
                                siteUrl={''}
                                formId={213}
                                url={'https://api.starlynthrillingadventures.com/wp-json/contact-form-7/v1/contact-forms/213/feedback/'}
                            >
                                <ContactForm />
                            </Cf7FormWrapper>
                        </div>
                    </Reveal>

                </div>
            </div>

        </main>
    )
}

export default Contact
