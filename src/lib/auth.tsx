import { configureAuth } from 'react-query-auth'
import { Navigate, useLocation } from 'react-router-dom'
import { User, UserLogin } from '@/types/api'
import { api } from './api-client'

const getUser = async (): Promise<User> => {
    const response = await api.get('/me')
    return response.data
}

const login = (data: UserLogin): Promise<User> => {
    return api.post('/login', data)
}

const register = (data: UserLogin): Promise<User> => {
    return api.post('/register', data)
}

const logout = (): Promise<void> => {
    return api.post('/logout')
}

const authConfig = {
    userFn: getUser,
    loginFn: async (data: UserLogin) => {
        return await login(data)
    },
    registerFn: async (data: UserLogin) => {
        return await register(data)
    },
    logoutFn: logout,
}

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
    configureAuth(authConfig)

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useUser()
    const location = useLocation()

    if (!user.isFetched) {
        return <div>loading...</div>
    }
    if (user.isFetched && !user.data) {
        return (
            <Navigate
                to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
                replace
            />
        )
    }
    return children
}
