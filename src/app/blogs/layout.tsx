import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog List',
    description: 'Generate by TienLuu',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
