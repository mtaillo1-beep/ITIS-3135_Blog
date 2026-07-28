import { Link, useParams } from 'react-router'
import CommentSection from '../components/CommentSection.jsx'
import { blogPosts } from '../data/blogPosts.js'

function IndividualPostPage() {
  const { postId } = useParams()
  const post = blogPosts.find((item) => item.id === Number(postId))

  if (!post) {
    return (
      <section className="post-card">
        <h1>Post not found</h1>
        <Link className="read-more" to="/blog">
          Return to all posts
        </Link>
      </section>
    )
  }

  return (
    <article className="post-card individual-post">
      <span className="category">{post.category}</span>
      <h1>{post.title}</h1>
      <p className="post-content">{post.content}</p>

      <div className="post-details">
        <p>
          <strong>Author:</strong> {post.author}
        </p>
        <p>
          <strong>Date:</strong> {post.date}
        </p>
      </div>

      <CommentSection
        key={post.id}
        postId={post.id}
        initialComments={post.comments}
      />
    </article>
  )
}

export default IndividualPostPage
