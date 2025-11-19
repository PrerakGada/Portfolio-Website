import React from "react";

export default function BlogCard({blog, isDark}) {
  if (!blog?.url) {
    return null;
  }

  const containerClasses = `blog-container group relative h-[200px] overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-[var(--color-light-background-1)] shadow-[0_0_36px_var(--shadow-light)] transition-transform duration-300 hover:-translate-y-0.5 ${
    isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-blog-card-container)]"
  }`;

  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noreferrer noopener"
      className={containerClasses}
      aria-label={blog.title}
    >
      <span className="pointer-events-none absolute -right-4 -top-4 h-8 w-8 rounded-full bg-[var(--color-button)] transition-transform duration-500 group-hover:scale-[30]" aria-hidden="true"></span>
      <h3
        className={`blog-title relative z-10 mx-5 mt-8 line-clamp-2 text-[1.375rem] font-bold leading-6 transition-colors duration-300 ${
          isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-blog-title)]"
        } group-hover:text-[var(--shadow-dark-2)]`}
        style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"}}
      >
        {blog.title}
      </h3>
      <p
        className={`small relative z-10 px-5 text-[1.063rem] leading-6 transition-colors duration-300 ${
          isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-card-subtitle)]"
        } group-hover:text-[var(--color-blog-hover-small)]`}
        style={{display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical"}}
      >
        {blog.description}
      </p>
      <div className="go-corner pointer-events-none absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-bl-[32px] rounded-tr-lg bg-[var(--color-button)]">
        <div className="go-arrow -mr-1 -mt-1 text-[var(--color-text-dark)]">→</div>
      </div>
    </a>
  );
}
