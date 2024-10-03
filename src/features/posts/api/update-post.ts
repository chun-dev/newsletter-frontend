import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Newsletter, UpdatePost } from '@/types/api'
import { api } from '@/lib/api-client'

export const updatePost = (data: UpdatePost): Promise<Newsletter> => {
    return api.post(`/update-post`, data)
}

export const useUpdatePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            })
        },
        mutationFn: updatePost,
    })
}
