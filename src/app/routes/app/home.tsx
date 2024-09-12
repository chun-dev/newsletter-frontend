import { NewsletterIntro } from '@/features/posts/components/newsletter-intro'
import LabelAugust from '@/assets/Label-August.png'
import { ListPostSnippets } from '@/features/posts/components/list-post-snippets'

export const HomeRoute = () => {
    return (
        <>
            <NewsletterIntro />
            <ListPostSnippets />
        </>
    )
}
