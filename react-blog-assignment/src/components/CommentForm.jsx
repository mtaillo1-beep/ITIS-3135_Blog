import { useState } from 'react'

function CommentForm({ postId, username, onAddComment }) {
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanComment = comment.trim()

    if (!cleanComment) {
      setError('Please enter a comment before submitting.')
      return
    }

    onAddComment({ id: Date.now(), name: username, text: cleanComment })
    setComment('')
    setError('')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor={`comment-input-${postId}`}>Comment as {username}</label>
      <textarea
        id={`comment-input-${postId}`}
        value={comment}
        rows="4"
        maxLength="300"
        onChange={(event) => setComment(event.target.value)}
      />

      <button type="submit">Submit Comment</button>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default CommentForm
