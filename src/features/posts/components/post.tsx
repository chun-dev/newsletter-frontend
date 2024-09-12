import testImage from '@/assets/test.png' // Adjust the path accordingly

type PostProps = {
    title: string
    content: string
}

export const Post = (props: PostProps) => {
    return (
        <>
            <div>
                <div className="m-auto max-w-screen-2xl px-5 py-5 lg:px-20 2xl:p-10">
                    <div className="flex flex-col gap-5">
                        <div className="text-center text-monthIntroTitle">
                            {props.title}
                        </div>

                        <div className="flex flex-col-reverse gap-5 md:flex-row">
                            <div className="flex flex-grow basis-8/12 flex-col justify-center rounded-2xl border-2 border-black bg-small-snippet-color">
                                <div className="nav-bar-color rounded-t-2xl px-5 py-2">
                                    {props.title}
                                </div>
                                <div className="px-5 pb-5 pt-1 text-blogSnippetSubtitle">
                                    {props.content}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <picture>
                                    <img
                                        className="block h-[270px] max-w-full rounded-lg border-2 border-black object-cover p-3"
                                        src={testImage}
                                        alt="Description of image"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
