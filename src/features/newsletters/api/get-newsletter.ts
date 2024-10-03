import { queryOptions, useQuery } from '@tanstack/react-query'

import { Newsletter, Post } from '@/types/api'
import { api } from '@/lib/api-client'

export const getNewsletter = (
    year: string,
    month: string
): Promise<{ data: Newsletter }> => {
    return api.get('http://localhost:8080/newsletter', {
        params: { year: year, month: month },
    })
}

export const getNewsletterQueryOptions = (year: string, month: string) => {
    return queryOptions({
        queryKey: ['newsletter', year, month],
        queryFn: () => getNewsletter(year, month),
    })
}

export const useGetNewsletter = (year: string, month: string) => {
    return useQuery({
        enabled: year != '' && month != '',
        ...getNewsletterQueryOptions(year, month),
    })
}
