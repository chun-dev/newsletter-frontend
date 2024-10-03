import { queryOptions, useQuery } from '@tanstack/react-query'

import { Post } from '@/types/api'
import { api } from '@/lib/api-client'

export const getPosts = (
    year: string,
    month: string
): Promise<{ data: Post[] }> => {
    return api.get('http://localhost:8080/posts', {
        params: { year: year, month: month },
    })
}

export const getLatestPost = (): Promise<{ data: Post[] }> => {
    return api.get('http://localhost:8080/latest-post')
}

export const getPostsQueryOptions = (year: string, month: string) => {
    return queryOptions({
        queryKey: ['posts', year, month],
        queryFn: () => getPosts(year, month),
    })
}

export const useGetPosts = (year: string, month: string) => {
    return useQuery({
        ...getPostsQueryOptions(year, month),
    })
}

export const getLatestPostQueryOptions = () => {
    return queryOptions({
        queryKey: ['latest-post'],
        queryFn: () => getLatestPost(),
    })
}

export const useGetLatestPost = () => {
    return useQuery({
        ...getLatestPostQueryOptions(),
    })
}
