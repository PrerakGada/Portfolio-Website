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
            className={`${
              isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"
            } text-base`}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[var(--color-border-light)] transition-shadow duration-300 ${
        isDark
          ? "bg-[var(--color-dark-background)] text-[var(--color-text-dark)] shadow-[0_10px_30px_-15px_var(--shadow-light-dark)] hover:shadow-[0_20px_30px_-10px_var(--shadow-light-dark)]"
          : "bg-[var(--surface-card)] text-[var(--color-text)] shadow-[0_10px_30px_-15px_var(--shadow-light-dark)] hover:shadow-[0_20px_30px_-10px_var(--shadow-light-dark)]"
      }`}
    >
      <div
        style={{background: rgb(colorArrays) ?? "var(--gradient-experience-banner)"}}
        className="experience-banner relative flex h-44 items-end justify-center overflow-hidden rounded-t-xl"
      >
        <div className="experience-blurred_div absolute inset-0 bg-[var(--gradient-experience-blur)] blur-md"></div>
        <div className="experience-div-company relative z-10 flex w-full items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-6 text-center">
          <h5 className="experience-text-company m-0 truncate text-[25px] font-bold text-[var(--color-light-background-1)]">
            {cardInfo.company}
          </h5>
        </div>

        <img
          ref={imgRef}
          className="experience-roundedimg absolute left-1/2 top-32 h-32 w-32 -translate-x-1/2 rounded-full object-cover shadow-[0_8px_16px_var(--shadow-light-darker)] md:top-28 md:h-28 md:w-28"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
          onError={() => {
            console.warn("Image failed to load:", cardInfo.company);
            setColorArrays([40, 44, 52]);
          }}
        />
      </div>
      <div className="experience-text-details px-6 pb-8 pt-20 text-center">
        <h5 className="experience-text-role text-[25px] font-bold md:text-[22px]">
          {cardInfo.role}
        </h5>
        <h5 className="experience-text-date pt-3 text-[20px] font-semibold md:text-[18px]">
          {cardInfo.date}
        </h5>
        <p className="experience-text-desc mt-4 text-base">{cardInfo.desc}</p>
        <ul className="mt-4 space-y-2">
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
