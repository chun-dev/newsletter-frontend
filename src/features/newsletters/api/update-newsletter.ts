import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Newsletter, UpdateNewsletter } from '@/types/api'
import { api } from '@/lib/api-client'

export const updateNewsletter = (
    data: UpdateNewsletter
): Promise<Newsletter> => {
    return api.post(`/update-newsletter`, data)
}

export const useUpdateNewsletter = () => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['newsletter'],
            })
        },
        mutationFn: updateNewsletter,
    })
}
