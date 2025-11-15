# Version 2 - Modern Portfolio Design

This folder contains the Version 2 of the portfolio with the new Figma-based design.

## Structure

```
v2/
├── components/          # Reusable UI components for v2
├── containers/          # Page sections and layouts for v2
│   └── Main.js         # Main entry component
├── styles/             # Version-specific styles
├── index.js            # Version export
└── README.md           # This file
```

## Getting Started

1. **Design your components** in the `components/` folder
2. **Create page sections** in the `containers/` folder
3. **Add styles** in the `styles/` folder or component-specific SCSS files
4. **Use shared data** by importing from `../../../shared/data/portfolio.js`
5. **Use shared utilities** from `../../../shared/contexts/` and `../../../shared/hooks/`

## Accessing Shared Data

```javascript
import {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  bigProjects,
  blogSection,
  talkSection,
  contactInfo
} from "../../../shared/data/portfolio";
```

## Using Shared Contexts

```javascript
import { StyleProvider } from "../../../shared/contexts/StyleContext";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
```

## Tips

- Keep your design completely independent from v1
- You can create entirely new component structures
- Reuse the shared portfolio data to maintain consistency
- Add version-specific assets in `src/assets/v2/` if needed
- Test your version by visiting `/v2` in the browser

## Current Status

🚧 **Under Development** - Placeholder component ready for Figma design implementation
