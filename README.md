# Marc Manzano - Personal Website

A modern, cyber-inspired personal website showcasing professional experience in cybersecurity, cryptography, and quantum computing. Built for someone who loves computers, security, sports, and history.

## Design Philosophy

This website features a **hacker-aesthetic** with:
- **Terminal/CLI inspired interface** - Command-line windows and prompts throughout
- **Matrix background effect** - Animated falling characters (like the movie)
- **Neon cyber palette** - Cyan, purple, green, and pink accents on dark backgrounds
- **Organic shapes** - Hexagonal tags and non-rectangular elements
- **Glitch effects** - Subtle text glitching on hover
- **Monospace typography** - JetBrains Mono for that coder feel
- **No generic templates** - Custom-built with personality

## Features

✅ **Fully responsive** - Works on all devices  
✅ **Matrix background** - Animated falling characters effect  
✅ **Terminal aesthetics** - CLI-inspired UI elements  
✅ **Blog system** - Write and publish posts easily  
✅ **Animated stats** - Counter animations and scroll effects  
✅ **Fast loading** - Pure HTML/CSS/JS, no frameworks  
✅ **Dark theme** - Easy on the eyes, perfect for late-night coding  

## Technology Stack

- **Pure HTML5** - Semantic markup
- **Custom CSS3** - Modern layouts with Grid and Flexbox
- **Vanilla JavaScript** - Canvas animations, scroll effects, interactions
- **Google Fonts** - JetBrains Mono (monospace) + Space Grotesk (sans-serif)
- **No build process** - Just static files, deploy anywhere

## File Structure

```
marcmanzano.github.io/
├── index.html          # Main homepage
├── blog.html           # Blog listing page
├── style.css           # Main styles (cyber aesthetic)
├── blog-style.css      # Blog-specific styles
├── script.js           # Main JavaScript (matrix effect, animations)
├── blog-script.js      # Blog filtering and interactions
├── CNAME               # Custom domain configuration
├── blog/
│   ├── post-template.html    # Template for new posts
│   └── README.md             # Blog documentation
└── README.md           # This file
```

## Deployment

This site is hosted on **GitHub Pages** and accessible at:
- **GitHub Pages:** https://marcmanzano.github.io
- **Custom Domain:** https://marcmanzano.com

### Deploying Updates

```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push origin main

# Site updates automatically in 2-5 minutes
```

## Writing Blog Posts

See the [blog/README.md](blog/README.md) for detailed instructions on adding new blog posts.

**Quick start:**
1. Copy `blog/post-template.html` to a new file
2. Edit the content
3. Add a post card to `blog.html`
4. Commit and push!

## Customization Guide

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --neon-cyan: #00F0FF;      /* Primary accent */
    --neon-purple: #B026FF;    /* Secondary accent */
    --neon-green: #39FF14;     /* Terminal green */
    --neon-pink: #FF006E;      /* Highlight */
    --bg-primary: #0A0E27;     /* Main background */
}
```

### Update Content

**Bio & Introduction:**
- Edit `index.html` around line 50-80 (hero section)

**Experience:**
- Modify timeline items in `index.html` (around line 150-250)

**Publications:**
- Update publication cards in `index.html` (around line 350-400)

**Contact Info:**
- Edit contact section in `index.html` (around line 450)

### Disable Matrix Effect

If the animated background is too much:

```javascript
// In script.js, comment out:
// setInterval(drawMatrix, 35);
```

Or set canvas opacity to 0 in `style.css`:

```css
#matrix-canvas {
    opacity: 0; /* was 0.15 */
}
```

## Local Development

To preview changes locally:

### Option 1: Python
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Node.js
```bash
npx serve
# Visit http://localhost:3000
```

### Option 3: VS Code
Install "Live Server" extension and click "Go Live"

## Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time:** <1s on 4G
- **No external dependencies** except Google Fonts
- **Optimized animations** using CSS transforms and requestAnimationFrame

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Reduced motion support (coming soon)

## Contact

**Marc Manzano**  
📧 manzanomarc@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/marcmanzano/)  
🐦 [Twitter](https://twitter.com/marcmanzano)

## License

© 2026 Marc Manzano. All rights reserved.

---

**Built with ❤️ and a passion for cryptography, running, and clean code.**
