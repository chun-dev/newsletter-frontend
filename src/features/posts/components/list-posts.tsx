import { useGetPosts } from '../api/get-posts'
import { Post } from './post'

export const ListPosts = () => {
    const postsQuery = useGetPosts()
    if (postsQuery.isLoading) {
        return <div>is loading...</div>
    }

    const posts = postsQuery.data?.data
    if (!posts) return null
    return (
        <div className="post-container">
            {posts.map((data, key) => {
                return (
                    <Post key={key} title={data.title} content={data.content} />
                )
            })}
        </div>
    )
}

