import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle text-start" >
          {item}
        </li >
      ))
      : null;
  };
  const { isDark } = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="flex flex-row max-[1380px]:flex-col max-[1380px]:pb-[10px] max-[768px]:text-center">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="object-cover mr-8 w-24 h-24 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full max-[1380px]:w-16 max-[1380px]:h-16 max-[1380px]:mb-2 max-[1380px]:mr-0 max-[768px]:mt-[10px] max-[768px]:w-16 max-[768px]:h-16 max-[768px]:mb-4 max-[768px]:mr-0"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="max-w-[70%] max-[1380px]:max-w-[90%] max-[768px]:max-w-full">
            <h5 className="m-0 text-[28px] font-bold overflow-hidden whitespace-nowrap text-ellipsis h-[27px] max-[1380px]:text-xl max-[1380px]:h-[23px]">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={`font-bold text-[19px] m-0 pt-[0.8rem] leading-normal max-[1380px]:pt-2 max-[1380px]:text-base ${
                  isDark ? "dark-mode" : ""
                } text-text-dark`}
              >
                {school.subHeader}
              </h5>
              <p
                className={`text-[19px] m-0 pt-2 max-[1380px]:text-base ${isDark ? "dark-mode" : ""
                  } text-text-dark`}
              >
                {school.duration}
              </p>
              <p className="mt-2 mb-2">{school.desc}</p>
              <div className="mt-2">
                <ul className="max-[768px]:max-w-[80%] max-[768px]:mx-auto">
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="h-[30px] w-[80%] border-t-2 border-border-light-1 mb-5 transition-all duration-[600ms] ease-in-out hover:border-border-education hover:w-full max-[1380px]:w-[90%] max-[768px]:w-full"></div>
      </Slide>
    </div>
  );
}
