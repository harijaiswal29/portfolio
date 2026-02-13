// ========== Mobile Menu Toggle ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
}

// Toggle mobile menu
hamburger.addEventListener('click', toggleMenu);

// Keyboard support for hamburger
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ========== Smooth Scrolling ==========
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Active Navigation Highlighting ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== Scroll to Top Button ==========
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Contact Form (Formspree) ==========
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

function showFormStatus(type, message) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
    }, 5000);
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        showFormStatus('error', 'Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormStatus('error', 'Please enter a valid email address.');
        return;
    }

    // Check if Formspree ID is configured
    const formAction = contactForm.getAttribute('action');
    if (formAction.includes('YOUR_FORM_ID')) {
        showFormStatus('error', 'Contact form is not yet configured. Please set up a Formspree form ID.');
        return;
    }

    // Submit via fetch
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('loading');

    try {
        const response = await fetch(formAction, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showFormStatus('success', 'Thank you! Your message has been sent.');
            contactForm.reset();
        } else {
            showFormStatus('error', 'Something went wrong. Please try again.');
        }
    } catch (error) {
        showFormStatus('error', 'Network error. Please check your connection and try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('loading');
    }
});

// ========== Navbar Background on Scroll ==========
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--header-bg-scroll').trim();
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--header-bg').trim();
    }
});

// ========== Scroll Down Arrow ==========
const scrollDownBtn = document.querySelector('.scroll-down a');

if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');

        if (aboutSection) {
            const headerOffset = 80;
            const elementPosition = aboutSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// ========== Animation on Scroll ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== Close mobile menu when clicking outside ==========
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// ========== Dark Mode Toggle ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Initialize theme from localStorage or system preference
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }
})();

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ========== Console Welcome Message ==========
console.log('%c Welcome to my portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #6b7280; font-size: 14px;');
