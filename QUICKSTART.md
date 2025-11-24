# Quick Start Guide - marvinfilm

Get your portfolio up and running in 5 minutes!

## Step 1: Open the Website

Simply open `index.html` in your web browser. That's it - the site works immediately!

For a better experience, use a local server (optional but recommended):

```bash
# Python
python -m http.server 8000

# Then open: http://localhost:8000
```

## Step 2: Add Your Videos (5 minutes)

Open `js/video-handler.js` and update the `portfolioVideos` array:

```javascript
{
  id: 1,
  title: "Your Amazing Project",
  thumbnail: "https://images.pexels.com/YOUR-IMAGE.jpg",
  videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
  category: "commercial",
  featured: true,
  description: "Tell us about this project",
  client: "Client Name",
  year: "2024"
}
```

### Where to Get Video URLs:

**Vimeo:**
1. Upload your video to Vimeo
2. Go to video settings
3. Copy the video ID from the URL
4. Use format: `https://player.vimeo.com/video/VIDEO_ID`

**YouTube:**
1. Upload to YouTube
2. Click Share > Embed
3. Use format: `https://www.youtube.com/embed/VIDEO_ID`

## Step 3: Update Your Info (2 minutes)

### Contact Details (`contact.html` - lines 89-107):
```html
<p><a href="mailto:your@email.com">your@email.com</a></p>
<p><a href="tel:+15550001234">+1 (555) 000-1234</a></p>
<p>Your City, State</p>
```

### Social Media (all HTML files footer):
```html
<a href="https://instagram.com/yourprofile" class="social-link">IG</a>
<a href="https://vimeo.com/yourprofile" class="social-link">VM</a>
<a href="https://youtube.com/@yourprofile" class="social-link">YT</a>
<a href="https://linkedin.com/in/yourprofile" class="social-link">IN</a>
```

## Step 4: Customize Colors (Optional)

Edit `css/variables.css` if you want different colors:

```css
:root {
  --color-light-grey: #808080;  /* Change accent color */
  --gradient-accent: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR 100%);
}
```

## Step 5: Deploy

### Free Options:

**Netlify (Easiest):**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `marvinfilm` folder
3. Done! Your site is live

**GitHub Pages (Free):**
1. Create GitHub repository
2. Push your code
3. Enable Pages in Settings
4. Live at: `username.github.io/repo-name`

## Common Tasks

### Add a New Video
1. Open `js/video-handler.js`
2. Copy an existing video object
3. Paste at the end of the array
4. Update: id (must be unique), title, thumbnail, videoUrl, category, etc.
5. Save and refresh browser

### Change Hero Video
Edit `index.html` line 29:
```html
<source src="YOUR_VIDEO.mp4" type="video/mp4">
```

### Update About Text
Edit `about.html` lines 41-74 with your story

### Change Services
Edit `services.html` lines 36-116 with your offerings

## Need Help?

### Videos Not Showing?
- Check the video URL format
- Make sure video is public on Vimeo/YouTube
- Open browser console (F12) to check for errors

### Site Looks Different?
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

### Form Not Working?
- It's set up with demo functionality
- See README.md for EmailJS or Formspree integration

## File Structure Reference

```
marvinfilm/
├── index.html           # Home page - Your starting point
├── portfolio.html       # Shows all your videos
├── about.html          # Your story
├── services.html       # What you offer
├── contact.html        # Contact form
├── css/                # All styling
├── js/
│   └── video-handler.js  # ← EDIT THIS to add videos
└── assets/
    └── images/         # Put your images here
```

## Pro Tips

1. **Use High-Quality Thumbnails**: 1920x1080px, compressed JPG
2. **Set 3-4 Videos as Featured**: Shows on home page
3. **Host Videos Externally**: Use Vimeo or YouTube
4. **Test on Mobile**: Open on your phone to check responsiveness
5. **Keep Loading Fast**: Compress images before uploading

## Next Steps

1. ✅ Site is running
2. ✅ Added your videos
3. ✅ Updated contact info
4. ⬜ Replace placeholder images with your photos
5. ⬜ Customize About page
6. ⬜ Update Services
7. ⬜ Deploy to live site
8. ⬜ Share with the world!

---

**That's it! You now have a professional portfolio website.**

For detailed customization, see the full `README.md` file.
