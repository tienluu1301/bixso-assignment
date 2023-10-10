'use client'

import React from 'react'
import useSWR from 'swr'
import { Typography, Box } from '@mui/material'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getBlogDetail } from '@/services/blogAPI'
import { IBlog } from '@/types/backend'
import { IParams } from './types'
import blogDetail from './BlogDetail.module.scss'

const BlogDetail: React.FC<IParams> = ({ params }) => {
    const { data, isLoading } = useSWR<IBlog>(
        'getBlogDetail',
        () => getBlogDetail(params.id),
        {
            revalidateOnFocus: false,
        },
    )

    return (
        <div className={blogDetail.sectionBlogDetail}>
            {!isLoading ? (
                <>
                    <Breadcrumbs />
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h3" component="h1">
                            {data?.title}
                        </Typography>
                        <Typography sx={{ mt: 3 }}>{data?.content}</Typography>
                        <Typography
                            sx={{
                                color: 'rgba(0, 0, 0, 0.6);',
                                fontSize: '15px',
                                mt: 5,
                            }}
                        >
                            Author: {data?.author}
                        </Typography>
                    </Box>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default BlogDetail
