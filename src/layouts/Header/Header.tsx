'use client'

import * as React from 'react'
import { AppBar, Toolbar, Container } from '@mui/material'
import { Brand, Sidebar, Navigate } from './components'

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Sidebar />
                    <Brand />
                    <Navigate />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
