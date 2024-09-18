import { useState } from 'react'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { useCreatePost } from '../api/create-post'

export const CreatePost = () => {
    const [selected, setSelected] = useState<Date>()
    const [dateError, setDateError] = useState<string>('')

    const [title, setTitle] = useState<string>('')
    const [titleError, setTitleError] = useState<string>('')

    const [content, setContent] = useState<string>('')
    const [contentError, setContentError] = useState<string>('')

    const createPostMutation = useCreatePost()

    const handlePost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setDateError('')
        setTitleError('')
        setContentError('')

        if (selected == undefined) {
            setDateError('Please select a date')
        }
        if (title.length === 0) {
            setTitleError('Title Cannot be empty')
        }
        if (content.length === 0) {
            setContentError('Content Cannot be empty')
        }

        if (selected && title.length > 0 && content.length > 0) {
            createPostMutation.mutate({
                date: selected,
                title: title,
                content: content,
            })
        }
    }

    return (
        <>
            <form onSubmit={handlePost}>
                <div className="flex flex-col items-center gap-10 pb-10">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={
                            selected
                                ? `Selected: ${selected.toLocaleDateString()}`
                                : 'Pick a day.'
                        }
                    />
                    {dateError.length > 0 && <div>{dateError}</div>}
                    <div className="w-3/6">
                        <h1>POST TITLE</h1>
                        <input
                            className="h-10 w-full"
                            type="text"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        {titleError.length > 0 && <div>{titleError}</div>}
                    </div>
                    <div className="w-3/6">
                        <h1>POST CONTENT</h1>
                        <textarea
                            className="h-60 w-full p-2"
                            onChange={(event) => setContent(event.target.value)}
                        ></textarea>
                        {contentError.length > 0 && <div>{contentError}</div>}
                    </div>
                    <button type="submit">Create Post</button>
                </div>
            </form>
        </>
    )
}
