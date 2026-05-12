# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, Tailwind CSS, and TypeScript.

## Features

✨ Modern, responsive design with Tailwind CSS  
📱 Mobile-friendly navigation  
🎨 Smooth animations and transitions  
📝 Contact form with validation  
🔧 TypeScript for type-safe interactivity  
⚡ Fast performance with optimized assets  
🌐 Ready for deployment  

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server with auto-rebuild:

```bash
npm run watch
```

This will:
- Watch for CSS changes and rebuild with Tailwind
- Watch for TypeScript changes and compile

### Build

Create optimized production files:

```bash
npm run build
```

This generates:
- `dist/style.css` - Minified Tailwind CSS
- `dist/script.js` - Compiled and optimized TypeScript

## Customization

### Personal Information

Edit `index.html` and replace:
- "Your Name" with your actual name
- "👨‍💻" emoji with your preferred avatar
- Social media links (GitHub, LinkedIn, Twitter)
- Project descriptions and links
- Skills and technologies

### Colors

Modify the gradient colors in:
- `index.html` - Update class names like `from-blue-600 to-purple-600`
- `tailwind.config.js` - Add custom color schemes

### Fonts

Update `tailwind.config.js` to use different Google Fonts or system fonts

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository named `your-username.github.io`
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io
git push -u origin main
```
3. Your site will be live at `https://your-username.github.io`

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Your site will be live with automatic deployments on every push

### Option 3: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.` (root, since index.html is in root)
6. Deploy

### Option 4: Traditional Hosting

For traditional web hosting (cPanel, etc.):
1. Run `npm run build`
2. Upload the following files to your hosting:
   - `index.html`
   - `dist/` folder (CSS and JS)
3. Your site is live!

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Tailwind CSS + custom styles
├── script.ts           # TypeScript interactivity
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
├── .gitignore         # Git ignore file
└── dist/              # Build output (CSS & JS)
    ├── style.css
    └── script.js
```

## Features Explained

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Works seamlessly on all devices

### Smooth Animations
- Fade-in effects on scroll
- Hover transitions on interactive elements
- Smooth scrolling between sections

### TypeScript Benefits
- Type safety for better code quality
- IDE autocomplete and better error detection
- Easy to extend with new features

### Contact Form
- Client-side validation
- Email format checking
- Success notification feedback

## Performance Tips

- The CSS is automatically purged to only include used classes
- TypeScript is compiled and minified for production
- Consider adding image optimization tools for any images you add

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use this template for your portfolio

## Support

For issues or questions:
1. Check the code comments
2. Review the Tailwind CSS documentation
3. Consult TypeScript documentation

---

Made with ❤️ using HTML, CSS, TypeScript & Tailwind
