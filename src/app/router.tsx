import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoot } from './routes/app/root'

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: '/app',
            element: <AppRoot />,
            children: [
                {
                    path: '2024',
                    lazy: async () => {
                        const { YearRoute } = await import('./routes/app/year')
                        return { Component: YearRoute }
                    },
                },
                {
                    path: 'gallery',
                    lazy: async () => {
                        const { GalleryRoute } = await import(
                            './routes/app/gallery'
                        )
                        return { Component: GalleryRoute }
                    },
                },
                {
                    path: 'month',
                    lazy: async () => {
                        const { MonthRoute } = await import(
                            './routes/app/month'
                        )
                        return { Component: MonthRoute }
                    },
                },
                {
                    path: '',
                    lazy: async () => {
                        const { HomeRoute } = await import('./routes/app/home')
                        return { Component: HomeRoute }
                    },
                },
            ],
        },
        {
            path: '/test',
            lazy: async () => {
                const { TestingRoute } = await import('./routes/app/test')
                return { Component: TestingRoute }
            },
        },
    ])

export const AppRouter = () => {
    const router = createAppRouter()

    return <RouterProvider router={router} />
}
