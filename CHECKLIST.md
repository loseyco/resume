# Pre-Deployment Checklist

Use this checklist before deploying your resume website to ensure everything is perfect!

## Content Updates

- [ ] Replace "pjlosey@example.com" with your actual email in `index.html`
- [ ] Update phone number (if desired)
- [ ] Add your actual photo to the About section (or remove placeholder)
- [ ] Verify all project descriptions are accurate
- [ ] Update experience dates and details
- [ ] Add actual GitHub link (if you have one)
- [ ] Customize the typewriter phrases in `script.js` if desired
- [ ] Review and update `RESUME.md` with your actual information

## Files to Add

- [ ] **resume.pdf** - Export your resume as PDF and place in root directory
- [ ] **Your photo** - Add to `images/` folder and update About section
- [ ] **Favicon** - Create favicon.ico and add to root (optional but recommended)

## Links & Contact

- [ ] All social links work correctly
- [ ] Email links use your actual email
- [ ] LinkedIn profile URL is correct
- [ ] Portfolio/project links point to actual projects (if available)
- [ ] Download resume button works (requires resume.pdf file)

## SEO & Meta

- [ ] Update sitemap.xml with current date
- [ ] Verify all meta descriptions are accurate
- [ ] Check Open Graph tags are correct
- [ ] Update robots.txt if needed

## Testing

- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Check all navigation links work
- [ ] Verify smooth scrolling works
- [ ] Test typewriter effect displays correctly
- [ ] Check animations and interactions
- [ ] Verify responsive design on all screen sizes
- [ ] Test download resume functionality

## Performance

- [ ] Run Lighthouse audit (should score 90+)
- [ ] Check page load speed
- [ ] Verify images are optimized (if added)
- [ ] Test on slow network connection

## Deployment

- [ ] Choose hosting provider (Netlify recommended)
- [ ] Upload all files
- [ ] Configure custom domain (resume.losey.co)
- [ ] Set up DNS records
- [ ] Wait for SSL certificate activation
- [ ] Verify site is accessible via HTTPS

## Post-Deployment

- [ ] Visit resume.losey.co and test everything
- [ ] Share link on LinkedIn
- [ ] Update LinkedIn profile with website link
- [ ] Add to email signature
- [ ] Submit to Google Search Console
- [ ] Share with network and recruiters!

## Optional Enhancements

- [ ] Add Google Analytics (if desired)
- [ ] Add contact form (instead of mailto links)
- [ ] Add blog section (if you write)
- [ ] Add testimonials section
- [ ] Add live project demos
- [ ] Add more project screenshots
- [ ] Add video intro (optional)

---

## Quick Customization Tips

### Change Colors
Edit `styles.css` - Look for `:root` variables at the top:
```css
--primary: #00d9ff;
--secondary: #7c3aed;
--accent: #f59e0b;
```

### Change Fonts
Edit the Google Fonts link in `index.html` head section

### Add More Projects
Copy a `.project-card` div and paste before closing `projects-grid`

### Update Skills
Edit the skills section in `index.html` - add/remove skill items

---

**Once all items are checked, you're ready to deploy! 🚀**

