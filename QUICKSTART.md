# Quick Start Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Development Mode
```bash
npm run watch
```
Then open `index.html` in your browser or use a local server.

## 3. Build for Production
```bash
npm run build
```

## 4. Deploy
Choose one of the deployment options below:

### GitHub Pages (Easiest for Personal Portfolios)
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create a repo named <username>.github.io on GitHub
git remote add origin https://github.com/<username>/<username>.github.io.git
git branch -M main
git push -u origin main
```
Your site will be live at `https://<username>.github.io`

### Vercel (Recommended for Frequent Updates)
1. Push code to GitHub
2. Go to vercel.com → Import Project
3. Select your GitHub repository
4. Click Deploy

### Netlify (Alternative)
1. Push code to GitHub
2. Go to netlify.com → New site from Git
3. Connect GitHub and select repository
4. Build command: `npm run build`
5. Deploy

## 5. Customize Your Portfolio

Edit `index.html`:
- Change "Your Name" to your actual name
- Update project descriptions
- Add your GitHub, LinkedIn, Twitter links
- Update skills and technologies
- Modify the emoji avatars

Edit `tailwind.config.js`:
- Customize colors
- Change fonts

## Project Structure
- `index.html` - Main page with all sections
- `style.css` - Custom styles + Tailwind directives
- `script.ts` - Interactive features (mobile menu, form validation, smooth scroll)
- `dist/` - Build output (generated after running `npm run build`)

## Tips
- Use `npm run watch` during development
- Run `npm run build` before deployment
- Test locally before deploying
- Keep your original files backed up in version control

Enjoy your new portfolio! 🚀
