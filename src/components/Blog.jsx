import React from 'react'
import "../pages/Blog.css";
import gridImg from "../assets/Logo.png";
const posts = [
  {
    id: 1,
    title: "How to Learn React Faster",
    description: "Tips and tricks to speed up your React learning journey.",
    author: "John Doe",
    date: "May 1, 2026",
    image: gridImg,
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox",
    description: "When to use Grid and when to use Flexbox.",
    author: "Jane Smith",
    date: "April 28, 2026",
    image: gridImg,
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    description: "Write clean and maintainable JavaScript code.",
    author: "Alex Lee",
    date: "April 20, 2026",
    image:gridImg,
  },
];
function Blog() {
  return (
   <div className="blog">
      {/* Header */}
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Insights, tutorials & updates</p>
      </header>

      {/* Featured Post */}
      <section className="featured">
        <img src={posts[0].image} alt="featured" />
        <div className="featured-content">
          <h2>{posts[0].title}</h2>
          <p>{posts[0].description}</p>
          <button>Read More</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span>{post.author} • {post.date}</span>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Blog