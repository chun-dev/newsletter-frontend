import { convertMonth } from '@/utils/formatDate'
import { useGetPosts } from '../api/get-posts'
import { Post } from './post'

type ListPostsProps = {
    year: string
    month: string
}
export const ListPosts = (props: ListPostsProps) => {
    const postsQuery = useGetPosts(props.year, convertMonth(props.month))
    if (postsQuery.isLoading) {
        return <div>is loading...</div>
    }

    const posts = postsQuery.data?.data
    if (!posts) return null
    return (
        <div className="post-container">
            {posts.map((data, key) => {
                return (
                    <Post
                        key={key}
                        title={data.title}
                        content={data.content}
                        id={data.ID}
                    />
                )
            })}
        </div>
    )
}
