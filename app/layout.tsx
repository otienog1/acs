import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Source_Sans_3({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
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
    title: 'African Cirtil SAfaris',
    description: 'Destination Management Company',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={productsans.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
