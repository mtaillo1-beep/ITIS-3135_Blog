import { NavLink } from 'react-router'
import { useTheme } from '../context/ThemeContext.jsx'
import { blogPosts } from '../data/blogPosts.js'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { isAuthenticated, user, logout } = useAuth()
  const firstPostId = blogPosts[0].id

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="site-title" to="/">
          Simple<span>Story</span>
        </NavLink>

        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/blog">Blog Posts</NavLink>
          <NavLink to={`/posts/${firstPostId}`}>Individual Post</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          {isAuthenticated ? (
            <button className="auth-button" type="button" onClick={logout}>
              Logout <span>({user.username})</span>
            </button>
          ) : (
            <NavLink className="auth-link" to="/login">Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
