import { useState } from 'react'
import CommentForm from './CommentForm.jsx'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

function CommentSection({ postId, initialComments }) {
  const [comments, setComments] = useState(initialComments)
  const { isAuthenticated, user } = useAuth()

  const addComment = (newComment) => {
    setComments((currentComments) => [...currentComments, newComment])
  }

  return (
    <section className="comments" aria-label="Comments">
      <h2>Comments</h2>
      {isAuthenticated ? (
        <CommentForm
          postId={postId}
          username={user.username}
          onAddComment={addComment}
        />
      ) : (
        <div className="login-notice">
          <p>
            Want to join the conversation? <Link to="/login">Log in</Link> to
            leave a comment.
          </p>
        </div>
      )}

      <div className="comment-list">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((item) => (
              <li key={item.id}>
                <strong>{item.name}:</strong> {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default CommentSection
