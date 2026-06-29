# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Hari Jaiswal (AI Transformation & AI/ML Engineering Leader). No build system, bundler, or package manager — plain HTML5, CSS3, and vanilla JavaScript served directly.

## Development

Open `index.html` in a browser. No build or install step required. To serve locally with live reload, use any static server (e.g., `python3 -m http.server 8000`).

## Deployment

Deployed via GitHub Pages on the `gh-pages` branch. To deploy: merge `main` into `gh-pages` and push.

## Architecture

- **`index.html`** — Single-page app with all sections (hero/home, about, experience, projects, skills, contact). Contains SEO meta tags, Open Graph, JSON-LD structured data, and Font Awesome loaded from CDN.
- **`css/style.css`** — All base styles. Uses CSS custom properties (`:root` variables) for theming. Dark mode is handled via `[data-theme="dark"]` selector overriding the same variables.
- **`css/responsive.css`** — Media query breakpoints: 820px (tablet), 576px (mobile), 420px (extra small).
- **`js/script.js`** — All interactivity in one file: mobile menu toggle, smooth scrolling, active nav highlighting, scroll-to-top button, navbar background on scroll, scroll-down arrow, dark mode toggle (persisted in localStorage, with system-preference fallback), and IntersectionObserver-based scroll animations. There is no contact form — the contact section uses direct `mailto:` and social links.
- **`images/`** — Profile photo and assets. WebP versions used with `<picture>` fallback to JPG.
- **`resume/`** — `HariJaiswal_Resume.pdf` for the download button.
- **`misc/`** — Supporting PDFs (LinkedIn profile, etc.); not linked from the live site.
- **`robots.txt`** and **`sitemap.xml`** — SEO files pointing to the GitHub Pages URL.

## Virtual Environment

The project uses `.venv` for Python tooling isolation (e.g., local dev scripts).

- Activate: `source .venv/bin/activate`
- Install deps: `pip install -r requirements.txt`
- The `.venv/` directory is git-ignored.

## Key Conventions

- Colors, spacing, and border radii are defined as CSS custom properties in `:root` (style.css lines 2-35). Always use these variables rather than hardcoded values.
- Dark mode colors are in the `[data-theme="dark"]` block in style.css. When adding new color-dependent styles, add corresponding dark mode overrides.
- The contact section is form-free: it links directly via `mailto:` and social links, so there is no backend or form service to configure.
- External links use `target="_blank" rel="noopener noreferrer"` consistently.
- The site uses Font Awesome 6.4 for all icons (loaded from cdnjs CDN).
