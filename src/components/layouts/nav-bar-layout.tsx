import { useLogout, useUser } from '@/lib/auth'
import { Link, useNavigate } from 'react-router-dom'

export function NavBarLayout({ children }: { children: React.ReactNode }) {
    const user = useUser()
    const navigate = useNavigate()
    const logout = useLogout()

    const handleLogout = () => {
        navigate('/app')
        logout.mutate()
    }
    return (
        <>
            {user.data && (
                <div className="flex justify-end bg-blog-color p-2">
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            )}
            <nav className="flex justify-center bg-blog-color py-10">
                <div className="flex rounded-3xl border-2 border-black bg-nav-bar-color shadow-md shadow-black">
                    <Link
                        to="."
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        Home
                    </Link>
                    <Link
                        to="./2024"
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        2024
                    </Link>
                    {/* <Link
                        to="./gallery"
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        Gallery
                    </Link> */}
                    <Link
                        to="./latest"
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        Latest
                    </Link>
                    {user.data && (
                        <Link
                            to="./createPost"
                            className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                        >
                            Create Post
                        </Link>
                    )}
                </div>
            </nav>
            <div> {children}</div>
        </>
    )
}
