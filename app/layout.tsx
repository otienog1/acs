import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
//
import { Source_Sans_3 } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Source_Sans_3({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
<<<<<<< HEAD
    title: 'African Cirtil SAfaris',
=======
    title: 'African Citril Safaris',
>>>>>>> 2fe434840da3ffe238f1bb64d05b2dcafe1ff583
    description: 'Destination Management Company',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
