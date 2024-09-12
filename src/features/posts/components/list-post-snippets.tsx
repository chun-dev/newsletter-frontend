import { PostSnippet } from './post-snippet'
import LabelAugust from '@/assets/Label-August.png'
import { useGetPosts } from '../api/get-posts'

export const ListPostSnippets = () => {
    const postsQuery = useGetPosts()
    if (postsQuery.isLoading) {
        return <div>is loading...</div>
    }

    const posts = postsQuery.data?.data
    if (!posts) return null
    return (
        <div className="m-auto flex max-w-screen-2xl flex-col gap-5 px-5 py-10 md:gap-10 lg:px-20">
            <div className="flex items-end gap-5">
                <div className="text-blogIntroTitle leading-none">
                    This Month
                </div>
                <picture>
                    <img
                        className="block w-[65px] object-cover lg:w-[135px]"
                        src={LabelAugust}
                        alt="Description of image"
                    />
                </picture>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                {posts.map((data, key) => {
                    return (
                        <PostSnippet
                            key={key}
                            title={data.title}
                            content={data.content}
                        />
                    )
                })}
            </div>
        </div>
    )
}
