export const blogPosts = [
  {
    id: 1,
    category: 'Introduction',
    title: 'My First Blog Post',
    excerpt: 'Welcome to my first blog post and the start of this React project.',
    content:
      'Welcome to my first blog post. Building this page helped me practice creating reusable React components, passing props, and organizing content into a clean layout. This expanded version gives readers the full story while the home page provides a shorter preview.',
    author: 'Michael Taillon',
    date: '07-19-2026',
    comments: [
      { id: 101, name: 'Avery', text: 'The layout is simple and easy to follow.' },
      { id: 102, name: 'Jordan', text: 'Great first React project!' },
    ],
  },
  {
    id: 2,
    category: 'React',
    title: 'Learning Reusable Components',
    excerpt: 'Reusable components make an application easier to maintain and expand.',
    content:
      'Reusable components are one of the most useful ideas in React. A component can receive different data through props while keeping the same structure and behavior. In this blog, one post card component displays every preview, which reduces repeated code and keeps future design changes consistent.',
    author: 'Michael Taillon',
    date: '07-21-2026',
    comments: [],
  },
  {
    id: 3,
    category: 'Design',
    title: 'Building a Responsive Blog Layout',
    excerpt: 'A few flexible CSS rules can make the same blog work across screen sizes.',
    content:
      'Responsive design allows visitors to comfortably read the blog on phones, tablets, and desktop computers. This layout uses flexible widths, spacing, wrapping navigation links, and a small-screen media query. The result keeps the content readable without creating a separate mobile version of the application.',
    author: 'Michael Taillon',
    date: '07-23-2026',
    comments: [
      { id: 301, name: 'Sam', text: 'The mobile spacing works well.' },
    ],
  },
]
