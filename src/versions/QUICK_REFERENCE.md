# Multi-Version Portfolio - Quick Reference

## 🎯 Change Default Version

**File:** `src/versions/config.js`

```javascript
export const DEFAULT_VERSION = "v1"; // Change to "v2", "v3", etc.
```

## 📂 Folder Structure

```
src/
├── versions/
│   ├── config.js          # ← Change default here
│   ├── v1/                # Current design
│   └── v2/                # New Figma design
├── shared/
│   ├── data/
│   │   └── portfolio.js   # ← Edit your content here
│   ├── contexts/          # Theme management
│   ├── hooks/             # Custom hooks
│   └── utils.js           # Utilities
└── routes/
    └── VersionRouter.js   # Routing configuration
```

## 🔗 URL Routes

| URL | Version |
|-----|---------|
| `/` | Default (set in config.js) |
| `/v1` | Version 1 - Classic |
| `/v2` | Version 2 - Modern |

## 📝 Import Shared Data

```javascript
// From any version component
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo
} from "../../../shared/data/portfolio";
```

## 🎨 Import Paths Reference

**From v1 or v2 component:**
- Shared data: `"../../../shared/data/portfolio"`
- Shared contexts: `"../../../shared/contexts/StyleContext"`
- Shared hooks: `"../../../shared/hooks/useLocalStorage"`
- Shared utils: `"../../../shared/utils"`
- Assets: `"../../../../assets/images/..."`
- Global colors (SCSS): `@import "../../../../_globalColor";`

**From v1 or v2 container:**
- Shared data: `"../../../shared/data/portfolio"`
- Shared contexts: `"../../../shared/contexts/StyleContext"`
- Assets: `"../../../../assets/images/..."`
- Global colors (SCSS): `@import "../../../_globalColor";`

## ⚡ Common Commands

```bash
# Development
npm start               # Start dev server
# Then visit:
# http://localhost:3000     (default)
# http://localhost:3000/v1  (version 1)
# http://localhost:3000/v2  (version 2)

# Production
npm run build          # Build all versions
npm run deploy         # Deploy to GitHub Pages
firebase deploy        # Deploy to Firebase
```

## 🚀 Quick Start: Building V2

1. **Plan components** based on Figma design

2. **Create components** in `src/versions/v2/components/`
   ```
   src/versions/v2/components/
   ├── Header/
   │   ├── Header.js
   │   └── Header.scss
   ├── Hero/
   └── ...
   ```

3. **Update Main.js** in `src/versions/v2/containers/Main.js`
   ```javascript
   import Header from "../components/Header/Header";
   import Hero from "../components/Hero/Hero";
   import { greeting } from "../../../shared/data/portfolio";

   const Main = () => (
     <div>
       <Header />
       <Hero />
     </div>
   );
   ```

4. **Test:** Visit `http://localhost:3000/v2`

5. **Deploy:** `npm run build && firebase deploy`

## 🔧 Troubleshooting

**Module not found errors?**
- Check import paths (count the `../` correctly)
- Ensure file exists

**Styles not working?**
- Check SCSS `@import` paths
- Verify class names match

**Version not loading?**
- Check route exists in `src/routes/VersionRouter.js`
- Verify `index.js` exports Main component

## 📊 Updating Portfolio Data

**Edit once, reflects everywhere:**

`src/shared/data/portfolio.js`

Changes automatically appear in all versions!

## ✅ Pre-Deployment Checklist

- [ ] Test `/` (redirects to default)
- [ ] Test `/v1` (loads correctly)
- [ ] Test `/v2` (loads correctly)
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in browser
- [ ] Shared data displays correctly
- [ ] Images load properly

---

**Need detailed help?** See [MULTI_VERSION_GUIDE.md](../../MULTI_VERSION_GUIDE.md)
