# Deployment Guide for resume.losey.co

This guide will help you deploy your resume website to resume.losey.co

## Quick Deploy Options

### 🚀 Netlify (Recommended - Easiest)

1. **Sign up** at [netlify.com](https://netlify.com) (free account)
2. **Drag & Drop** your project folder onto Netlify
3. **Add Custom Domain:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `resume.losey.co`
   - Follow DNS configuration instructions
4. **Configure DNS** (at your domain registrar):
   - Add CNAME record: `resume` → `your-site.netlify.app`
   - Or A record: Point to Netlify's IP (they'll provide it)
5. **Done!** Your site is live at resume.losey.co

**Netlify Benefits:**
- ✅ Free SSL certificate (HTTPS)
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments from Git
- ✅ Free subdomain option

---

### ⚡ Vercel (Fast & Modern)

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```
3. **Deploy:**
   ```bash
   vercel
   ```
4. **Add Custom Domain:**
   - Go to project settings → Domains
   - Add `resume.losey.co`
   - Configure DNS as instructed
5. **Done!**

**Vercel Benefits:**
- ✅ Lightning fast
- ✅ Free SSL
- ✅ Git integration
- ✅ Serverless ready

---

### 🐙 GitHub Pages

1. **Create repository** on GitHub
2. **Upload files** to repository
3. **Go to Settings → Pages**
4. **Select source:** Main branch / root folder
5. **Custom Domain:**
   - Add `resume.losey.co` to custom domain field
   - Create CNAME file in repository with: `resume.losey.co`
   - Configure DNS at your registrar
6. **Done!**

**GitHub Pages Benefits:**
- ✅ Free hosting
- ✅ Free SSL (via Let's Encrypt)
- ✅ Easy updates via Git push

---

## DNS Configuration

### If using Netlify/Vercel:

**Option 1: CNAME Record (Recommended)**
```
Type: CNAME
Name: resume
Value: your-site.netlify.app (or vercel equivalent)
TTL: 3600
```

**Option 2: A Record**
```
Type: A
Name: resume
Value: [IP provided by hosting service]
TTL: 3600
```

### DNS Provider Steps:

1. Log into your domain registrar (where you bought losey.co)
2. Find DNS settings / DNS management
3. Add the appropriate record (CNAME or A)
4. Wait for propagation (usually 5-30 minutes)

---

## Local Testing

Before deploying, test locally:

### Option 1: Simple HTTP Server
```bash
# Python (if installed)
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

### Option 2: Live Server (VS Code)
- Install "Live Server" extension in VS Code
- Right-click `index.html` → "Open with Live Server"

---

## Post-Deployment Checklist

- [ ] Visit resume.losey.co to verify it's live
- [ ] Check HTTPS is working (SSL certificate)
- [ ] Test on mobile devices
- [ ] Test all links work
- [ ] Verify download button works (need resume.pdf)
- [ ] Check social links point correctly
- [ ] Test contact form (if added)
- [ ] Run Lighthouse audit for performance
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn!

---

## Performance Optimization

Your site is already optimized, but here are extra tips:

1. **Add resume.pdf** - Place in root directory
2. **Add your photo** - Update About section
3. **Enable compression** - Most hosts do this automatically
4. **Cache headers** - Configure in hosting settings
5. **CDN** - Netlify/Vercel provide this automatically

---

## Troubleshooting

### Site not loading?
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records are correct
- Check hosting service status
- Clear browser cache

### SSL Certificate issues?
- Netlify/Vercel provide free SSL automatically
- May take a few hours to activate
- Check hosting dashboard for SSL status

### Images not showing?
- Check file paths are correct
- Ensure images are in project folder
- Use relative paths, not absolute

---

## Need Help?

- Check hosting provider documentation
- Contact your domain registrar for DNS help
- Reach out via LinkedIn: [linkedin.com/in/pjlosey](https://www.linkedin.com/in/pjlosey)

---

**Good luck with your deployment! 🚀**

