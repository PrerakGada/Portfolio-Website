import React from "react";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={`certificate-card rounded-xl border border-[var(--color-border-light)] p-6 shadow-[0_10px_30px_-15px_var(--shadow-light-dark)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_var(--shadow-light-dark)] ${
        isDark ? "bg-[var(--surface-card)]" : "bg-[var(--surface-card)]"
      }`}
    >
      <div className="certificate-image-div flex h-[250px] items-center justify-center overflow-hidden">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image h-auto max-w-full rounded-lg object-contain"
        ></img>
      </div>
      <div className="certificate-detail-div text-center">
        <h5
          className={`card-title mt-4 text-[1.375rem] font-bold leading-snug ${
            isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-title)]"
          }`}
        >
          {cardInfo.title}
        </h5>
        <p
          className={`card-subtitle mt-2 text-[1.063rem] leading-6 ${
            isDark
              ? "text-[var(--color-text-dark)]/80"
              : "text-[var(--color-card-subtitle)]"
          }`}
        >
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer mt-6 flex flex-wrap items-center justify-center gap-2">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className="certificate-tag inline-flex h-8 cursor-pointer items-center justify-center rounded-md bg-[var(--color-button)] px-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-light-background-3)] transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-button-hover)]"
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
