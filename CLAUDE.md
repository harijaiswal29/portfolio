# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Hari Jaiswal (ML Engineer & AI Researcher). No build system, bundler, or package manager — plain HTML5, CSS3, and vanilla JavaScript served directly.

## Development

Open `index.html` in a browser. No build or install step required. To serve locally with live reload, use any static server (e.g., `python3 -m http.server 8000`).

## Deployment

Deployed via GitHub Pages on the `gh-pages` branch. To deploy: merge `main` into `gh-pages` and push.

## Architecture

- **`index.html`** — Single-page app with all sections (hero, about, projects, skills, contact). Contains SEO meta tags, Open Graph, JSON-LD structured data, and Font Awesome loaded from CDN.
- **`css/style.css`** — All base styles. Uses CSS custom properties (`:root` variables) for theming. Dark mode is handled via `[data-theme="dark"]` selector overriding the same variables.
- **`css/responsive.css`** — Media query breakpoints: 820px (tablet), 576px (mobile), 420px (extra small).
- **`js/script.js`** — All interactivity in one file: mobile menu toggle, smooth scrolling, active nav highlighting, scroll-to-top, contact form submission (Formspree via fetch), dark mode toggle (persisted in localStorage), and IntersectionObserver-based scroll animations.
- **`images/`** — Profile photo and assets. WebP versions used with `<picture>` fallback to JPG.
- **`resume/`** — PDF resume for download button.
- **`robots.txt`** and **`sitemap.xml`** — SEO files pointing to the GitHub Pages URL.

## Virtual Environment

The project uses `.venv` for Python tooling isolation (e.g., local dev scripts).

- Activate: `source .venv/bin/activate`
- Install deps: `pip install -r requirements.txt`
- The `.venv/` directory is git-ignored.

## Key Conventions

- Colors, spacing, and border radii are defined as CSS custom properties in `:root` (style.css lines 2-35). Always use these variables rather than hardcoded values.
- Dark mode colors are in the `[data-theme="dark"]` block in style.css. When adding new color-dependent styles, add corresponding dark mode overrides.
- The contact form action currently has a placeholder `YOUR_FORM_ID` — it needs a real Formspree ID to work.
- External links use `target="_blank" rel="noopener noreferrer"` consistently.
- The site uses Font Awesome 6.4 for all icons (loaded from cdnjs CDN).
