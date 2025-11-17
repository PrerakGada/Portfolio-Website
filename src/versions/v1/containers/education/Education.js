import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../../../shared/data/portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="flex flex-col w-[90%] py-5 px-0 mx-auto mt-8" id="education">
        <h1 className="flex-1 mb-[30px] text-[30px] md:text-[40px] lg:text-[56px] font-normal text-center md:text-left">Education</h1>
        <div className="flex flex-col pt-0 md:pt-5">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
