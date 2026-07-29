import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  if (isAuthenticated) {
    return <Navigate to="/blog" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanUsername = username.trim()
    const nextErrors = {}

    if (cleanUsername.length < 3) {
      nextErrors.username = 'Username must be at least 3 characters.'
    }
    if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    login(cleanUsername)
    navigate(location.state?.from?.pathname || '/blog', { replace: true })
  }

  return (
    <section className="login-layout">
      <div className="login-intro">
        <span className="eyebrow">Member access</span>
        <h1>Welcome back.</h1>
        <p>
          Sign in to explore every post and join the conversation with other
          readers.
        </p>
        <ul>
          <li>Browse the complete blog collection</li>
          <li>Leave comments on individual posts</li>
          <li>Stay signed in between visits</li>
        </ul>
      </div>
      <div className="login-card">
        <h2>Login to your account</h2>
        <p>Use any username and a password of at least 6 characters.</p>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={username}
            aria-invalid={Boolean(errors.username)}
            aria-describedby={errors.username ? 'username-error' : undefined}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && (
            <p className="field-error" id="username-error" role="alert">
              {errors.username}
            </p>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'password-error' : undefined}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <p className="field-error" id="password-error" role="alert">
              {errors.password}
            </p>
          )}
          <button type="submit">Login</button>
        </form>
        <Link className="back-home" to="/">← Back to homepage</Link>
      </div>
    </section>
  )
}

export default LoginPage
