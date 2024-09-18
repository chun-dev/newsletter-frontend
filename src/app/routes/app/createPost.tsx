import { CreatePost } from '@/features/posts/components/create-post'
import { ProtectedRoute } from '@/lib/auth';

export const CreatePostRoute = () => {
    return (
        <ProtectedRoute>
            <CreatePost />
        </ProtectedRoute>
    )
}
