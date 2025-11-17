import React from "react";
import { blogSection } from "../../../../shared/data/portfolio";
import "./Blog.scss";

const Blog = () => {
  const sampleBlogs = [
    {
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      image: null
    },
    {
      title: "Sugee: Loan Management System for Rural Sector.",
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      image: null
    },
    {
      title: "Cinetrade: Innovative way to invest in Digital Media",
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      image: null
    }
  ];

  const blogs = blogSection.display && blogSection.blogs?.length > 0
    ? blogSection.blogs
    : sampleBlogs;

  return (
    <section className="v2-blog section">
      <div className="container">
        <div className="v2-blog-header">
          <h2 className="v2-section-title">
            From my blog post
          </h2>
          <a href="/blog" className="btn btn-primary">See All</a>
        </div>

        <div className="v2-blog-grid">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="v2-blog-card">
              <div className="v2-blog-image">
                <div className="v2-blog-image-placeholder">
                  {/* Placeholder for blog image */}
                </div>
                <button className="v2-blog-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="v2-blog-content">
                <span className="v2-blog-category">{blog.category}</span>

                <div className="v2-blog-meta">
                  <span className="v2-blog-author">{blog.author}</span>
                  <span className="v2-blog-date">{blog.date}</span>
                </div>

                <h3 className="v2-blog-title">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
