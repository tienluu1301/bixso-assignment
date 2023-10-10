import React from 'react'
import { BlogList } from '@/screens/Homepage'
import home from './Home.module.scss'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Homepage',
    description: 'Generate by TienLuu',
}

export default function Home() {
    return (
        <main className={home.wrapper}>
            <BlogList />
        </main>
    )
}
