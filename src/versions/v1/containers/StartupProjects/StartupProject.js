import React, {useContext} from "react";
import {bigProjects} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode max-md:text-base max-md:text-center"
                : "text-text-subtitle max-md:text-base max-md:text-center"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode flex flex-col bg-bg-light-2 p-6 rounded-[10px] border border-border-light-1 justify-center shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.2)] transition-all duration-[0.25s] hover:shadow-[0px_20px_30px_-10px_rgba(0,0,0,0.2)]"
                      : "flex flex-col bg-bg-light-2 p-6 rounded-[10px] border border-border-light-1 justify-center shadow-[rgba(0,0,0,0.3)_0px_10px_30px_-15px] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.3)_0px_20px_30px_-10px]"
                  }
                >
                  {project.image ? (
                    <div className="relative h-[250px] overflow-hidden flex justify-center items-center">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="max-w-full h-auto w-[250px]"
                      ></img>
                    </div>
                  ) : null}
                  <div className="text-center">
                    <h5
                      className={isDark ? "dark-mode text-text-dark text-[22px] leading-6 font-bold mt-[15px] mb-0" : "text-text-dark text-[22px] leading-6 font-bold mt-[15px] mb-0"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode text-text-card-subtitle text-[17px] leading-6" : "text-text-card-subtitle text-[17px] leading-6"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode bg-button-primary text-bg-light-3 align-middle items-center rounded inline-flex text-xs h-8 justify-center whitespace-nowrap leading-normal m-0 mr-2 mb-2 px-3 cursor-pointer transition-[0.2s] ease-in" : "bg-button-primary text-bg-light-3 align-middle items-center rounded inline-flex text-xs h-8 justify-center whitespace-nowrap leading-normal m-0 mr-2 mb-2 px-3 cursor-pointer transition-[0.2s] ease-in"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
