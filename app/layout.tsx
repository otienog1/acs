import Footer from '@/components/Footer'
import './globals.css'
//
import { Source_Sans_3 } from 'next/font/google'
import Navbar from '@/components/Navbar'

const poppins = Source_Sans_3({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
    title: 'Starlyn Thrilling Adventures',
    description: 'Destination Management Company',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={poppins.className}>
                <>
                    <Navbar />
                    <>
                        {children}
                    </>
                    <Footer />
                </>
            </body>
        </html >
    )
}
