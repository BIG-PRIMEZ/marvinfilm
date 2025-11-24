# Customization Cheatsheet

Quick reference for the most common customization tasks.

## 🎥 Adding/Updating Videos

**File:** `js/video-handler.js`

```javascript
// Add to portfolioVideos array:
{
  id: 9,  // Must be unique
  title: "Your Project Title",
  thumbnail: "https://images.pexels.com/photos/YOUR_IMAGE_ID/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=800",
  videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
  category: "commercial",  // commercial, wedding, documentary, brand
  featured: true,  // true = shows on home page
  description: "Brief project description",
  client: "Client Name",
  year: "2024"
}
```

## 🎨 Changing Colors

**File:** `css/variables.css` (lines 5-11)

```css
:root {
  --color-black: #0a0a0a;        /* Main background */
  --color-dark-grey: #1a1a1a;    /* Secondary background */
  --color-medium-grey: #2a2a2a;  /* Card backgrounds */
  --color-light-grey: #808080;   /* Accent color - CHANGE THIS */
  --color-white: #ffffff;        /* Text color */
}
```

**Quick Color Changes:**
- Accent color: Line 9 `--color-light-grey`
- Button gradient: Line 14 `--gradient-accent`
- Text gradient: Line 15 `--gradient-text`

## 📧 Contact Information

**File:** `contact.html`

**Email (line 89):**
```html
<p><a href="mailto:your@email.com">your@email.com</a></p>
```

**Phone (line 97):**
```html
<p><a href="tel:+15550001234">+1 (555) 000-1234</a></p>
```

**Location (line 105):**
```html
<p>Your City, State<br>Serving clients worldwide</p>
```

## 🔗 Social Media Links

**Files:** All HTML files (footer section, around line 165)

```html
<a href="https://instagram.com/yourprofile" class="social-link">IG</a>
<a href="https://vimeo.com/yourprofile" class="social-link">VM</a>
<a href="https://youtube.com/@yourprofile" class="social-link">YT</a>
<a href="https://linkedin.com/in/yourprofile" class="social-link">IN</a>
```

## ✏️ About Page Content

**File:** `about.html`

**Main bio (lines 41-49):**
```html
<h2>Creating visual stories that matter</h2>
<p>Your introduction paragraph here...</p>
```

**Story section (lines 60-73):**
Update your journey and experience

**Skills (lines 84-114):**
Update the 6 skill cards with your specialties

**Philosophy quote (lines 123-125):**
```html
<h2 class="philosophy-quote gradient-text">
  "Your inspiring quote here"
</h2>
```

## 🛠️ Services

**File:** `services.html`

**Service cards start at line 36:**
```html
<div class="service-card reveal stagger-1">
  <div class="service-icon">🎬</div>
  <h3 class="service-title">Your Service</h3>
  <p class="service-description">Description here</p>
  <ul class="service-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
</div>
```

**Process steps (lines 134-173):**
Update the 5-step workflow with your process

## 🎬 Hero Video

**File:** `index.html` (line 29)

```html
<video autoplay muted loop playsinline class="hero-video">
  <source src="assets/videos/your-video.mp4" type="video/mp4">
</video>
```

**Recommended specs:**
- Format: MP4 (H.264)
- Size: Under 5MB
- Resolution: 1920x1080
- Duration: 10-20 seconds loop

## 📊 Stats Numbers

**File:** `index.html` (lines 73-86)

```html
<div class="stat-number" data-target="150">0</div>
<div class="stat-label">Projects Completed</div>
```

Change `data-target` value to your numbers.

## 🔤 Fonts

**File:** `css/variables.css` (line 1)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

Then update (lines 23-24):
```css
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
```

**Popular alternatives:**
- Headings: Montserrat, Raleway, Oswald, Space Grotesk
- Body: Open Sans, Lato, Roboto, DM Sans

## ⚡ Animation Speed

**File:** `css/variables.css` (lines 27-29)

```css
--transition-fast: 0.2s ease;    /* Quick hovers */
--transition-normal: 0.3s ease;  /* Standard */
--transition-slow: 0.5s ease;    /* Dramatic */
```

## 📐 Spacing

**File:** `css/variables.css` (lines 16-20)

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 2rem;     /* 32px */
--spacing-lg: 4rem;     /* 64px */
--spacing-xl: 6rem;     /* 96px */
```

## 🔘 Border Radius

**File:** `css/variables.css` (lines 31-33)

```css
--radius-sm: 8px;    /* Buttons */
--radius-md: 16px;   /* Cards */
--radius-lg: 24px;   /* Large containers */
```

## 📱 Responsive Breakpoints

Defined in CSS files:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**To adjust:** Search for `@media (max-width: 768px)` in CSS files

## 🖼️ Image Sizes

**Thumbnails:**
- Size: 1920x1080px (16:9 ratio)
- Format: JPG (compressed) or WebP
- Location: `assets/images/thumbnails/`

**About page photo:**
- Size: 800x1000px (4:5 ratio)
- Format: JPG
- Location: Update `about.html` line 42

## 🎯 Featured Videos

**File:** `js/video-handler.js`

Set `featured: true` for videos you want on home page.
**Recommended:** 3-4 featured videos maximum.

## 📋 Quick Find

| What to Change | File | Line |
|----------------|------|------|
| Videos | `js/video-handler.js` | 1-100 |
| Colors | `css/variables.css` | 5-15 |
| Email | `contact.html` | 89 |
| Phone | `contact.html` | 97 |
| Social links | All HTML (footer) | ~165 |
| About bio | `about.html` | 41-49 |
| Services | `services.html` | 36-116 |
| Hero video | `index.html` | 29 |
| Stats | `index.html` | 73-86 |
| Fonts | `css/variables.css` | 1, 23-24 |

## 💡 Pro Tips

1. **Always test after changes:** Open in browser and check
2. **Use "Find & Replace":** Update brand name everywhere at once
3. **Hard refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
4. **Mobile test:** Use browser DevTools (F12) responsive mode
5. **Image compression:** Use TinyPNG.com before uploading
6. **Video hosting:** Use Vimeo Pro for password-protected videos
7. **Backup:** Keep a copy before major changes
8. **Version control:** Consider using Git

## 🐛 Common Issues

**Videos not playing?**
- Check video URL format (must be embed URL)
- Verify video privacy settings

**Layout broken?**
- Hard refresh browser (Ctrl+F5)
- Check CSS file paths

**Animations not working?**
- Enable JavaScript
- Check browser console (F12) for errors

**Form not submitting?**
- Normal - it's demo only
- See README.md for EmailJS integration

---

**Need more help?** Check the full README.md or QUICKSTART.md
