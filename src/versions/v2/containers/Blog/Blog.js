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
    <section className="bg-bg-light section">
      <div className="container">
        <div className="flex justify-between items-center mb-2xl tablet:flex-col tablet:gap-md tablet:mb-xl">
          <h2 className="v2-section-title">
            From my blog post
          </h2>
          <a href="/blog" className="btn btn-primary">See All</a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-xl tablet:gap-lg max-[640px]:grid-cols-1">
          {blogs.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-bg-white rounded-lg overflow-hidden transition-all duration-base shadow-md hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* Blog Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                >
                  {/* Placeholder for blog image */}
                </div>
                <button className="absolute bottom-md right-md w-[60px] h-[60px] tablet:w-[50px] tablet:h-[50px] rounded-circle bg-primary-dark text-text-light flex items-center justify-center transition-all duration-base group-hover:bg-primary-orange group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Blog Content */}
              <div className="p-lg">
                <span className="inline-block bg-bg-light px-4 py-[6px] rounded-full text-sm font-medium text-text-dark mb-md">
                  {blog.category}
                </span>

                <div className="flex items-center gap-sm mb-md text-sm text-text-gray">
                  <span className="before:content-['•_'] before:text-primary-orange before:mr-1">
                    {blog.author}
                  </span>
                  <span className="before:content-['•_'] before:text-primary-orange before:mr-1">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-lg tablet:text-base font-bold text-text-dark leading-tight">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
