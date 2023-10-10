import Link from 'next/link'
import { Typography } from '@mui/material'
import { ROUTES } from '@/contants/router'

const Brand = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <Link href={ROUTES.homepage}>BIXSO</Link>
        </Typography>
    )
}

export default Brand
