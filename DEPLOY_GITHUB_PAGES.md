# GitHub Pages Deployment Guide

Your portfolio is now set up for automatic deployment to GitHub Pages! 🚀

## How It Works

This repository includes a GitHub Actions workflow that automatically:
1. ✅ Installs dependencies (`npm install`)
2. ✅ Builds the project (`npm run build`)
3. ✅ Compiles TypeScript
4. ✅ Minifies Tailwind CSS
5. ✅ Deploys to GitHub Pages

**Every time you push to the `main` branch, your site automatically updates!**

## Your Live Site

Your portfolio will be available at:
```
https://Sisti-Anjana.github.io/-HTML-CSS-Tailwind-TS-into-a-deployed-portfolio-site/
```

## First-Time Setup (One-Time)

### 1. Enable GitHub Pages in Your Repository

1. Go to: https://github.com/Sisti-Anjana/-HTML-CSS-Tailwind-TS-into-a-deployed-portfolio-site/settings
2. Scroll to **"Pages"** section (left sidebar)
3. Under **"Build and deployment"**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "gh-pages" and "/" (root)
   - Click **Save**

### 2. Wait for Initial Deployment

1. Go to: https://github.com/Sisti-Anjana/-HTML-CSS-Tailwind-TS-into-a-deployed-portfolio-site/actions
2. Watch for the workflow to complete (usually takes 1-2 minutes)
3. You should see a green checkmark ✅

### 3. Your Site is Live!

Visit: `https://Sisti-Anjana.github.io/-HTML-CSS-Tailwind-TS-into-a-deployed-portfolio-site/`

## Making Updates

### To Update Your Portfolio:

```bash
# 1. Edit index.html to customize your content
# 2. Commit and push
git add .
git commit -m "Update portfolio content"
git push
```

That's it! GitHub Actions will automatically:
- Build your project
- Deploy to GitHub Pages
- Your changes go live in 1-2 minutes

### What Gets Updated:

- ✅ All HTML changes in `index.html`
- ✅ All style changes in `style.css`
- ✅ All script changes in `script.ts` (auto-compiled)
- ✅ Any customizations to `tailwind.config.js`

## Monitoring Deployments

### Check Deployment Status:
1. Go to **Actions** tab: https://github.com/Sisti-Anjana/-HTML-CSS-Tailwind-TS-into-a-deployed-portfolio-site/actions
2. See all workflow runs
3. Click any run to see build logs

### Troubleshooting:

If the workflow shows ❌ error:
1. Click on the failed workflow
2. Review the error in the logs
3. Most common issues:
   - Syntax errors in TypeScript
   - Missing dependencies
   - Invalid Tailwind CSS

## File Structure

```
portfolio/
├── index.html                 # Your main page
├── style.css                  # Custom styles + Tailwind directives
├── script.ts                  # TypeScript (auto-compiled to dist/script.js)
├── tailwind.config.js         # Tailwind configuration
├── package.json               # Dependencies and build scripts
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow (auto-deployment)
└── dist/                      # Build output (auto-generated)
    ├── style.css              # Minified Tailwind CSS
    └── script.js              # Compiled JavaScript
```

## Using a Custom Domain (Optional)

If you have your own domain (e.g., `myportfolio.com`):

1. Edit `.github/workflows/deploy.yml`
2. Uncomment and update the `cname:` line:
   ```yaml
   cname: myportfolio.com
   ```
3. Configure your domain's DNS to point to GitHub Pages
4. See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Useful GitHub Pages Docs

- [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Key Benefits

✨ **Automatic Deployments** - No manual steps needed  
🔄 **Always Up-to-Date** - Changes deploy automatically on push  
🆓 **Completely Free** - Hosted on GitHub's infrastructure  
🔒 **Secure** - HTTPS enabled by default  
⚡ **Fast** - Content delivered via GitHub's CDN  
📊 **Analytics Ready** - Can add Google Analytics easily  

---

Your portfolio is now production-ready and automatically deployed! 🎉

**Next Step:** Go to your repository settings and enable GitHub Pages to see your site live.
