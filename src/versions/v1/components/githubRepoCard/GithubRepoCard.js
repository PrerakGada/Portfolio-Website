import React from "react";
import {Fade} from "react-reveal";
import {formatFileSizeDisplay} from "../../../../shared/utils";

export default function GithubRepoCard({repo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={`
            text-github-repo-card bg-bg-light-2 shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] p-8 cursor-pointer transition-all duration-300 ease-in-out
            hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px]
            ${isDark ? 'dark:bg-bg-dark-main dark:text-text-light dark:hover:!bg-button-primary dark:hover:shadow-[0px_0px_16px_#d9dbdf]' : ''}
          `}
          key={repo.node.id}
          onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}
        >
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className={`mr-2 min-w-[16px] ${isDark ? 'fill-text-light' : ''}`}
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className={`whitespace-nowrap overflow-hidden text-ellipsis text-github-repo-name text-[25px] font-bold tracking-[-0.5px] m-0 h-[30px] ${isDark ? 'dark:text-text-light' : ''}`}>
              {repo.node.name}
            </p>
          </div>
          <p className={`overflow-hidden line-clamp-2 ${isDark ? 'dark:text-text-light' : ''}`}>
            {repo.node.description}
          </p>
          <div className="flex justify-between text-[13px] text-github-repo-stats">
            <div className="flex-grow flex">
              {repo.node.primaryLanguage !== null && (
                <span className="flex items-center mr-3">
                  <div
                    className="w-[10px] h-[10px] mr-1 rounded-full"
                    style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
              )}
              <span className="flex items-center mr-3">
                <svg
                  aria-hidden="true"
                  className="mr-[0.3rem]"
                  height="20"
                  role="img"
                  viewBox="0 0 10 16"
                  width="12"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
                <p>{repo.node.forkCount}</p>
              </span>
              <span className="flex items-center mr-3">
                <svg
                  aria-hidden="true"
                  className="mr-[0.3rem]"
                  height="20"
                  role="img"
                  viewBox="0 0 14 16"
                  width="14"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
                <p>{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div>
              <p>{formatFileSizeDisplay(repo.node.diskUsage)}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
