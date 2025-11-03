# GitHub Repository Setup Guide

This guide will help you push your resume website to GitHub and deploy it using GitHub Pages.

## Quick Setup Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Professional resume website"
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/loseyco/resume.git
git branch -M main
```

### 3. Push to GitHub

```bash
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository: [github.com/loseyco/resume](https://github.com/loseyco/resume)
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### 5. Wait for Deployment

- GitHub Pages will build and deploy your site automatically
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's done
- Your site will be live at: `https://loseyco.github.io/resume`

### 6. Custom Domain (Optional)

To use `resume.losey.co`:

1. In the same **Pages** settings, scroll to **Custom domain**
2. Enter: `resume.losey.co`
3. Click **Save**
4. Configure DNS at your domain registrar:
   - Type: **CNAME**
   - Name: **resume**
   - Value: **loseyco.github.io**
5. Wait for DNS propagation (5-30 minutes)
6. GitHub will automatically set up SSL/HTTPS

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site whenever you push changes to the main branch.

**How it works:**
- Push changes → GitHub Actions runs → Site updates automatically

## File Structure

```
resume/
├── index.html          # Main website file
├── styles.css          # All styling
├── script.js           # Interactive features
├── RESUME.md           # Markdown resume
├── README.md           # This file
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── .nojekyll           # GitHub Pages config
└── .github/
    └── workflows/
        └── deploy.yml   # Auto-deploy workflow
```

## Updating Your Site

1. Make changes to your files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update resume content"
   git push
   ```
3. GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes)

## Troubleshooting

### Site not updating?
- Check GitHub Actions tab for errors
- Wait 1-2 minutes for build to complete
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

### Custom domain not working?
- Verify DNS settings at your registrar
- Wait 24-48 hours for full propagation
- Check GitHub Pages settings shows your domain

### 404 Error?
- Make sure `index.html` is in the root folder
- Verify branch is set to "main" in Pages settings
- Check `.nojekyll` file exists (prevents Jekyll processing)

## Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- Repository: https://github.com/loseyco/resume

---

**Your site will be live at:** `https://loseyco.github.io/resume`  
**Or with custom domain:** `https://resume.losey.co` (after DNS setup)

