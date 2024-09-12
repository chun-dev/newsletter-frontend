import { queryOptions, useQuery } from '@tanstack/react-query'

import { Post } from '@/types/api'

export const getPosts = async (): Promise<{ data: Post[] }> => {
    const response = await fetch('http://localhost:8080/posts')
    return await response.json()
}

export const getPostsQueryOptions = () => {
    return queryOptions({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
}

export const useGetPosts = () => {
    return useQuery({
        ...getPostsQueryOptions(),
    })
}
