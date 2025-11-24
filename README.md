# marvinfilm - Cinematic Portfolio Website

A modern, stunning videographer portfolio website built with pure HTML, CSS, and JavaScript. Features cinematic design, smooth animations, and an admin-friendly video management system.

![marvinfilm](assets/images/marvinfilm-preview.jpg)

## Features

- **Modern Design**: Glassmorphism, gradient effects, and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multi-Page Architecture**: Home, Portfolio, About, Services, and Contact pages
- **Video Portfolio**: Dynamic grid with filtering and modal video player
- **Easy to Update**: Simple admin interface for managing videos
- **Performance Optimized**: Lazy loading, smooth scrolling, and efficient animations
- **Accessible**: Keyboard navigation, ARIA labels, and semantic HTML
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## Project Structure

```
marvinfilm/
├── index.html              # Home page with hero section
├── portfolio.html          # Video gallery with filtering
├── about.html              # About section with skills
├── services.html           # Services with process timeline
├── contact.html            # Contact form with validation
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── animations.css      # Animation keyframes
│   ├── global.css          # Shared styles, nav, footer
│   ├── home.css            # Home page styles
│   ├── portfolio.css       # Portfolio page styles
│   ├── about.css           # About page styles
│   ├── services.css        # Services page styles
│   └── contact.css         # Contact page styles
├── js/
│   ├── navigation.js       # Navigation functionality
│   ├── animations.js       # Scroll animations
│   ├── video-handler.js    # Video portfolio management
│   ├── form-validation.js  # Contact form validation
│   └── main.js             # Global JavaScript
├── assets/
│   ├── images/
│   │   ├── thumbnails/     # Video thumbnails
│   │   └── placeholders/   # Placeholder images
│   └── videos/
│       └── placeholders/   # Placeholder videos
└── README.md
```

## Getting Started

### Installation

1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required

### Local Development

For the best development experience, use a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update Portfolio Videos

Edit `js/video-handler.js` to manage your video portfolio:

```javascript
// ========================================
// ADMIN: UPDATE PORTFOLIO VIDEOS HERE
// ========================================

const portfolioVideos = [
  {
    id: 1,
    title: "Your Project Title",
    thumbnail: "path/to/thumbnail.jpg",
    videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
    category: "commercial", // commercial, wedding, documentary, brand
    featured: true, // Shows on home page
    description: "Project description here",
    client: "Client Name",
    year: "2024"
  },
  // Add more videos below
];
```

**Video URL Formats:**
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`

**Categories:**
- `commercial` - Commercial projects
- `wedding` - Wedding films
- `documentary` - Documentary work
- `brand` - Brand storytelling

**Featured Videos:**
Set `featured: true` to display videos on the home page (limit to 3-4 for best results).

### 2. Update Colors and Theme

Edit `css/variables.css` to customize the color scheme:

```css
:root {
  /* Change these colors */
  --color-black: #0a0a0a;
  --color-dark-grey: #1a1a1a;
  --color-medium-grey: #2a2a2a;
  --color-light-grey: #808080;
  --color-white: #ffffff;

  /* Update gradients */
  --gradient-accent: linear-gradient(135deg, #808080 0%, #2a2a2a 100%);
}
```

### 3. Update Contact Information

Edit `contact.html` to update your contact details:

```html
<!-- Line 89-91 -->
<p><a href="mailto:your@email.com">your@email.com</a></p>

<!-- Line 97-99 -->
<p><a href="tel:+15550001234">+1 (555) 000-1234</a></p>

<!-- Line 105-107 -->
<p>Your City, State<br>Serving clients worldwide</p>
```

### 4. Update Social Media Links

Update social links in the footer of all HTML files:

```html
<!-- Around line 165 in each file -->
<div class="social-links">
  <a href="https://instagram.com/yourprofile" class="social-link">IG</a>
  <a href="https://vimeo.com/yourprofile" class="social-link">VM</a>
  <a href="https://youtube.com/@yourprofile" class="social-link">YT</a>
  <a href="https://linkedin.com/in/yourprofile" class="social-link">IN</a>
</div>
```

### 5. Update About Page Content

Edit `about.html` to personalize your story:

- **Introduction** (lines 41-49): Update your bio
- **The Journey** (lines 57-74): Tell your story
- **Skills** (lines 81-114): Update skill cards with your expertise
- **Philosophy Quote** (lines 122-125): Add your personal quote

### 6. Update Services

Edit `services.html` to customize your service offerings:

- **Service Cards** (lines 36-116): Update services, descriptions, and features
- **Process Steps** (lines 134-173): Customize your workflow

### 7. Change Fonts

Update the Google Fonts import in `css/variables.css`:

```css
/* Line 1 - Change font families */
@import url('https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@300;400;500;600;700;800&family=YourBodyFont:wght@300;400;500;600&display=swap');

/* Then update the variables */
--font-heading: 'YourHeadingFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
```

## Content Management

### Adding New Videos

1. Open `js/video-handler.js`
2. Copy an existing video object
3. Paste it at the end of the `portfolioVideos` array
4. Update all fields (id, title, thumbnail, etc.)
5. Make sure each video has a unique ID

### Updating Thumbnails

1. Place your thumbnail images in `assets/images/thumbnails/`
2. Update the `thumbnail` path in `video-handler.js`
3. Recommended size: 1920x1080px (16:9 ratio)
4. Format: JPG or WebP for best performance

### Hero Video

To change the hero video on the home page:

Edit `index.html` line 29:

```html
<video autoplay muted loop playsinline class="hero-video">
  <source src="assets/videos/your-hero-video.mp4" type="video/mp4">
</video>
```

## Form Integration

The contact form is currently set up with client-side validation. To receive actual form submissions:

### Option 1: EmailJS (Free)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add this script before closing `</body>` in `contact.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Update `js/form-validation.js` with your EmailJS credentials

### Option 2: Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form action in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Backend

Connect the form to your own server by updating the submit handler in `js/form-validation.js`.

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Graceful Degradation

The site includes fallbacks for older browsers:
- CSS Grid with flexbox fallbacks
- Backdrop-filter alternatives
- Reduced animations for users who prefer reduced motion

## Performance Optimization

### Images

- Use WebP format with JPG fallback
- Compress images before upload (TinyPNG, ImageOptim)
- Recommended thumbnail size: 800x450px (16:9)

### Videos

- Host videos on Vimeo or YouTube (embed only)
- Use compressed MP4 for hero video (H.264 codec)
- Keep hero video under 5MB if self-hosting

### Lazy Loading

The site uses Intersection Observer for lazy loading animations. No additional setup needed.

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and root folder
5. Your site will be live at `https://username.github.io/repository-name`

### Netlify

1. Create account at [netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Get a free SSL certificate automatically

### Traditional Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Set up SSL certificate (usually free with hosting)

## Customization Tips

### Changing Animation Speed

Edit `css/variables.css`:

```css
--transition-fast: 0.2s ease;    /* Fast transitions */
--transition-normal: 0.3s ease;  /* Normal speed */
--transition-slow: 0.5s ease;    /* Slower animations */
```

### Adjusting Spacing

Edit spacing variables in `css/variables.css`:

```css
--spacing-xs: 0.5rem;  /* Extra small */
--spacing-sm: 1rem;    /* Small */
--spacing-md: 2rem;    /* Medium */
--spacing-lg: 4rem;    /* Large */
--spacing-xl: 6rem;    /* Extra large */
```

### Changing Border Radius

```css
--radius-sm: 8px;   /* Subtle rounding */
--radius-md: 16px;  /* Medium rounding */
--radius-lg: 24px;  /* Pronounced rounding */
```

## Troubleshooting

### Videos Not Loading

- Check video URL format (must be embed URL)
- Verify video is set to "public" on Vimeo/YouTube
- Check browser console for errors

### Animations Not Working

- Ensure JavaScript is enabled
- Check browser console for errors
- Test in different browser

### Mobile Menu Not Closing

- Clear browser cache
- Ensure `js/navigation.js` is loaded
- Check for JavaScript errors

### Form Not Submitting

- Check browser console for validation errors
- Ensure all required fields are filled
- Verify form integration is set up correctly

## Credits

### Images
- Hero images from [Pexels](https://www.pexels.com/) (free stock photos)
- Video thumbnails should be replaced with your actual project screenshots

### Fonts
- Poppins by Indian Type Foundry
- Inter by Rasmus Andersson

### Icons
- Text-based icons for minimal footprint
- Replace with icon library if desired (Font Awesome, Lucide, etc.)

## License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

## Support

For questions or issues:
- Check this README first
- Review the code comments
- Test in different browsers
- Check browser console for errors

## Version

**Version:** 1.0.0
**Last Updated:** November 2024
**Built with:** Pure HTML, CSS, and JavaScript

---

**Made with ❤️ for storytellers and visual creators**
