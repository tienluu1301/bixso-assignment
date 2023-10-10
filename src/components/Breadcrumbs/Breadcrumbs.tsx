import React from 'react'
import Link from 'next/link'
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

interface IBreadcumsArray {
    path: string
    name: string
}

const Breadcrumbs = () => {
    const pathname = usePathname()
    const breadcrums: IBreadcumsArray[] = []
    let string = ''
    decodeURI(pathname)
        .split('/')
        .slice(1)
        .forEach((item) => {
            string += '/' + encodeURI(item)
            breadcrums.push({
                path: string,
                name: item,
            })
        })

    return (
        <MuiBreadcrumbs>
            {breadcrums.map((location, index) => (
                <div key={index}>
                    {index !== breadcrums.length - 1 ? (
                        <Link href={location.path}>
                            {capitalizeFirstLetter(location.name)}
                        </Link>
                    ) : (
                        <Typography sx={{ color: 'text.primary' }}>
                            Current
                        </Typography>
                    )}
                </div>
            ))}
        </MuiBreadcrumbs>
    )
}

export default Breadcrumbs
