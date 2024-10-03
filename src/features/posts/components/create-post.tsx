import { useEffect, useState } from 'react'
import { Select } from '@headlessui/react'
import { useCreatePost } from '../api/create-post'
import { useGetNewsletter } from '../../newsletters/api/get-newsletter'
import { NewsletterTitle } from '../../newsletters/components/newsletter-title'
import { ListPosts } from './list-posts'
import { useCreateNewsletter } from '../../newsletters/api/create-newsletter'
import { EditModal } from '@/components/ui/editModal'
import { convertMonth, monthSelect } from '@/utils/formatDate'

export const CreatePost = () => {
    const [newsLetterTitle, setNewsletterTitle] = useState<string>('')
    const [newsLetterSubtitle, setNewsletterSubtitle] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [month, setMonth] = useState<string>('')
    const [years, setYears] = useState<string[]>([])
    const [postModalIsOpen, setPostModalIsOpen] = useState<boolean>(false)
    const [newsletterModalIsOpen, setNewsletterModalIsOpen] =
        useState<boolean>(false)
    const [newPostTitle, setNewPostTitle] = useState<string>('')
    const [newPostSubtitle, setNewPostSubtitle] = useState<string>('')

    const createPostMutation = useCreatePost()
    const createNewsletterMutation = useCreateNewsletter()
    const newsletterQuery = useGetNewsletter(year, convertMonth(month))

    useEffect(() => {
        let currentYear = new Date().getFullYear()
        let earlierYear = 2023
        let yearsArray = []
        for (let i = currentYear; i >= earlierYear; i--) {
            yearsArray.push(i.toString())
        }
        setYears(['', ...yearsArray])
    }, [])

    const handleAddPost = () => {
        setPostModalIsOpen(true)
    }

    const handleAddNewsletter = () => {
        setNewsletterModalIsOpen(true)
    }

    const newsletter = newsletterQuery.data?.data

    const handleSavePost = () => {
        let date = new Date(Number(year), Number(convertMonth(month)) - 1, 15)
        createPostMutation.mutate({
            date: date,
            title: newPostTitle,
            content: newPostSubtitle,
        })
        setPostModalIsOpen(false)
    }

    const handleSaveNewsletter = () => {
        let date = new Date(Number(year), Number(convertMonth(month)) - 1, 15)
        createNewsletterMutation.mutate({
            date: date,
            title: newsLetterTitle,
            content: newsLetterSubtitle,
        })
        setNewsletterModalIsOpen(false)
    }

    return (
        <>
            <div>
                <div className="flex justify-center pb-10">
                    <Select
                        name="status"
                        aria-label="Project status"
                        onChange={(event) => {
                            setYear(event.target.value)
                        }}
                    >
                        {years.map((year, index) => {
                            return (
                                <option value={year} key={index}>
                                    {year == '' ? 'select year' : year}
                                </option>
                            )
                        })}
                    </Select>
                    <Select
                        name="status"
                        aria-label="Project status"
                        onChange={(event) => {
                            setMonth(event.target.value)
                        }}
                    >
                        {monthSelect.map((month, index) => {
                            return (
                                <option value={month} key={index}>
                                    {month == '' ? 'Select month' : month}
                                </option>
                            )
                        })}
                    </Select>
                </div>

                {/* newsletter title */}
                {newsletterQuery.isLoading && <div>is loading...</div>}
                {newsletterQuery.isFetched && (
                    <div>
                        <NewsletterTitle year={year} month={month} />
                    </div>
                )}
                {year && month && !newsletter && (
                    <div className="flex justify-center p-10">
                        <button onClick={handleAddNewsletter}>
                            Add Newsletter
                        </button>
                    </div>
                )}
                {year && month && newsletter && (
                    <div>
                        <ListPosts year={year} month={month} />
                        <div className="flex justify-center p-10">
                            <button onClick={handleAddPost}>Add post</button>
                        </div>
                    </div>
                )}

                {postModalIsOpen && (
                    <EditModal
                        title={newPostTitle}
                        editTitle={setNewPostTitle}
                        subtitle={newPostSubtitle}
                        editSubtitle={setNewPostSubtitle}
                        handleSave={handleSavePost}
                        setModalIsOpen={setPostModalIsOpen}
                    />
                )}

                {newsletterModalIsOpen && (
                    <EditModal
                        title={newsLetterTitle}
                        editTitle={setNewsletterTitle}
                        subtitle={newsLetterSubtitle}
                        editSubtitle={setNewsletterSubtitle}
                        handleSave={handleSaveNewsletter}
                        setModalIsOpen={setNewsletterModalIsOpen}
                    />
                )}
            </div>
        </>
    )
}
