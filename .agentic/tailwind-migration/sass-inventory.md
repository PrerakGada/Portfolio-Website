# Sass Inventory & Migration Strategy

**Date:** 2025-11-19

| Category | File | Notes | Migration Strategy |
| --- | --- | --- | --- |
| Global | `src/_globalColor.scss` | ✅ Replaced with Tailwind theme tokens + CSS custom properties | Translate variables into Tailwind `@theme` + CSS custom properties for light/dark modes. |
| Global | `src/App.scss` | ✅ Removed – component now uses Tailwind utilities directly | Replace with Tailwind utility classes directly in `App.js`; remove file. |
| Global | `src/index.css` (plain CSS) | Base fonts/scroll behavior | Fold into Tailwind base layer with `@tailwind base/components/utilities` and custom `@layer base`. |
| V1 Container | `src/versions/v1/containers/Main.scss` | Dark-mode background override | Convert to Tailwind context classes + CSS variables. |
| V1 Container | `src/versions/v1/containers/greeting/Greeting.scss` | Hero layout/typography | Rebuild layout using Tailwind flex/spacing utilities, custom animations via `@layer`. |
| V1 Container | `src/versions/v1/containers/skills/Skills.scss` | Skills split layout | Tailwind grid/flex + responsive utilities. |
| V1 Container | `src/versions/v1/containers/projects/Project.scss` | Projects cards grid | Use Tailwind card utilities with `@apply` for repeated patterns. |
| V1 Container | `src/versions/v1/containers/blogs/Blog.scss` | Blog section layout | Tailwind grid + custom box-shadow via `@layer components`. |
| V1 Container | `src/versions/v1/containers/education/Education.scss` | Timeline layout | Map to Tailwind border utilities; custom pseudo elements via component layer. |
| V1 Container | `src/versions/v1/containers/workExperience/WorkExperience.scss` | Work exp timeline | Similar to education plan; rely on Tailwind spacing + custom timeline pseudo CSS. |
| V1 Container | `src/versions/v1/containers/contact/Contact.scss` | Contact card layout | Use Tailwind background/typography classes. |
| V1 Container | `src/versions/v1/containers/achievement/Achievement.scss` | Stats grid | Tailwind typography + responsive text utilities. |
| V1 Container | `src/versions/v1/containers/StartupProjects/StartupProjects.scss` | Startup cards | Tailwind cards w/ gradient backgrounds defined via CSS variables. |
| V1 Container | `src/versions/v1/containers/podcast/Podcast.scss` | Podcast embed layout | Tailwind grid/resizable embed wrappers. |
| V1 Container | `src/versions/v1/containers/talks/Talks.scss` | Talks list layout | Tailwind flex + custom timeline bullet using `@layer`. |
| V1 Container | `src/versions/v1/containers/talks/Progress.scss` | Skill progress bars | Use Tailwind `@layer components` for progress background w/ CSS vars. |
| V1 Container | `src/versions/v1/containers/twitter-embed/twitter.scss` | Twitter embed wrapper | Replace with Tailwind spacing classes; minimal custom CSS. |
| V1 Container | `src/versions/v1/containers/loading/loading.scss` | Loading animation | Recreate animation inside Tailwind `@layer utilities`. |
| V1 Container | `src/versions/v1/containers/topbutton/Top.scss` | Scroll-to-top button | Tailwind fixed positioning + custom hover states. |
| V1 Component | `src/versions/v1/components/header/Header.scss` | ✅ Converted → `Header.css` (Tailwind component layer) | Convert to Tailwind classes with sticky + responsive utilities. |
| V1 Component | `src/versions/v1/components/footer/Footer.scss` | ✅ Converted → `Footer.css` | Tailwind typography; share with global. |
| V1 Component | `src/versions/v1/components/button/Button.scss` | ✅ Converted → `Button.css` | Replace with Tailwind component classes using `@apply`. |
| V1 Component | `src/versions/v1/components/socialMedia/SocialMedia.scss` | ✅ Converted → `SocialMedia.css` | Tailwind grid + brand-specific colors via CSS vars. |
| V1 Component | `src/versions/v1/components/githubRepoCard/GithubRepoCard.scss` | ✅ Converted → `GithubRepoCard.css`; SCSS scheduled for removal | Tailwind card utilities + custom stats row via `@layer`. |
| V1 Component | `src/versions/v1/components/githubProfileCard/GithubProfileCard.scss` | ✅ Converted → `GithubProfileCard.css`; SCSS scheduled for removal | Tailwind utilities; special highlight via `@layer`. |
| V1 Component | `src/versions/v1/components/educationCard/EducationCard.scss` | ✅ Converted → `EducationCard.css`; SCSS slated for removal | Use `@apply` for repeated patterns. |
| V1 Component | `src/versions/v1/components/experienceCard/ExperienceCard.scss` | ✅ Converted → `ExperienceCard.css`; SCSS removal queued | Tailwind responsive grid + timeline connectors using pseudo. |
| V1 Component | `src/versions/v1/components/achievementCard/AchievementCard.scss` | ✅ Converted → `AchievementCard.css`; remove SCSS once cleanup batch runs | Tailwind card utilities. |
| V1 Component | `src/versions/v1/components/blogCard/BlogCard.scss` | ✅ Converted → `BlogCard.css`; SCSS removed | Tailwind grid cards + hover states. |
| V1 Component | `src/versions/v1/components/softwareSkills/SoftwareSkill.scss` | ✅ Converted → `SoftwareSkill.css`; SCSS removed | Tailwind grid + custom tooltip using `@layer`. |
| V1 Component | `src/versions/v1/components/talkCard/TalkCard.scss` | ✅ Converted → `TalkCard.css`; SCSS removed | Tailwind card utilities. |
| V1 Component | `src/versions/v1/components/ToggleSwitch/ToggleSwitch.scss` | ✅ Converted → `ToggleSwitch.css`; SCSS removed | Use Tailwind `@layer components` with CSS custom properties for motion. |
| V2 Global | `src/versions/v2/styles/_variables.scss` | Design tokens | Map to Tailwind theme definitions. |
| V2 Global | `src/versions/v2/styles/global.scss` | Utility classes + typography | Recreate via Tailwind `@layer base/components`; convert repeated utilities into `@apply`. |
| V2 Container | `src/versions/v2/containers/Main.scss` | Root wrappers | Swap for Tailwind classes in JSX. |
| V2 Container | `src/versions/v2/containers/Hero/Hero.scss` | Hero layout | Tailwind grid/flex + `@layer` for gradient backgrounds. |
| V2 Container | `src/versions/v2/containers/Services/Services.scss` | Service section | Use Tailwind for layout; custom patterns via `@layer components`. |
| V2 Container | `src/versions/v2/containers/WorkExperience/WorkExperience.scss` | Timeline layout | Tailwind grid/padding + pseudo connectors. |
| V2 Container | `src/versions/v2/containers/WhyHireMe/WhyHireMe.scss` | Stats + imagery | Tailwind grid/resizable components. |
| V2 Container | `src/versions/v2/containers/Portfolio/Portfolio.scss` | Portfolio cards | Tailwind card combos; custom gradient backgrounds in CSS. |
| V2 Container | `src/versions/v2/containers/Testimonials/Testimonials.scss` | Testimonial cards | Tailwind flex + glassmorphism via CSS variables. |
| V2 Container | `src/versions/v2/containers/Blog/Blog.scss` | Blog cards | Tailwind grid/resizable card classes. |
| V2 Container | `src/versions/v2/containers/Contact/Contact.scss` | Contact CTA | Tailwind layout w/ `@layer` for form elements. |
| V2 Component | `src/versions/v2/components/Header/Header.scss` | Navigation/pills | Tailwind sticky nav w/ `@apply`. |
| V2 Component | `src/versions/v2/components/Footer/Footer.scss` | Footer grid | Tailwind grid/resizable. |

This table will be updated as files are converted or consolidated into Tailwind layers.
