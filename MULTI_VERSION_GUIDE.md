# Multi-Version Portfolio System - Complete Guide

## Overview

Your portfolio now supports **multiple independent design versions** in a single repository. Each version has its own components, containers, and styling while sharing common portfolio data.

## Architecture

```
src/
├── versions/
│   ├── config.js              # 🎯 Default version configuration
│   ├── v1/                    # Version 1 - Classic Design
│   │   ├── components/
│   │   ├── containers/
│   │   └── index.js
│   └── v2/                    # Version 2 - Modern Design (Figma)
│       ├── components/
│       ├── containers/
│       └── index.js
├── shared/
│   ├── data/
│   │   └── portfolio.js       # 📊 Shared portfolio data
│   ├── contexts/
│   │   └── StyleContext.js    # Theme management
│   ├── hooks/
│   │   └── useLocalStorage.js
│   └── utils.js               # Shared utilities
├── routes/
│   └── VersionRouter.js       # Routing logic
├── App.js                     # Main app entry
└── assets/                    # Shared assets (images, fonts, etc.)
```

## How It Works

### URL Structure

- **`/`** → Redirects to default version (configured in `src/versions/config.js`)
- **`/v1`** → Version 1 (Classic design)
- **`/v2`** → Version 2 (Modern Figma design)
- Any other path → Redirects to default version

### Routing Flow

1. User visits your site
2. `App.js` loads `VersionRouter`
3. Router checks the URL path
4. Loads the appropriate version component
5. Version renders with shared data from `portfolio.js`

## Changing the Default Version

To change which version appears on your root domain:

1. Open `src/versions/config.js`
2. Modify the `DEFAULT_VERSION` constant:

```javascript
export const DEFAULT_VERSION = "v2"; // Change from "v1" to "v2"
```

3. Save and redeploy

**That's it!** One line change switches your entire default portfolio.

## Working with Shared Data

All your portfolio information is centralized in `src/shared/data/portfolio.js`:

```javascript
// In any version component
import {
  greeting,
  workExperiences,
  educationInfo,
  skillsSection,
  achievementSection,
  bigProjects,
  // ... all other data
} from "../../../shared/data/portfolio";

// Use the data
function MyComponent() {
  return <h1>{greeting.title}</h1>;
}
```

### Available Shared Data

- `greeting` - Personal introduction
- `socialMediaLinks` - Social media profiles
- `skillsSection` - Skills and technologies
- `educationInfo` - Education history
- `workExperiences` - Work experience
- `achievementSection` - Awards and certificates
- `bigProjects` - Major projects
- `blogSection` - Blog posts
- `talkSection` - Talks and presentations
- `contactInfo` - Contact information
- And more...

## Creating Version 2 (Your Figma Design)

Version 2 already has a scaffold structure. Here's how to implement your design:

### Step 1: Plan Your Components

Based on your Figma design, identify the components you need:
- Header/Navigation
- Hero Section
- About Section
- Projects Gallery
- Contact Form
- Footer
- etc.

### Step 2: Create Components

Create your components in `src/versions/v2/components/`:

```bash
src/versions/v2/components/
├── Header/
│   ├── Header.js
│   └── Header.scss
├── Hero/
│   ├── Hero.js
│   └── Hero.scss
└── ... other components
```

Example component:

```javascript
// src/versions/v2/components/Hero/Hero.js
import React from "react";
import "./Hero.scss";
import { greeting } from "../../../../shared/data/portfolio";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>{greeting.title}</h1>
      <p>{greeting.subTitle}</p>
    </div>
  );
};

export default Hero;
```

### Step 3: Create Page Sections

Organize your page sections in `src/versions/v2/containers/`:

```bash
src/versions/v2/containers/
├── Main.js            # Main layout
├── About/
├── Projects/
└── ... other sections
```

### Step 4: Update Main.js

Replace the placeholder in `src/versions/v2/containers/Main.js`:

```javascript
import React from "react";
import "./Main.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="v2-main">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
```

### Step 5: Add Styling

Create your styles using the Figma design:

```scss
// src/versions/v2/containers/Main.scss
.v2-main {
  // Your styles based on Figma
  font-family: 'YourFigmaFont', sans-serif;
  background-color: #yourColor;
}
```

### Step 6: Test Your Version

```bash
npm start
```

Visit `http://localhost:3000/v2` to see your new design!

## Adding More Versions (v3, v4, etc.)

To add additional versions in the future:

### 1. Create Version Folder

```bash
mkdir -p src/versions/v3/components src/versions/v3/containers
```

### 2. Create Version Files

```javascript
// src/versions/v3/index.js
import Main from "./containers/Main";
export default Main;
```

```javascript
// src/versions/v3/containers/Main.js
import React from "react";

const Main = () => {
  return <div>Version 3</div>;
};

export default Main;
```

### 3. Update Router

Edit `src/routes/VersionRouter.js`:

```javascript
// Add import
const V3 = lazy(() => import("../versions/v3"));

// Add route in Switch
<Route path="/v3">
  <V3 />
</Route>
```

### 4. Update Config

Edit `src/versions/config.js`:

```javascript
export const VERSIONS = {
  v1: { ... },
  v2: { ... },
  v3: {
    id: "v3",
    name: "Version 3 - Experimental",
    description: "Experimental design",
  }
};
```

## Sharing Resources Between Versions

### Shared Utilities

```javascript
// Use shared utility functions
import { formatFileSizeDisplay } from "../../../shared/utils";
```

### Shared Contexts

```javascript
// Use theme management
import { StyleProvider } from "../../../shared/contexts/StyleContext";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
```

### Shared Assets

All assets are in `src/assets/` and accessible from any version:

```javascript
// In v1
import logo from "../../../../assets/images/logo.png";

// In v2
import logo from "../../../../assets/images/logo.png";
```

## Development Workflow

### Working on V1
```bash
npm start
# Visit http://localhost:3000/v1
```

### Working on V2
```bash
npm start
# Visit http://localhost:3000/v2
```

### Building for Production
```bash
npm run build
```

All versions are bundled together in one build!

### Deploying

```bash
# Firebase
npm run build
firebase deploy

# GitHub Pages
npm run deploy
```

## Best Practices

### 1. **Keep Versions Independent**
Each version should have its own components and styling. Don't import components from other versions.

✅ Good:
```javascript
// v2/components/Hero.js
import Header from "../components/Header/Header"; // Own version
```

❌ Bad:
```javascript
// v2/components/Hero.js
import Header from "../../v1/components/header/Header"; // Other version
```

### 2. **Use Shared Data**
Always use shared portfolio data instead of hardcoding:

✅ Good:
```javascript
import { greeting } from "../../../shared/data/portfolio";
```

❌ Bad:
```javascript
const greeting = "Hardcoded text";
```

### 3. **Maintain Consistent Data Structure**
When updating `portfolio.js`, ensure all versions can still access the data they need.

### 4. **Version-Specific Assets**
If you have version-specific images/fonts:
- Create `src/assets/v2/` for v2-specific assets
- Keep shared assets in `src/assets/`

### 5. **Test All Versions**
Before deploying, test:
- `/` (default version)
- `/v1`
- `/v2`
- `/invalid-url` (should redirect to default)

## Troubleshooting

### Build Errors About Missing Files

If you get module not found errors:
1. Check import paths are correct (use `../../../` for shared resources)
2. Ensure all required files exist
3. Check file extensions (.js, .jsx)

### Version Not Loading

1. Check `src/routes/VersionRouter.js` has the route
2. Verify version folder has `index.js`
3. Clear browser cache
4. Check browser console for errors

### Styles Not Applied

1. Check SCSS imports use correct relative paths
2. Verify `@import` statements point to `../../../_globalColor` for shared styles
3. Check class names match between JS and SCSS

## Maintenance

### Updating Shared Data

Edit `src/shared/data/portfolio.js` - changes reflect across all versions automatically.

### Switching Default Version

Edit `src/versions/config.js` → change `DEFAULT_VERSION` → redeploy.

### Archiving Old Versions

To remove an old version:
1. Keep the folder (for history)
2. Remove route from `VersionRouter.js`
3. Users can't access it anymore, but code remains

## Summary

✅ **Multiple independent designs** in one repository
✅ **Shared portfolio data** - update once, reflects everywhere
✅ **URL-based access** - no user switcher needed
✅ **Easy default switching** - one line change
✅ **Single build** - all versions deploy together
✅ **Scalable** - add unlimited versions

---

**Ready to build?** Start implementing your Figma design in `src/versions/v2/` and visit `/v2` to see it in action!
