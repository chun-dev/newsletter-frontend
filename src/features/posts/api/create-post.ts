import { useMutation } from '@tanstack/react-query'

import { CreatePost, Post } from '@/types/api'
import { api } from '@/lib/api-client'
import { useNavigate } from 'react-router-dom'

export const createPost = (data: CreatePost): Promise<Post> => {
    return api.post(`/create-post`, data)
}

export const useCreatePost = () => {
    const navigate = useNavigate()
    return useMutation({
        onSuccess: () => {
            navigate(`/app`)
        },
        mutationFn: createPost,
    })
}
