import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../../../shared/data/portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="main flex flex-col gap-6" id="education">
        <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-xl:text-4xl max-md:text-center max-md:text-3xl">
          Education
        </h1>
        <div className="flex flex-col gap-6">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
