'use client'

import React from 'react'
import useSWR from 'swr'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from '@mui/material'
import Iconify from '@/components/Iconify'
import { BLOG_KEYMUTATE, getBlogs } from '@/services/blogAPI'
import { IBlog } from '@/types/backend'

const BlogList = () => {
    const { data = [], isLoading } = useSWR<IBlog[]>(
        BLOG_KEYMUTATE.GET,
        getBlogs,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    return (
        <Box>
            {!isLoading ? (
                data.map((accordion) => (
                    <Accordion key={accordion.id}>
                        <AccordionSummary
                            expandIcon={
                                <Iconify icon="eva:arrow-ios-downward-fill" />
                            }
                        >
                            <Typography variant="subtitle1">
                                {accordion.title}
                                <span
                                    style={{
                                        fontSize: '12px',
                                        marginLeft: '15px',
                                    }}
                                >
                                    Author: {accordion.author}
                                </span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{accordion.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </Box>
    )
}

export default BlogList
