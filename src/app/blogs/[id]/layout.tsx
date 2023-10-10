import type { Metadata } from 'next'
import { getBlogDetail } from '@/services/blogAPI'
import { IParams } from './types'

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
    const data = await getBlogDetail(params.id)

    return {
        title: data.title,
        description: `This is the page about the article ${data.title}`,
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
