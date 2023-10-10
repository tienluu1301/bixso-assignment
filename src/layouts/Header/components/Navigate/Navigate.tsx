import Link from 'next/link'
import { Box, Button } from '@mui/material'
import { ROUTES, getRouteTitle } from '@/contants/router'
import { NAVLINKS } from '../../Header.config'

const Navigate = () => {
    return (
        <Box
            component="nav"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
            {NAVLINKS.map((navItem) => (
                <Button key={navItem} sx={{ padding: 0 }}>
                    <Link
                        href={ROUTES[navItem]}
                        style={{
                            display: 'block',
                            padding: '10px',
                            color: '#fff',
                        }}
                    >
                        {getRouteTitle(ROUTES[navItem])}
                    </Link>
                </Button>
            ))}
        </Box>
    )
}

export default Navigate
