import { useState } from 'react'
import { useLogin } from '@/lib/auth'

type LoginFormProps = {
    onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = useLogin({
        onSuccess,
    })
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login.mutate({
            email: email,
            password: password,
        })
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <div>
                        <div>Login</div>
                    </div>
                    <br />
                    <div>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                    {login.error && <div>cannot login</div>}
                </div>
            </form>
        </>
    )
}
