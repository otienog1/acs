import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Fraunces } from 'next/font/google'
import localFont from 'next/font/local'

import Navbar from '@/components/Navbar'
import NavSpacer from '@/components/NavSpacer'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: 'variable',
    axes: ['opsz'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-fraunces',
})

const productsans = localFont({
    src: [
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})

export const metadata = {
    title: 'African Citril Safaris — Bespoke Safaris in Kenya & Tanzania',
    description: 'African Citril Safaris designs private, tailor-made journeys through the wildernesses of Kenya and Tanzania — guided by naturalists, built around conservation, and held to a standard of quiet, considered luxury.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${productsans.className} ${fraunces.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <NavSpacer />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
