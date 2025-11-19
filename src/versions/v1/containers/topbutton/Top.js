import React, {useEffect, useState} from "react";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-7 z-[99] rounded-2xl border-0 bg-[var(--color-button)] p-4 text-[25px] text-[var(--color-text-dark)] shadow-lg transition-colors duration-200 hover:bg-[var(--color-top-button-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-button)] focus-visible:ring-offset-transparent ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
