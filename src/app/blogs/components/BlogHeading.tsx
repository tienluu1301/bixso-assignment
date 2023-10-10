import { Button } from '@mui/material'
import Iconify from '@/components/Iconify'
import { useToggle } from '@/hooks/useToggle'
import DialogForm from './DialogForm'
import blog from '../Blog.module.scss'

const BlogHeading = () => {
    const { value, toggleValue } = useToggle(false)

    return (
        <>
            <div className={blog.heading}>
                <h1>Table Blogs</h1>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Iconify icon="ic:round-plus" />}
                    onClick={() => toggleValue(true)}
                >
                    Add New
                </Button>
            </div>
            <DialogForm
                isActive={value}
                onToggleModal={toggleValue}
                title="Add New Blog"
            />
        </>
    )
}

export default BlogHeading
