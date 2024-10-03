import { useMutation } from '@tanstack/react-query'
import { CreateNewsletter, Newsletter } from '@/types/api'
import { api } from '@/lib/api-client'

export const createNewsletter = (
    data: CreateNewsletter
): Promise<Newsletter> => {
    return api.post(`/create-newsletter`, data)
}

export const useCreateNewsletter = () => {
    return useMutation({
        mutationFn: createNewsletter,
    })
}
