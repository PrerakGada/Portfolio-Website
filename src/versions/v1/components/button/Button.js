import React from "react";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className || "flex justify-center mt-5"}>
      <a
        className="
          bg-button-primary border border-button-primary text-text-light font-bold
          w-max py-[13px] px-[22px] mr-0 uppercase rounded-md text-center
          no-underline block mt-5 text-base cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-bg-white hover:text-button-primary hover:-translate-y-1
          tablet:py-3 tablet:px-[18px] tablet:text-[0.938rem]
          mobile:text-xs
        "
        href={href}
        target={newTab && "_blank"}
      >
        {text}
      </a>
    </div>
  );
}
