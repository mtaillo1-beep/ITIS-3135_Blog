import BlogPostCard from './BlogPostCard.jsx'

function BlogList({ posts }) {
  return (
    <section className="post-list" id="posts" aria-label="Blog posts">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </section>
  )
}

export default BlogList
