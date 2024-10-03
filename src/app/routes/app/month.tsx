import { ListPosts } from '@/features/posts/components/list-posts'
import { NewsletterTitle } from '@/features/newsletters/components/newsletter-title'
import { useParams } from 'react-router-dom'

export const MonthRoute = () => {
    const params = useParams()
    const year = params.year as string
    const month = params.month as string

    return (
        <>
            <NewsletterTitle year={year} month={month} />
            <ListPosts year={year} month={month} />
        </>
    )
}
