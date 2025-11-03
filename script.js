/**
 * Typewriter Effect
 * Creates an animated typing effect in the hero section
 */
const typewriterElement = document.getElementById('typewriter');
const phrases = [
    'Electronics Engineer',
    'React & Modern Web Developer',
    'AI-Enhanced Developer',
    'Available for Remote Work',
    'Racing Engineer',
    'Looking for New Opportunities'
];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    if (!typewriterElement) return;
    
    const current = phrases[currentPhrase];
    
    if (isDeleting) {
        typewriterElement.textContent = current.substring(0, currentChar - 1);
        currentChar--;
        typingSpeed = 50;
    } else {
        typewriterElement.textContent = current.substring(0, currentChar + 1);
        currentChar++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && currentChar === current.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting next phrase
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter effect with error handling
if (typewriterElement) {
    typeWriter();
}

/**
 * Navbar Scroll Effect
 * Adds visual feedback when scrolling past hero section
 */
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || window.scrollY;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

/**
 * Smooth Scroll for Anchor Links
 * Provides smooth scrolling navigation with offset for fixed navbar
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's just "#" or empty
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Intersection Observer for Scroll Animations
 * Animates elements into view as user scrolls for engaging UX
 */
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .highlight-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

/**
 * Skill Bars Animation
 * Animates skill bars filling on scroll into view
 */
const skillBars = document.querySelectorAll('.skill-bar');
if (skillBars.length > 0 && 'IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                // Use requestAnimationFrame for smoother animation
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

/**
 * Parallax Effect for Hero Background Orbs
 * Creates depth effect on scroll for visual interest
 */
const orbs = document.querySelectorAll('.gradient-orb');
if (orbs.length > 0) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || window.scrollY;
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
}

/**
 * Active Navigation Highlighting
 * Highlights current section in navigation based on scroll position
 */
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const scrollY = (window.pageYOffset || window.scrollY) + 100;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

if (sections.length > 0) {
    window.addEventListener('scroll', highlightNavigation, { passive: true });
    highlightNavigation(); // Call on load
}

/**
 * Copy Email to Clipboard
 * Adds click-to-copy functionality for email links
 */
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        if (navigator.clipboard && navigator.clipboard.writeText) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                // Show temporary feedback
                const originalText = link.textContent;
                link.textContent = 'Email Copied!';
                setTimeout(() => {
                    link.textContent = originalText;
                }, 2000);
            }).catch(() => {
                // Fallback: allow default mailto behavior if clipboard fails
                window.location.href = `mailto:${email}`;
            });
        }
    });
});

// Update copyright year dynamically
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Console easter egg for developers
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cWant to see the code? Check out the source!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cLooking for an amazing engineer? You found one! 🚀', 'font-size: 14px; color: #00d9ff;');
console.log('%cGitHub: https://github.com/loseyco/resume', 'font-size: 12px; color: #71717a;');

