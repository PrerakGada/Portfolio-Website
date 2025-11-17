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
    <div className={`p-6 rounded-[10px] border border-border-light-1 shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] transition-all duration-300 ease-in-out hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px] ${isDark ? "dark-mode bg-bg-dark hover:shadow-[rgba(255,255,255,0.2)_0px_20px_30px_-10px]" : "bg-bg-light-2"}`}>
      <div className="relative h-[250px] overflow-hidden flex justify-center items-center">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="max-w-full h-auto w-[250px]"
        ></img>
      </div>
      <div className="text-center">
        <h5 className={`text-[1.375rem] leading-6 font-bold m-0 mt-[15px] ${isDark ? "dark-mode text-text-dark" : "text-text-dark"}`}>
          {cardInfo.title}
        </h5>
        <p className={`text-[1.063rem] leading-6 ${isDark ? "dark-mode text-text-card-subtitle" : "text-text-card-subtitle"}`}>
          {cardInfo.description}
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={`bg-button-primary text-bg-light-3 align-middle items-center rounded inline-flex text-xs h-8 justify-center whitespace-nowrap leading-normal m-0 mr-2 mb-2 px-3 cursor-pointer transition-all duration-200 ease-in hover:bg-button-hover ${
                isDark ? "dark-mode" : ""
              }`}
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
