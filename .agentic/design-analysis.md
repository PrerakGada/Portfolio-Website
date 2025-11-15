# V2 Design Analysis (Figma Export)

**Design Source:** PNG export from Figma
**Date Analyzed:** 2025-11-15
**Design Style:** Modern, Professional, Product Designer Portfolio

## Design System

### Color Palette

**Primary Colors:**
- Orange/Coral: `#FF6B35` (approx) - Primary accent, buttons, highlights
- Dark Navy/Black: `#1a1a2e` (approx) - Dark section backgrounds
- White: `#ffffff` - Light section backgrounds, text on dark
- Light Gray: `#f5f5f5` - Card backgrounds

**Gradients:**
- Orange circular gradient behind hero photo
- Dark gradient for testimonials section

### Typography

**Headings:**
- Large, bold sans-serif
- Hierarchy: Main heading > Section headings > Card titles

**Body Text:**
- Modern sans-serif (possibly Inter, Poppins, or similar)
- Good line spacing for readability

**Accent Text:**
- Orange color for emphasis ("Orange" in "Product Designer")
- "Work Experience" uses orange accent

### Layout Patterns

1. **Card-based Design**
   - Service cards with rounded corners
   - Project preview cards
   - Blog post cards
   - Testimonial cards

2. **Section Structure**
   - Alternating white and light backgrounds
   - Dark background for testimonials
   - Generous padding and spacing

3. **Grid System**
   - 3-column grid for services
   - 2-column grid for portfolio items
   - 3-column grid for blog posts

## Component Breakdown

### 1. Header/Navigation
**Location:** Top of page, fixed/sticky
**Elements:**
- Logo: "XORA" text logo (left)
- Nav menu: About, Services, Works, Resume, Contact (center)
- Social icons: LinkedIn, Instagram, GitHub (right)
**Style:**
- Clean, minimal
- Likely sticky on scroll

### 2. Hero Section
**Location:** Top of page, first section
**Layout:** 2-column (image left, content right)

**Left Side:**
- Large professional photo
- Orange circular gradient background
- Overlapping layout

**Right Side:**
- Small text: "Hello,"
- Large heading: "I'm Prerak Gada,"
- Accent heading: "Product Designer" (Orange highlight)
- Description paragraph
- Badge: "10 Years Experience" with 5-star rating
- Two CTA buttons:
  - Primary: "Portfolio" (Orange button)
  - Secondary: "Hire me" (Outlined button)

**Data Sources:**
- `greeting.username`
- `greeting.title`
- `greeting.subTitle`

### 3. Services Section ("My Services")
**Location:** After hero
**Layout:** 3-column grid

**Heading:** "My Services"
**Cards:** 3 service cards
1. UI/UX Design (with mockup preview)
2. Web Design (with mockup preview)
3. Landing Page (with mockup preview)

**Card Structure:**
- Preview image/mockup at top
- Service title
- Arrow icon for link
- Hover effects

**Data Source:** Adapt from `skillsSection`

### 4. Work Experience ("My Work Experience")
**Location:** Mid-page
**Layout:** Timeline with 2 columns

**Heading:** "My Work Experience" (Orange accent)

**Timeline Structure:**
- Left column: Company names
  - "Cognizant, Mumbai"
  - "Sujee Pvt limited, Mumbai"
  - "Cinetstox, Mumbai"

- Right column: Job titles
  - "Experience Designer"
  - "UI/UX Designer"
  - "Lead UX Designer"

- Timeline connector in middle with dots
- Date ranges displayed

**Data Source:** `workExperiences`

### 5. Why Hire Me Section
**Location:** Mid-page
**Layout:** 2-column (image left, content right)

**Left Side:**
- Photo with orange accent background
- Overlapping "Why Hire me?" text

**Right Side:**
- Heading: "Why Hire me?"
- Description paragraph
- Stats:
  - "450+ Projects Completed"
  - "450+ Happy Clients"
- CTA button: "Hire me"

**Data Source:**
- Create new section or use `achievementSection`

### 6. Portfolio Section
**Location:** Mid-page
**Heading:** "Lets have a look at my Portfolio"

**Filter Tabs:**
- Landing Page
- Product Design
- Animation
- Documentation
- Code

**Project Cards:**
- Project thumbnail images
- Project title: "Lirante - Food Delivery Solution"
- Brief description
- Multiple preview images

**Data Source:** `bigProjects`

### 7. Testimonials Section
**Location:** Lower-mid page
**Background:** Dark navy/black

**Heading:** "Testimonials That Speak to My Results" (white text)

**Cards:** 2 visible testimonial cards
- Client name
- Client role/company
- 5-star rating
- Testimonial quote
- Client photo/avatar

**Data Source:** Create new or adapt `achievementSection`

### 8. Project Discussion CTA
**Location:** Lower page
**Background:** White with orange accent border

**Content:**
- Heading: "Have an Awesome Project Idea? Let's Discuss"
- Contact options:
  - Email
  - Phone
  - WhatsApp
- CTA button: "Lets work together" (Orange)

**Data Source:** `contactInfo`

### 9. Design Services Banner
**Location:** Between sections (marquee/scroll)
**Content:** Horizontal scrolling text
- "UX Design • App Design • Dashboard • Wireframe • User Research"

### 10. Blog Section ("From my blog post")
**Location:** Lower page
**Layout:** 3-column grid

**Cards:** 3 blog post cards
- Featured image
- Category tag
- Title
- Date
- Read more link

**Data Source:** `blogSection`

### 11. Footer ("Lets Connect there")
**Location:** Bottom of page
**Background:** Dark

**Sections:**
- Logo and description (left)
- Navigation links (center columns)
- Newsletter signup (right)
- Social media icons
- Copyright notice

**Data Source:**
- `socialMediaLinks`
- `contactInfo`

## Design Principles

1. **Hierarchy:** Clear visual hierarchy with size and color
2. **Spacing:** Generous white space between sections
3. **Consistency:** Rounded corners throughout (likely 8-12px radius)
4. **Contrast:** Dark sections alternate with light sections
5. **Call-to-Action:** Orange buttons stand out
6. **Photography:** Professional photos with orange accent overlays
7. **Typography:** Bold headings, readable body text
8. **Cards:** Elevated with subtle shadows

## Responsive Considerations

- Mobile menu hamburger
- Stack columns on mobile
- Reduce spacing on smaller screens
- Adjust typography scales

## Assets Needed

- Profile photo (hero section)
- Profile photo (why hire me section)
- Service mockup images (3)
- Portfolio project images
- Blog post images (3)
- Client avatars (testimonials)

---

**Implementation Priority:**
1. Header + Hero (Session 1) ← Current
2. Services + Experience + Why Hire Me (Session 2)
3. Portfolio + Testimonials + Blog (Session 3)
4. Footer + Polish (Session 4)
