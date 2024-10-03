import { useGetLatestPost } from '@/features/posts/api/get-posts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const LatestRoute = () => {
    const postQuery = useGetLatestPost()
    const navigate = useNavigate()
    useEffect(() => {
        const posts = postQuery.data?.data
        if (posts) {
            const date = new Date(posts[0].date)
            const year = date.getFullYear()
            const month = date.toLocaleString('default', { month: 'long' })
            navigate(`/app/posts/${year}/${month}`)
        }
    }, [postQuery.data, navigate])
    if (postQuery.isLoading) {
        return <div>is loading...</div>
    }
}
