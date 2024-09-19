import { ProtectedRoute } from '@/lib/auth'

export const GalleryRoute = () => {
    return (
        <ProtectedRoute>
            <div>Gallery Route</div>
        </ProtectedRoute>
    )
}
