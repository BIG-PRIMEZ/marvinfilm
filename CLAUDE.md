# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static videographer portfolio website using pure HTML, CSS, and vanilla JavaScript. No build process, no dependencies, no framework.

## Development Server

```bash
python -m http.server 8000
# OR
npx serve
# OR
php -S localhost:8000
```

Then open `http://localhost:8000` in browser.

## Architecture

### CSS Architecture (Centralized Variables)
All styling values are defined in `css/variables.css` using CSS custom properties:
- Colors: `--color-black`, `--color-dark-grey`, `--color-light-grey`, `--color-white`
- Spacing: `--spacing-xs` through `--spacing-xl`
- Fonts: Poppins (headings), Inter (body) via Google Fonts
- Transitions: `--transition-fast/normal/slow`

Other CSS files import these variables. Never hardcode values that exist as variables.

### CSS File Organization
- **variables.css** - All CSS custom properties (colors, spacing, fonts, transitions)
- **animations.css** - Keyframe definitions (@keyframes)
- **global.css** - Shared styles: navigation, footer, buttons, utility classes
- **Page-specific**: home.css, portfolio.css, about.css, services.css, contact.css

### JavaScript Modules
- **navigation.js** - Navbar scroll behavior, mobile hamburger menu
- **animations.js** - Intersection Observer for scroll animations, counter animations
- **video-handler.js** - Portfolio video data array, filtering, modal player
- **form-validation.js** - Contact form validation, toast notifications
- **main.js** - Back-to-top button, smooth scrolling, video autoplay

### Video Data Structure
All portfolio videos are stored in `js/video-handler.js` as the `portfolioVideos` array:
```javascript
{
  id: number,
  title: string,
  thumbnail: string,
  videoUrl: string,  // Vimeo/YouTube embed URL
  category: "commercial" | "wedding" | "documentary" | "brand",
  featured: boolean,
  description: string,
  client: string,
  year: string
}
```

### Animation System
- Elements with `.reveal` class animate when scrolled into view via Intersection Observer
- Stagger effects use `.stagger-1` through `.stagger-4` classes
- Counter animations use `data-target` attribute for target number

## Key Customization Points

| Task | File | Location |
|------|------|----------|
| Add/modify videos | `js/video-handler.js` | `portfolioVideos` array |
| Change colors | `css/variables.css` | `:root` selector |
| Update contact info | `contact.html` | Lines 89, 97, 105 |
| Change hero video | `index.html` | Line 29 |
| Update statistics | `index.html` | Lines 73-86 (`data-target` values) |
| Social links | All HTML files | Footer section |

## Page Structure

Five HTML pages with shared navigation and footer:
- `index.html` - Hero, featured work, stats
- `portfolio.html` - Filterable video grid
- `about.html` - Bio, skills, story
- `services.html` - Services, process timeline
- `contact.html` - Contact form

## Form Submission

The contact form in `form-validation.js` is demo-only (shows success after 1.5s delay). For real submission, integrate EmailJS or Formspree - see README.md for setup instructions.

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768-1024px
- Desktop: > 1024px

Uses CSS Grid and Flexbox with mobile-first approach.

## Assets

- **Thumbnails**: `assets/images/thumbnails/` - 1920x1080px (16:9), JPG or WebP
- **Hero video**: `assets/videos/` - MP4 (H.264), under 5MB, 10-20s loop
- Host portfolio videos on Vimeo/YouTube (embed URLs only)

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+. Includes `prefers-reduced-motion` support for accessibility.

## Deployment

Static files - deploy to GitHub Pages, Netlify (drag-and-drop), or any static host. No build step required.
