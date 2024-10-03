import { useState } from 'react'
import { useGetNewsletter } from '../api/get-newsletter'
import { useUpdateNewsletter } from '../api/update-newsletter'
import { EditModal } from '@/components/ui/editModal'
import { convertMonth } from '@/utils/formatDate'

type NewsletterTitleProps = {
    month: string
    year: string
}

export const NewsletterTitle = (props: NewsletterTitleProps) => {
    const [editNewsLetterTitle, setEditNewsletterTitle] = useState<string>('')
    const [editNewsLetterSubtitle, setEditNewsletterSubtitle] =
        useState<string>('')
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const newsletterQuery = useGetNewsletter(
        props.year,
        convertMonth(props.month)
    )
    const updateNewsletterMutation = useUpdateNewsletter()

    if (newsletterQuery.isLoading) {
        return <div>is loading...</div>
    }

    const newsletter = newsletterQuery.data?.data

    if (!newsletter) return null

    const handleEdit = () => {
        setEditNewsletterTitle(newsletter.title)
        setEditNewsletterSubtitle(newsletter.content)
        setModalIsOpen(true)
    }

    const handleSave = () => {
        updateNewsletterMutation.mutate(
            {
                ID: newsletter.ID,
                title: editNewsLetterTitle,
                content: editNewsLetterSubtitle,
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
            {newsletterQuery.isFetched && (
                <div className="relative m-auto flex justify-center bg-blog-color px-5 pb-5 lg:px-20">
                    <div className="flex max-w-screen-2xl flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-monthIntroTitle">
                                {newsletter.title}
                            </div>
                            <div className="text-center text-monthIntroSubtitle">
                                {newsletter.content}
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
                            title={editNewsLetterTitle}
                            editTitle={setEditNewsletterTitle}
                            subtitle={editNewsLetterSubtitle}
                            editSubtitle={setEditNewsletterSubtitle}
                            handleSave={handleSave}
                            setModalIsOpen={setModalIsOpen}
                        />
                    )}
                </div>
            )}
        </>
    )
}
