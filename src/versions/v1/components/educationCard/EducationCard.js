import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="text-left text-[var(--color-subtitle)]">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div className="group">
      <Fade left duration={1000}>
        <div className="education-card flex flex-col gap-6 text-center md:flex-row md:items-start md:text-left">
          {school.logo && (
            <div className="education-card-left flex-shrink-0">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg h-24 w-24 rounded-full object-cover shadow-[0_8px_16px_var(--shadow-light-darker)] max-md:mx-auto max-md:mb-4 max-md:h-16 max-md:w-16 md:mr-8"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right w-full md:max-w-[70%]">
            <h5 className="education-text-school m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[28px] font-bold md:text-[24px]">
              {school.schoolName}
            </h5>

            <div className="education-text-details">
              <h5
                className={`education-text-subHeader pt-2 text-[19px] font-bold ${
                  isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"
                } md:text-[16px]`}
              >
                {school.subHeader}
              </h5>
              <p
                className={`education-text-duration pt-2 text-[19px] ${
                  isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-title)]"
                } md:text-[16px]`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc my-2 text-base">{school.desc}</p>
              <div className="education-text-bullets">
                <ul className="ml-5 list-disc space-y-1 text-base md:ml-0 md:max-w-[80%]">
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border h-[30px] w-4/5 border-t-2 border-[var(--color-border-light)] transition-all duration-500 ease-in-out group-hover:w-full group-hover:border-[var(--color-education-border)]"></div>
      </Slide>
    </div>
  );
}
