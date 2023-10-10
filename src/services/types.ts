export interface ResponseSuccessApi<T> {
    content: T
    message: string
    dateTime: string
    messageConstants: string | null
    statusCode: number
}
