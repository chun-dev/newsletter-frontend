type editModalProps = {
    title: string
    editTitle: Function
    subtitle: string
    editSubtitle: Function
    handleSave: Function
    setModalIsOpen: Function
}

export const EditModal = (props: editModalProps) => {
    const handleSave = () => {
        props.handleSave()
    }

    const closeModal = () => {
        props.setModalIsOpen(false)
    }

    const setEditNewsletterTitle = (title: string) => {
        props.editTitle(title)
    }

    const setEditNewsletterSubtitle = (subtitle: string) => {
        props.editSubtitle(subtitle)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex h-1/2 w-1/2 flex-col gap-3 rounded-lg bg-slate-200 p-6 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">
                    Edit Title and Subtitle
                </h2>
                <h1>Title</h1>
                <input
                    className="h-10 w-full"
                    type="text"
                    value={props.title}
                    onChange={(event) =>
                        setEditNewsletterTitle(event.target.value)
                    }
                />
                <h1>Subtitle</h1>
                <textarea
                    className="h-56 w-full resize-none"
                    value={props.subtitle}
                    onChange={(event) =>
                        setEditNewsletterSubtitle(event.target.value)
                    }
                />
                <div className="flex justify-center gap-24">
                    <button onClick={handleSave}>save</button>
                    <button
                        onClick={() => {
                            closeModal()
                        }}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
