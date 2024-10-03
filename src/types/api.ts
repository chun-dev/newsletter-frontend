export type Post = {
    ID: number
    title: string
    content: string
    date: string
}

export type Newsletter = {
    ID: number
    title: string
    content: string
    date: string
}

export type CreatePost = {
    date: Date
    title: string
    content: string
}

export type CreateNewsletter = {
    date: Date
    title: string
    content: string
}

export type UpdateNewsletter = {
    ID: number
    title: string
    content: string
}

export type UpdatePost = {
    ID: number
    title: string
    content: string
}

export type User = {
    email: string
}

export type UserLogin = {
    email: string
    password: string
}
