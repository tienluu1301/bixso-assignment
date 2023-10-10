import fetcher from './fetcher'
import { IBlog } from '@/types/backend'

export const BLOG_KEYMUTATE = {
    GET: 'getBlogs',
}

export const getBlogs = async () => {
    try {
        const res = await fetcher.get<IBlog[]>('/blogs')
        return res.data
    } catch (error) {
        throw error
    }
}

export const getBlogDetail = async (blogId: string) => {
    try {
        const res = await fetcher.get<IBlog>(`/blogs/${blogId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const createBlog = async (data: Omit<IBlog, 'id'>) => {
    try {
        const res = await fetcher.post('/blogs  ', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const deleteBlog = async (blogId: number) => {
    try {
        await fetcher.delete(`/blogs/${blogId}`)
    } catch (error) {
        throw error
    }
}

export const updateBlog = async (blog: IBlog) => {
    try {
        const { id, ...payload } = blog
        const res = await fetcher.put(`/blogs/${id}`, payload)
        return res.data
    } catch (error) {
        throw error
    }
}
