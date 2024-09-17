import { AuthLoader, ProtectedRoute } from '@/lib/auth'

export const GalleryRoute = () => {
    return (
        <AuthLoader renderLoading={() => <div>Loading ...</div>}>
            <ProtectedRoute>
                <div>Gallery Route</div>
            </ProtectedRoute>
        </AuthLoader>
    )
}
