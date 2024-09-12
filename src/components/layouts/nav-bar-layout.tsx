import { Link } from 'react-router-dom'

export function NavBarLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
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
                    <Link
                        to="./gallery"
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="./month"
                        className="rounded-3xl px-3 py-1 text-bigBlogSnippetContent font-medium text-black hover:bg-test-hover-color"
                    >
                        This Month
                    </Link>
                </div>
            </nav>
            <div> {children}</div>
        </>
    )
}
