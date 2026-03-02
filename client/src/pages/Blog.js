import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2026',
      author: 'Inalgo Team',
      date: 'March 1, 2026',
      category: 'Technology',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development...',
      readTime: '5 min read',
      image: '💻'
    },
    {
      id: 2,
      title: 'Building Scalable SaaS Applications',
      author: 'Inalgo Team',
      date: 'February 28, 2026',
      category: 'Development',
      excerpt: 'Best practices for creating SaaS platforms that can grow with your business...',
      readTime: '8 min read',
      image: '☁️'
    },
    {
      id: 3,
      title: 'Mobile-First Design Strategies',
      author: 'Inalgo Team',
      date: 'February 25, 2026',
      category: 'Design',
      excerpt: 'Why mobile-first approach is essential for modern applications...',
      readTime: '6 min read',
      image: '📱'
    },
    {
      id: 4,
      title: 'AI and Machine Learning in Business',
      author: 'Inalgo Team',
      date: 'February 20, 2026',
      category: 'AI/ML',
      excerpt: 'How artificial intelligence is transforming business operations and decision making...',
      readTime: '10 min read',
      image: '🤖'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices',
      author: 'Inalgo Team',
      date: 'February 15, 2026',
      category: 'Security',
      excerpt: 'Essential security measures every business should implement to protect their digital assets...',
      readTime: '7 min read',
      image: '🔒'
    },
    {
      id: 6,
      title: 'Cloud Migration Guide',
      author: 'Inalgo Team',
      date: 'February 10, 2026',
      category: 'Cloud',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud...',
      readTime: '12 min read',
      image: '🌐'
    }
  ];

  return (
    <div className="blog-page">
      <section className="hero">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead">Insights, tutorials, and industry trends</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-icon">{post.image}</div>
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <span className="author">By {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-time">{post.readTime}</span>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
