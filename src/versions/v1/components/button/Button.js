import React from "react";

export default function Button({text, className = "", href = "#", newTab}) {
  const baseClasses =
    "main-button inline-block rounded-md border border-[var(--color-button)] bg-[var(--color-button)] px-[22px] py-[13px] text-center text-base font-bold uppercase tracking-wide text-[var(--color-text-dark)] transition-all duration-300 hover:bg-[var(--shadow-dark-2)] hover:text-[var(--color-button)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-button)] max-md:mr-0 max-md:text-[0.938rem] max-[320px]:text-[0.75rem]";

  return (
    <div className={`${className} w-max max-md:w-full`}>
      <a
        className={`${baseClasses} mr-[50px] mt-5 w-max max-md:w-full max-md:px-[18px] max-md:py-[12px]`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
