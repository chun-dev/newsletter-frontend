import { ListPosts } from '@/features/posts/components/list-posts'

export const MonthRoute = () => {
    return (
        <>
            <div className="m-auto flex justify-center bg-blog-color px-5 pb-5 lg:px-20">
                <div className="flex max-w-screen-2xl flex-col">
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-monthIntroTitle">
                            August Newsletter
                        </div>
                        <div className="text-center text-monthIntroSubtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse ultricies porta leo.
                        </div>
                    </div>
                </div>
            </div>
            <ListPosts />
        </>
    )
}
