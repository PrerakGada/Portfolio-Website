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
          <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-md:text-3xl">
            {bigProjects.title}
          </h1>
          <p className="mt-2 text-base text-[var(--color-subtitle)] max-md:text-center">
            {bigProjects.subtitle}
          </p>

          <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col justify-center rounded-xl border border-[var(--color-border-light)] bg-[var(--surface-card)] p-6 text-center shadow-[0_10px_30px_-15px_var(--shadow-light-dark)] transition-shadow duration-300 hover:shadow-[0_20px_30px_-10px_var(--shadow-light-dark)] ${
                    isDark ? "text-[var(--color-text-dark)]" : ""
                  }`}
                >
                  {project.image ? (
                    <div className="mb-4 flex h-[250px] items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="max-h-full max-w-full object-contain"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5 className="text-2xl font-bold text-[var(--color-title)]">
                      {project.projectName}
                    </h5>
                    <p className="mt-2 text-base text-[var(--color-card-subtitle)]">
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer mt-4 flex flex-wrap justify-center gap-2">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className="project-tag inline-flex cursor-pointer items-center justify-center rounded-md bg-[var(--color-button)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-light-background-3)] transition-colors duration-200 hover:bg-[var(--color-button-hover)]"
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
