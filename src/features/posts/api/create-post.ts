import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CreatePost, Post } from '@/types/api'
import { api } from '@/lib/api-client'

export const createPost = (data: CreatePost): Promise<Post> => {
    return api.post(`/create-post`, data)
}

export const useCreatePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            })
        },
        mutationFn: createPost,
    })
}
