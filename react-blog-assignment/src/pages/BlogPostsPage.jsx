import BlogList from '../components/BlogList.jsx'
import { blogPosts } from '../data/blogPosts.js'

function BlogPostsPage() {
  return (
    <>
      <h1 className="page-heading">Blog Posts</h1>
      <BlogList posts={blogPosts} />
    </>
  )
}

export default BlogPostsPage
