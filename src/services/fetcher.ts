import axios from 'axios'
import { BASEURL } from '@/contants/common'

const fetcher = axios.create({
    baseURL: BASEURL,
})

//Interceptor
fetcher.interceptors.response.use(
    //Success
    (response) => response,

    //Error
    (error) => Promise.reject(error.response),
)

export default fetcher
