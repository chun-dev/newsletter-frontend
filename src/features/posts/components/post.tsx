import testImage from '@/assets/test.png' // Adjust the path accordingly
import { EditModal } from '@/components/ui/editModal'
import { useState } from 'react'
import { useUpdatePost } from '../api/update-post'

type PostProps = {
    id: number
    title: string
    content: string
}

export const Post = (props: PostProps) => {
    const [editPostTitle, setEditPostTitle] = useState<string>('')
    const [editPostSubtitle, setEditPostSubtitle] = useState<string>('')
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const updatePostMutation = useUpdatePost()

    const handleEdit = () => {
        setEditPostTitle(props.title)
        setEditPostSubtitle(props.content)
        setModalIsOpen(true)
    }

    const handleSave = () => {
        updatePostMutation.mutate(
            {
                ID: props.id,
                title: editPostTitle,
                content: editPostSubtitle,
            },
            {
                onSuccess: () => {
                    console.log('success')
                },
                onError: () => {
                    console.log('error')
                },
            }
        )
        setModalIsOpen(false)
    }

    return (
        <>
            <div className="relative">
                <div className="relative m-auto max-w-screen-2xl px-5 py-5 lg:px-20 2xl:p-10">
                    <div className="flex flex-col gap-5">
                        <div className="text-center text-monthIntroTitle">
                            {props.title}
                        </div>

                        <div className="flex flex-col-reverse gap-5 md:flex-row">
                            <div className="flex flex-grow basis-8/12 flex-col justify-center rounded-2xl border-2 border-black bg-small-snippet-color">
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
                <button
                    className="absolute bottom-0 right-0"
                    onClick={handleEdit}
                >
                    edit
                </button>
                {modalIsOpen && (
                    <EditModal
                        title={editPostTitle}
                        editTitle={setEditPostTitle}
                        subtitle={editPostSubtitle}
                        editSubtitle={setEditPostSubtitle}
                        handleSave={handleSave}
                        setModalIsOpen={setModalIsOpen}
                    />
                )}
            </div>
        </>
    )
}
