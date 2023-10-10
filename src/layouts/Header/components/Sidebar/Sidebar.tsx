'use client'

import React from 'react'
import Link from 'next/link'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    Drawer,
    IconButton,
} from '@mui/material'
import Iconify from '@/components/Iconify'
import { ROUTES, getRouteTitle } from '@/contants/router'
import { NAVLINKS } from '../../Header.config'

export interface ISidebar {
    window?: () => Window
}

const Sidebar = ({ window }: ISidebar) => {
    const [isActive, setIsActive] = React.useState<boolean>(false)

    const container =
        window !== undefined ? () => window().document.body : undefined

    // Hanlde event click menu icon
    const handleDrawerToggle = () => {
        setIsActive(!isActive)
    }

    // Sidebar layout
    const drawer = (
        <Box
            component="nav"
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <List>
                {NAVLINKS.map((navItem) => (
                    <ListItem key={navItem} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link
                                href={ROUTES[navItem]}
                                style={{ width: '100%' }}
                            >
                                {getRouteTitle(ROUTES[navItem])}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            {/* Toggle sidebar icon*/}
            <Box>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2, display: { md: 'none' } }}
                    onClick={handleDrawerToggle}
                >
                    <Iconify icon="fe:bar" />
                </IconButton>
            </Box>

            {/* Sidebar navigation */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={isActive}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            padding: '20px 0',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    )
}

export default Sidebar
