import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { TableRow, TableCell, Button } from '@mui/material'
import Table from '@/components/Table'
import { useToggle } from '@/hooks/useToggle'
import DialogForm from './DialogForm'
import DialogConfirm from './DialogConfirm'
import { BLOG_KEYMUTATE, deleteBlog, getBlogs } from '@/services/blogAPI'
import { IBlog } from '@/types/backend'
import { Action, IBlogSelected } from '../types'
import { ACTIONS } from '../constants'

const BlogTable = () => {
    const [selectedBlog, setSelectedBlog] = React.useState<IBlogSelected>()
    const { value, toggleValue } = useToggle(false)

    const {
        data = [],
        isLoading,
        error,
        mutate: refetchGetBlogs,
    } = useSWR<IBlog[]>(BLOG_KEYMUTATE.GET, getBlogs, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    const colTitle = Object.keys(data.length && data[0]).filter(
        (el) => el !== 'content',
    )

    const sortedData = data.sort((a: IBlog, b: IBlog) => b.id - a.id)

    const handleSelectBlog = (blogInfo: IBlog, action: Action) => {
        setSelectedBlog({ ...blogInfo, action })
        toggleValue(true)
    }

    const handleDeleteBlogItem = async (blogId: number) => {
        await deleteBlog(blogId)
        refetchGetBlogs()
    }

    const handleConfirmDelete = (itemId: number) => {
        handleDeleteBlogItem(itemId).then(() => toggleValue(false))
    }

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Table col={colTitle}>
                        {sortedData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.author}</TableCell>
                                <TableCell>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="info"
                                        LinkComponent={Link}
                                        href={`/blogs/${row.id}`}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="warning"
                                        sx={{ mx: 1 }}
                                        onClick={() =>
                                            handleSelectBlog(row, ACTIONS.EDIT)
                                        }
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="error"
                                        onClick={() =>
                                            handleSelectBlog(
                                                row,
                                                ACTIONS.DELETE,
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                    <DialogForm
                        initalValue={selectedBlog}
                        isActive={value && selectedBlog?.action == ACTIONS.EDIT}
                        title="Edit Blog"
                        onToggleModal={toggleValue}
                    />
                    <DialogConfirm
                        isActive={
                            value && selectedBlog?.action == ACTIONS.DELETE
                        }
                        data={selectedBlog}
                        onToggleModal={toggleValue}
                        title="Confirm Data Deletion"
                        onConfirm={handleConfirmDelete}
                    />
                </>
            )}
        </>
    )
}

export default BlogTable
