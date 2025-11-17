# Tailwind CSS Migration Plan

## Migration Started
**Date:** 2025-11-17
**Branch:** claude/tailwind-migration-01NcQeKbGwVJce1RrnjZrQLu

## Overview
Migrating Portfolio Website from SCSS to Tailwind CSS (latest version)

## SCSS Files Inventory (44 files total)

### Global/Root Files (4)
- [ ] `/src/_globalColor.scss` - Global color variables
- [ ] `/src/App.scss` - Root app styles
- [ ] `/src/versions/v2/styles/global.scss` - V2 global styles
- [ ] `/src/versions/v2/styles/_variables.scss` - V2 design tokens

### V2 Containers (9)
- [ ] `/src/versions/v2/containers/Main.scss`
- [ ] `/src/versions/v2/containers/WorkExperience/WorkExperience.scss`
- [ ] `/src/versions/v2/containers/WhyHireMe/WhyHireMe.scss`
- [ ] `/src/versions/v2/containers/Testimonials/Testimonials.scss`
- [ ] `/src/versions/v2/containers/Portfolio/Portfolio.scss`
- [ ] `/src/versions/v2/containers/Services/Services.scss`
- [ ] `/src/versions/v2/containers/Hero/Hero.scss`
- [ ] `/src/versions/v2/containers/Contact/Contact.scss`
- [ ] `/src/versions/v2/containers/Blog/Blog.scss`

### V2 Components (2)
- [ ] `/src/versions/v2/components/Header/Header.scss`
- [ ] `/src/versions/v2/components/Footer/Footer.scss`

### V1 Containers (13)
- [ ] `/src/versions/v1/containers/Main.scss`
- [ ] `/src/versions/v1/containers/workExperience/WorkExperience.scss`
- [ ] `/src/versions/v1/containers/twitter-embed/twitter.scss`
- [ ] `/src/versions/v1/containers/topbutton/Top.scss`
- [ ] `/src/versions/v1/containers/talks/Talks.scss`
- [ ] `/src/versions/v1/containers/skills/Skills.scss`
- [ ] `/src/versions/v1/containers/skillProgress/Progress.scss`
- [ ] `/src/versions/v1/containers/projects/Project.scss`
- [ ] `/src/versions/v1/containers/loading/loading.scss`
- [ ] `/src/versions/v1/containers/podcast/Podcast.scss`
- [ ] `/src/versions/v1/containers/greeting/Greeting.scss`
- [ ] `/src/versions/v1/containers/contact/Contact.scss`
- [ ] `/src/versions/v1/containers/blogs/Blog.scss`
- [ ] `/src/versions/v1/containers/achievement/Achievement.scss`
- [ ] `/src/versions/v1/containers/education/Education.scss`
- [ ] `/src/versions/v1/containers/StartupProjects/StartupProjects.scss`

### V1 Components (11)
- [ ] `/src/versions/v1/components/softwareSkills/SoftwareSkill.scss`
- [ ] `/src/versions/v1/components/socialMedia/SocialMedia.scss`
- [ ] `/src/versions/v1/components/talkCard/TalkCard.scss`
- [ ] `/src/versions/v1/components/header/Header.scss`
- [ ] `/src/versions/v1/components/githubProfileCard/GithubProfileCard.scss`
- [ ] `/src/versions/v1/components/githubRepoCard/GithubRepoCard.scss`
- [ ] `/src/versions/v1/components/footer/Footer.scss`
- [ ] `/src/versions/v1/components/experienceCard/ExperienceCard.scss`
- [ ] `/src/versions/v1/components/educationCard/EducationCard.scss`
- [ ] `/src/versions/v1/components/button/Button.scss`
- [ ] `/src/versions/v1/components/blogCard/BlogCard.scss`
- [ ] `/src/versions/v1/components/achievementCard/AchievementCard.scss`
- [ ] `/src/versions/v1/components/ToggleSwitch/ToggleSwitch.scss`

## Migration Strategy

### Phase 1: Setup
1. Install Tailwind CSS and dependencies
2. Configure Tailwind with color palette from _globalColor.scss
3. Set up content paths for all components
4. Create utility classes for custom needs

### Phase 2: Core Files
1. Migrate global styles
2. Map all SCSS variables to Tailwind theme
3. Create custom Tailwind utilities if needed

### Phase 3: V2 Migration
1. Start with V2 (simpler, newer codebase)
2. Migrate containers first
3. Then migrate components
4. Test V2 rendering

### Phase 4: V1 Migration
1. Migrate V1 containers
2. Migrate V1 components
3. Test V1 rendering

### Phase 5: Cleanup
1. Remove all SCSS imports from components
2. Delete SCSS files
3. Remove sass dependency from package.json
4. Final build test

### Phase 6: Verification
1. Test light/dark mode
2. Test responsive design
3. Test both v1 and v2
4. Verify all animations and transitions

## Color Mapping (_globalColor.scss → Tailwind)

### Button Colors
- `$buttonColor: #55198b` → `purple-700`
- `$buttonHover: #8c43ce` → `purple-500`

### Text Colors (Light)
- `$titleColor: #000000` → `gray-900`
- `$textColor: #000000` → `gray-900`
- `$subTitle: #868e96` → `gray-500`

### Text Colors (Dark)
- `$textColorDark: #ffffff` → `white`

### Background Colors
- `$lightBackground1: #fff` → `white`
- `$darkBackground: #171c28` → Custom dark color

### Social Media Colors
- `$faceBook: #3b5998`
- `$linkedin: #0e76a8`
- `$github: #333`
- etc.

## Progress Tracking

- **Phase 1 (Setup):** Not Started
- **Phase 2 (Core):** Not Started
- **Phase 3 (V2):** Not Started
- **Phase 4 (V1):** Not Started
- **Phase 5 (Cleanup):** Not Started
- **Phase 6 (Verification):** Not Started

## Notes

- Keep build working after each major phase
- Test dark mode after each container migration
- Maintain responsive breakpoints
- Preserve all animations and transitions
