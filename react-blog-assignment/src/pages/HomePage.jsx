import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

function HomePage() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="landing-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Thoughts · Code · Creativity</span>
          <h1 id="hero-title">
            Small ideas can start <span>big conversations.</span>
          </h1>
          <p>
            Welcome to SimpleStory—a friendly space for stories about learning
            React, designing for real people, and growing one project at a time.
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              to={isAuthenticated ? '/blog' : '/login'}
            >
              {isAuthenticated ? 'Explore the blog' : 'Login to explore'}
            </Link>
            <Link className="button button-secondary" to="/posts/1">
              Read a featured post
            </Link>
          </div>
          {isAuthenticated && (
            <p className="welcome-back">Welcome back, {user.username}!</p>
          )}
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="story-card story-card-back">
            <span>DESIGN</span>
            <strong>Make it useful.</strong>
          </div>
          <div className="story-card story-card-front">
            <span>FEATURED STORY</span>
            <strong>Learn. Build. Share.</strong>
            <div className="story-lines" />
          </div>
          <div className="hero-orbit">✦</div>
        </div>
      </section>

      <section className="feature-grid" aria-label="What you will find">
        <article>
          <span className="feature-icon" aria-hidden="true">01</span>
          <h2>Practical learning</h2>
          <p>Approachable notes from building projects with React.</p>
        </article>
        <article>
          <span className="feature-icon" aria-hidden="true">02</span>
          <h2>Thoughtful design</h2>
          <p>Simple ideas for experiences that work on every screen.</p>
        </article>
        <article>
          <span className="feature-icon" aria-hidden="true">03</span>
          <h2>Open conversation</h2>
          <p>Sign in and add your voice to the discussion.</p>
        </article>
      </section>
    </div>
  )
}

export default HomePage
