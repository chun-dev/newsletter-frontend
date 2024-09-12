import { Link } from 'react-router-dom'

type PostSnippetProps = {
    title: string
    content: string
}

export const PostSnippet = (props: PostSnippetProps) => {
    const truncateContent = (content: string): string => {
        let truncateLength = 100
        return content.length > truncateLength
            ? content.substring(0, truncateLength - 3) + '...'
            : content
    }
    return (
        <>
            <div className="flex flex-col gap-3 rounded-3xl border-2 border-black bg-white-color px-6 shadow-md shadow-black md:gap-10">
                <div className="my-2 text-blogSnippetTitle leading-none">
                    {props.title}
                </div>
                <div className="text-blogSnippetSubtitle leading-none">
                    {truncateContent(props.content)}
                </div>
                <div className="mb-2 flex justify-center sm:justify-start">
                    <Link to="./month" className="p-0">
                        <button
                            type="button"
                            className="w-fit rounded-lg border-2 border-black bg-button-color px-10 py-1 text-button font-bold hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                        >
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
