# Hari Jaiswal — Portfolio

Personal portfolio website for **Hari Jaiswal**, AI Transformation & AI/ML Engineering Leader. A fast, responsive single-page site built with plain HTML5, CSS3, and vanilla JavaScript — no build system, bundler, or framework. Deployed on GitHub Pages.

## 🌐 Live Demo

[https://harijaiswal29.github.io/portfolio/](https://harijaiswal29.github.io/portfolio/)

## ✨ Features

- **Responsive design** — works across desktop, tablet, and mobile
- **Dark mode** — toggle persisted in `localStorage`, with system-preference fallback
- **Single-page layout** — smooth-scroll navigation with active-section highlighting
- **Scroll interactions** — navbar background on scroll, scroll-to-top button, scroll-down arrow, and IntersectionObserver-based reveal animations
- **Accessible navigation** — keyboard-operable mobile hamburger menu
- **SEO-ready** — meta tags, Open Graph/Twitter cards, JSON-LD structured data, `sitemap.xml`, and `robots.txt`
- **Optimized images** — WebP with `<picture>` fallback to JPG

## 📁 Project Structure

```
portfolio/
├── index.html             # Single-page app: all sections + SEO/structured data
├── css/
│   ├── style.css          # Base styles + :root theme variables + dark mode
│   └── responsive.css     # Responsive breakpoints
├── js/
│   └── script.js          # All interactivity (menu, scroll, dark mode, animations)
├── images/                # Profile photo (WebP + JPG)
├── resume/                # HariJaiswal_Resume.pdf (download button)
├── misc/                  # Supporting PDFs (not linked from the live site)
├── robots.txt             # SEO
├── sitemap.xml            # SEO
└── README.md
```

## 🎨 Sections

1. **Hero** — introduction and call-to-action buttons
2. **About** — background and positioning
3. **Experience** — roles and highlights
4. **Projects** — featured project cards
5. **Skills** — technical and transformation skill groups
6. **Contact** — direct `mailto:` and social links (no form/backend)

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, Grid, custom properties, animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4 (via cdnjs CDN)
- Git & GitHub Pages

## 🚀 Local Development

No build or install step is required.

```bash
git clone https://github.com/harijaiswal29/portfolio.git
cd portfolio

# Open directly, or serve locally:
python3 -m http.server 8000   # then visit http://localhost:8000
```

Optional Python tooling lives in a git-ignored `.venv` (`pip install -r requirements.txt`).

## 🎯 Conventions

- Colors, spacing, and radii are CSS custom properties in `:root` (see top of `css/style.css`) — use the variables rather than hardcoded values.
- Dark mode overrides live in the `[data-theme="dark"]` block; add a dark-mode override whenever you add a color-dependent style.
- External links use `target="_blank" rel="noopener noreferrer"`.

## 🌍 Deployment

The site deploys via GitHub Pages from the `gh-pages` branch. To publish changes:

```bash
# commit changes on main first, then:
git checkout gh-pages
git merge main
git push origin gh-pages
git checkout main
```

## 📱 Responsive Breakpoints

- **Desktop**: 821px and above
- **Tablet**: 577px – 820px
- **Mobile**: 421px – 576px
- **Extra small**: 420px and below

## 👤 Author

**Hari Jaiswal**

- GitHub: [@harijaiswal29](https://github.com/harijaiswal29)
- LinkedIn: [harijaiswal](https://www.linkedin.com/in/harijaiswal/)
- Portfolio: [https://harijaiswal29.github.io/portfolio/](https://harijaiswal29.github.io/portfolio/)

## 🙏 Acknowledgments

- Font Awesome for icons
