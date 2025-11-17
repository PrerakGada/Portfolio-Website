import React, {useState, createRef} from "react";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      if (imgRef.current && imgRef.current.complete) {
        const colors = colorThief.getColor(imgRef.current);
        setColorArrays(colors);
      }
    } catch (error) {
      // Fallback color for Safari/iOS compatibility
      console.warn("ColorThief failed, using fallback color:", error);
      setColorArrays([40, 44, 52]); // Default dark blue-gray color
    }
  }

  function rgb(values) {
    return typeof values === "undefined" || values.length === 0
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle text-text-light" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={`relative rounded-[10px] border border-border-light-1 shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px] transition-shadow ${isDark ? "bg-bg-dark" : "bg-bg-light-2"}`}>
      <div
        style={{background: rgb(colorArrays)}}
        className="relative bg-experience-banner bg-center bg-no-repeat bg-[length:150%] rounded-t-[10px] h-44 flex items-end justify-center"
      >
        <div className="absolute bg-experience-blurred blur-[5px] h-44 top-0 left-0 w-full rounded-t-[10px]"></div>
        <div className="absolute bg-transparent h-36 top-0 left-0 w-full flex items-center justify-center">
          <h5 className="text-center p-6 m-0 text-bg-light-1 text-[25px] font-bold overflow-hidden whitespace-nowrap text-ellipsis max-[1380px]:text-[22px]">{cardInfo.company}</h5>
        </div>

        <img
          ref={imgRef}
          className="absolute object-cover left-0 right-0 top-28 mx-auto w-32 h-32 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full max-[1380px]:w-[6.5rem] max-[1380px]:h-[6.5rem]"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
          onError={(e) => {
            console.warn("Image failed to load:", cardInfo.company);
            setColorArrays([40, 44, 52]); // Fallback color
          }}
        />
      </div>
      <div className="p-6 mt-8">
        <h5
          className={`text-center font-bold text-[25px] m-0 pt-6 leading-normal max-[1380px]:pt-2 max-[1380px]:text-[22px] max-[768px]:text-[22px] ${
            isDark ? "text-text-light" : "text-text-dark"
          }`}
        >
          {cardInfo.role}
        </h5>
        <h5
          className={`text-center text-xl m-0 pt-4 font-semibold max-[1380px]:text-lg max-[768px]:text-lg ${
            isDark ? "text-text-light" : "text-text-dark"
          }`}
        >
          {cardInfo.date}
        </h5>
        <p
          className={`subTitle text-center max-[768px]:text-base ${
            isDark ? "text-text-light" : ""
          }`}
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
