'use client'

import { BlogTable, BlogHeading } from './components'
import blog from './Blog.module.scss'

const Blog = () => {
    return (
        <div className={blog.sectionBlog}>
            <BlogHeading />
            <div className={blog.content}>
                <BlogTable />
            </div>
        </div>
    )
}

export default Blog
