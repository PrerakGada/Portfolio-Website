import React from "react";
import {socialMediaLinks} from "../../../../shared/data/portfolio";

const platforms = [
  {key: "github", icon: "fab fa-github", bg: "bg-[var(--social-github)]"},
  {key: "linkedin", icon: "fab fa-linkedin-in", bg: "bg-[var(--social-linkedin)]"},
  {key: "gmail", icon: "fas fa-envelope", bg: "bg-[var(--social-google)]", mail: true},
  {key: "gitlab", icon: "fab fa-gitlab", bg: "bg-[var(--social-gitlab)]"},
  {key: "facebook", icon: "fab fa-facebook-f", bg: "bg-[var(--social-facebook)]"},
  {key: "instagram", icon: "fab fa-instagram", bg: "bg-[var(--social-instagram)]"},
  {key: "twitter", icon: "fab fa-twitter", bg: "bg-[var(--social-twitter)]"},
  {key: "medium", icon: "fab fa-medium", bg: "bg-[var(--social-medium)]"},
  {key: "stackoverflow", icon: "fab fa-stack-overflow", bg: "bg-[var(--social-stackoverflow)]"},
  {key: "kaggle", icon: "fab fa-kaggle", bg: "bg-[var(--social-kaggle)]"}
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const enabledPlatforms = platforms.filter(platform => socialMediaLinks[platform.key]);

  return (
    <div className="social-media-div flex flex-wrap items-center text-[2rem] max-md:justify-center">
      {enabledPlatforms.map(platform => (
        <a
          key={platform.key}
          href={platform.mail ? `mailto:${socialMediaLinks[platform.key]}` : socialMediaLinks[platform.key]}
          className="icon-button group mb-2 mr-2 inline-flex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.key}
        >
          <span
            className={`inline-flex h-[2.6rem] w-[2.6rem] items-center justify-center rounded-full text-[1.3rem] text-[var(--color-text-dark)] transition-colors duration-200 ${platform.bg} group-hover:bg-[var(--color-text)]`}
          >
            <i className={platform.icon}></i>
          </span>
        </a>
      ))}
    </div>
  );
}
