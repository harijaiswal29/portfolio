# Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Deployed on GitHub Pages.

## 🌐 Live Demo

Visit the live site: [https://harijaiswal29.github.io/portfolio/](https://harijaiswal29.github.io/portfolio/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations and transitions
- **Single Page Application**: All sections on one scrollable page for easy navigation
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Active section highlighting
  - Scroll-to-top button
  - Form validation
  - Hover effects and animations

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Desktop and base styles
│   └── responsive.css     # Mobile and tablet responsive styles
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Image assets folder
└── README.md              # Project documentation
```

## 🎨 Sections

1. **Header/Navigation**: Sticky navbar with smooth scroll links
2. **Hero Section**: Eye-catching introduction with CTA buttons
3. **About**: Personal introduction and background
4. **Projects**: Showcase of featured projects with descriptions
5. **Skills**: Display of technical skills and technologies
6. **Contact**: Contact form and social links
7. **Footer**: Copyright and social media links

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Git & GitHub Pages

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Git installed on your machine
- A GitHub account

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/harijaiswal29/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser:
```bash
# On Linux/Mac
open index.html

# On Windows
start index.html

# Or simply double-click the index.html file
```

3. Make your changes and test locally before deploying

## 📝 Customization Guide

### 1. Personal Information

Replace placeholder content in [index.html](index.html):

- **Line 9**: Update `<title>` with your name
- **Line 23**: Replace "YourName" in the logo
- **Line 40-47**: Update hero section with your name and tagline
- **Line 63-90**: Add your bio and contact information
- **Lines 99-199**: Update project details, descriptions, and links
- **Lines 208-284**: Customize your skills
- **Lines 295-350**: Update contact information and social links

### 2. Profile Photo

1. Add your profile photo to the `images/` folder
2. In [index.html](index.html), replace the placeholder div (around line 63) with:
```html
<div class="about-image">
    <img src="images/your-photo.jpg" alt="Your Name">
</div>
```

### 3. Project Images

1. Add project screenshots to the `images/` folder
2. Replace the placeholder divs in project cards with:
```html
<div class="project-image">
    <img src="images/project1.jpg" alt="Project Name">
</div>
```

### 4. Colors and Styling

Customize colors in [css/style.css](css/style.css) by modifying CSS variables (lines 2-20):

```css
:root {
    --primary-color: #2563eb;    /* Your primary color */
    --secondary-color: #1e40af;  /* Your secondary color */
    --accent-color: #3b82f6;     /* Your accent color */
    /* ... other variables */
}
```

### 5. Contact Form

The contact form currently shows a demo alert. To make it functional:

1. **Option 1 - FormSpree**:
   - Sign up at [formspree.io](https://formspree.io/)
   - Replace the form action in index.html:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option 2 - EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Follow their integration guide
   - Update the JavaScript in script.js

3. **Option 3 - Custom Backend**:
   - Create your own API endpoint
   - Update the form submission handler in script.js

## 🌍 Deployment to GitHub Pages

The portfolio is configured to deploy via the `gh-pages` branch.

### Automatic Deployment (Already Set Up)

The repository is already configured for GitHub Pages. Any push to the `gh-pages` branch will automatically update the live site.

### Manual Deployment

If you need to redeploy:

```bash
# Make sure all changes are committed to main branch
git add .
git commit -m "Update portfolio"

# Push to gh-pages branch
git checkout gh-pages
git merge main
git push origin gh-pages

# Return to main branch
git checkout main
```

### Verify Deployment

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Ensure source is set to `gh-pages` branch
4. Visit your live site at: `https://harijaiswal29.github.io/portfolio/`

## 📱 Responsive Breakpoints

- **Desktop**: 821px and above
- **Tablet**: 577px - 820px
- **Mobile**: 576px and below
- **Extra Small**: 420px and below

## 🎯 Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/harijaiswal29/portfolio/issues).

## 👤 Author

**Your Name**

- GitHub: [@harijaiswal29](https://github.com/harijaiswal29)
- Portfolio: [https://harijaiswal29.github.io/portfolio/](https://harijaiswal29.github.io/portfolio/)

## 🙏 Acknowledgments

- Font Awesome for icons
- Inspired by modern portfolio designs
- Built following the [HoffsTech tutorial](https://hoffstech.com/2023/03/how-to-create-a-github-portfolio/)

---

⭐ Star this repo if you find it helpful!
