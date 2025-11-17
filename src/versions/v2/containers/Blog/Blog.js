import React from "react";
import { blogSection } from "../../../../shared/data/portfolio";

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
    <section className="bg-[var(--color-bg-light)] py-[var(--spacing-xxxl)] md:py-[var(--spacing-xxxl)] max-md:py-[var(--spacing-xxl)]">
      <div className="container">
        <div className="flex justify-between items-center mb-[var(--spacing-xxl)] md:flex-row md:mb-[var(--spacing-xxl)] max-md:flex-col max-md:gap-[var(--spacing-md)] max-md:mb-[var(--spacing-xl)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-dark)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
            From my blog post
          </h2>
          <a href="/blog" className="btn-primary">See All</a>
        </div>

        <div className="grid grid-cols-3 gap-[var(--spacing-xl)] md:grid-cols-3 max-md:grid-cols-1">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-[var(--transition-base)] group">
              <div className="relative h-[250px] bg-gradient-to-br from-[var(--color-bg-light)] to-[#E5E7EB] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for blog image */}
                </div>
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--color-primary-orange)] text-white flex items-center justify-center border-0 cursor-pointer transition-all duration-[var(--transition-base)] group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <span className="inline-block text-sm font-medium text-[var(--color-primary-orange)] mb-3">{blog.category}</span>

                <div className="flex items-center gap-2 text-sm text-[var(--color-text-gray)] mb-3">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-dark)] leading-tight">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
