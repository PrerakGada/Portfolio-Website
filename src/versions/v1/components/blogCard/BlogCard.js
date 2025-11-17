import React from "react";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={`rounded-[10px] bg-bg-light-1 shadow-[0_0_36px_rgba(0,0,0,0.1)] cursor-pointer h-[200px] ${isDark ? "dark-mode" : ""}`}>
        <a
          className={`block relative bg-transparent rounded no-underline z-0 overflow-hidden h-full before:content-[''] before:absolute before:z-[-1] before:top-[-16px] before:right-[-16px] before:bg-button-primary before:h-8 before:w-8 before:rounded-[32px] before:scale-100 before:origin-center before:transition-transform before:duration-[400ms] before:ease-out hover:before:scale-[30] hover:before:duration-[400ms] hover:[&>p]:transition-all hover:[&>p]:duration-300 hover:[&>p]:ease-out hover:[&>p]:text-text-light hover:[&>h3]:transition-all hover:[&>h3]:duration-300 hover:[&>h3]:ease-out hover:[&>h3]:text-white max-[675px]:hover:before:scale-[40] max-[675px]:before:transition-transform max-[675px]:before:duration-[450ms] max-[860px]:hover:before:scale-[50] max-[860px]:before:transition-transform max-[860px]:before:duration-500 max-[924px]:hover:before:scale-[60] max-[924px]:before:transition-transform max-[924px]:before:duration-500 ${
            isDark ? "dark-mode shadow-[1px_0px_20px_#ffffff]" : ""
          }`}
          href="#blog"
        >
          <h3 className={`text-[1.375rem] leading-6 font-bold ml-5 mr-5 mb-[14px] mt-8 overflow-hidden [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box] max-[480px]:text-[1.125rem] ${isDark ? "text-text-light" : "text-text-blog-title"}`}>
            {blog.title}
          </h3>
          <p className={`text-[1.063rem] font-normal leading-6 px-5 overflow-hidden [-webkit-line-clamp:4] [-webkit-box-orient:vertical] [display:-webkit-box] m-0 ${isDark ? "text-text-light" : "text-text-card-subtitle"}`}>
            {blog.description}
          </p>
          <div className="flex items-center justify-center absolute w-8 h-8 overflow-hidden top-0 right-0 bg-button-primary rounded-tl-none rounded-tr-[4px] rounded-br-none rounded-bl-[32px]">
            <div className="mt-[-4px] mr-[-4px] text-text-light font-['courier,sans']">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
