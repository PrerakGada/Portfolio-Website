import React from "react";
import talksCardBack from "../../../../assets/images/talksCardBack.svg";

export default function TalkCard({talkDetails}) {
  return (
    <div className="talk-card-container">
      <div className="flex justify-center">
        <div
          style={{ backgroundImage: `url(${talksCardBack})` }}
          className={`w-[380px] h-[300px] rounded shadow-[0px_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out mt-[50px] hover:shadow-[0_20px_40px_rgba(255,255,255,1)] max-[768px]:w-full max-[768px]:h-auto max-[768px]:pb-[30px] ${
            talkDetails.isDark ? "shadow-[0px_0px_20px_0px]" : ""
          }`}
        >
          <div className="diagonal-fill"></div>
          <div className="text-text-light m-auto text-left mt-[25px] px-0 pt-0 pb-10 pl-[30px] text-[26px] leading-normal overflow-hidden [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box] max-[768px]:mt-[30px]">{talkDetails.title}</div>
          <p className="mt-[35px] text-justify pl-[30px] pr-[30px] text-base text-text-talk-subtitle leading-[18px] overflow-hidden [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box]">{talkDetails.subtitle}</p>

          <div className="flex justify-around">
            <a href={talkDetails.slides_url} target="_" className="bg-button-primary text-text-light w-[90px] py-[10px] px-[18px] rounded-[3px] text-center no-underline block mt-5 text-sm cursor-pointer transition-all duration-200 ease-in hover:bg-button-hover">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="bg-button-primary text-text-light w-[90px] py-[10px] px-[18px] rounded-[3px] text-center no-underline block mt-5 text-sm cursor-pointer transition-all duration-200 ease-in hover:bg-button-hover">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
