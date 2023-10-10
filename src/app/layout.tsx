'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Container } from '@mui/material'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Container maxWidth="lg">{children}</Container>
                <Footer />
            </body>
        </html>
    )
}
