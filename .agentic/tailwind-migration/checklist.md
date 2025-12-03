# Tailwind Migration Checklist

**Last updated:** 2025-11-19

## Checkpoints

- [x] **Checkpoint 1:** Tailwind v4 tooling installed, build verified (legacy Sass still temporarily active until removal).
- [x] **Checkpoint 2:** Global design tokens + base styles rebuilt with Tailwind utilities, build verified.
- [x] **Checkpoint 3:** Version 1 components migrated off SCSS, build verified (npm run build – 2025-11-20).
- [ ] **Checkpoint 4:** Version 1 containers migrated off SCSS, build verified.
- [ ] **Checkpoint 5:** Version 2 styles fully migrated, final build verified.

## Task Buckets

### 1. Tooling & Infrastructure

- [ ] Remove `sass` dependency and SCSS-specific Vite config.
- [ ] Install `tailwindcss@4.x` (latest) and required PostCSS tooling.
- [ ] Generate Tailwind config + base stylesheet entry.
- [ ] Update `package.json` scripts/docs to reflect Tailwind usage.

### 2. Global Design System

- [x] Port `_globalColor.scss` variables into Tailwind theme tokens / CSS custom properties.
- [x] Recreate typography + spacing scales in Tailwind config.
- [x] Replace `App.scss` and `index.css` with Tailwind-driven layers.
- [x] Ensure dark/light mode classes map to Tailwind utilities.

### 3. Version 1 Components

- [x] Button / Toggle / Social components migrated to Tailwind utilities.
- [x] Cards (achievement, blog, github, education, experience, talk) use Tailwind classes or component layer definitions.
- [ ] Footer/Header components rewritten without SCSS imports. _(Done; awaiting cleanup PR.)_
- [ ] Remove redundant component-level `.scss` files. _(Orphaned SCSS flagged for deletion once remaining components migrate.)_

### 4. Version 1 Containers

- [ ] Greeting, Skills, Projects sections rebuilt with Tailwind utility classes.
- [ ] Secondary sections (Blogs, Talks, Podcasts, Achievements, Contact, etc.) migrated.
- [ ] Loading/top-button/twitter embed styles migrated.
- [ ] Confirm all imports updated to new CSS/tailwind approach.

### 5. Version 2 System

- [ ] Translate `src/versions/v2/styles/_variables.scss` + `global.scss` into Tailwind tokens.
- [ ] Update shared containers (Hero, Services, Portfolio, etc.) to Tailwind classes.
- [ ] Remove `Main.scss`, component `.scss` dependencies.
- [ ] Final pass to delete legacy `.scss` files and references.

## Notes

- Run `npm run build` after each checkpoint and log the outcome in `implementation-log.md`.
- Keep parity with existing designs; use Tailwind `@layer components` for bespoke selectors when needed.
- Document tricky conversions or compromises in the log for future maintainers.
