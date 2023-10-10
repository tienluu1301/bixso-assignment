import { IBlog } from '@/types/backend'

export type IBlogProps = Omit<IBlog, 'id'>

export type Action = string

export interface IBlogSelected extends IBlog {
    action: Action
}
