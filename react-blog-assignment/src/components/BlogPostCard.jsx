import { useState } from 'react'
import { Link } from 'react-router'

function BlogPostCard({ post }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="post-card">
      <span className="category">{post.category}</span>
      <h2>{post.title}</h2>
      <p className="post-content">{post.excerpt}</p>

      <div className="post-details">
        <p>
          <strong>Author:</strong> {post.author}
        </p>
        <p>
          <strong>Date:</strong> {post.date}
        </p>
      </div>

      <div className="post-actions">
        <Link className="read-more" to={`/posts/${post.id}`}>
          Read full post
        </Link>
        <button
          className={liked ? 'like-button liked' : 'like-button'}
          type="button"
          aria-pressed={liked}
          onClick={() => setLiked((current) => !current)}
        >
          <span aria-hidden="true">{liked ? '♥' : '♡'}</span>
          {liked ? 'Liked' : 'Like this post'}
        </button>
      </div>
    </article>
  )
}

export default BlogPostCard
