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

/**
 * Interactive Code Output
 * Simulates code execution in the hero code window
 */
const codeOutput = document.getElementById('code-output');
if (codeOutput) {
    // Clear initial loading text
    codeOutput.innerHTML = '';
    
    const outputLines = [
        { delay: 800, text: 'buildAmazingThings(professional);', type: 'command' },
        { delay: 400, text: 'Building amazing things...', type: 'process' },
        { delay: 400, text: '✓ Portfolio website created', type: 'success' },
        { delay: 400, text: '✓ Resume optimized', type: 'success' },
        { delay: 400, text: '✓ Ready for opportunities', type: 'success' },
        { delay: 400, text: '✓ Success! Professional is ready to build.', type: 'final' }
    ];
    
    let currentLine = 0;
    let accumulatedDelay = 0;
    
    function showNextLine() {
        if (currentLine < outputLines.length) {
            const line = outputLines[currentLine];
            accumulatedDelay += line.delay;
            
            setTimeout(() => {
                const outputLine = document.createElement('div');
                outputLine.className = 'output-line';
                
                if (line.type === 'command') {
                    outputLine.innerHTML = `<span class="output-prompt">$</span> <span class="output-command">${line.text}</span>`;
                } else if (line.type === 'final') {
                    outputLine.innerHTML = `<span class="output-success">${line.text}</span>`;
                } else if (line.type === 'process') {
                    outputLine.innerHTML = `<span class="output-prompt">></span> <span class="output-text">${line.text}</span>`;
                } else {
                    outputLine.innerHTML = `<span class="output-prompt">></span> <span class="output-success">${line.text}</span>`;
                }
                
                codeOutput.appendChild(outputLine);
                codeOutput.scrollTop = codeOutput.scrollHeight;
                currentLine++;
                showNextLine();
            }, line.delay);
        }
    }
    
    // Start animation after a brief delay
    setTimeout(showNextLine, 1000);
}

/**
 * Native Share Feature
 * Uses Web Share API to share resume via OS-native share dialog
 */
const shareButton = document.getElementById('share-button');
if (shareButton && navigator.share) {
    shareButton.addEventListener('click', async () => {
        const shareData = {
            title: 'PJ Losey - Electronics Engineer, Coder, Manager',
            text: 'Check out my resume - 20+ years of experience across electronics engineering, software development, and racing. Available for remote work and freelance projects.',
            url: window.location.href
        };
        
        try {
            await navigator.share(shareData);
            // Optional: Show success feedback
            const originalText = shareButton.innerHTML;
            shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Shared!';
            shareButton.classList.add('shared');
            setTimeout(() => {
                shareButton.innerHTML = originalText;
                shareButton.classList.remove('shared');
            }, 2000);
        } catch (err) {
            // User cancelled or share failed - do nothing
            if (err.name !== 'AbortError') {
                console.log('Share failed:', err);
            }
        }
    });
} else if (shareButton) {
    // Fallback: Copy to clipboard if Web Share API not available
    shareButton.addEventListener('click', () => {
        const url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                const originalText = shareButton.innerHTML;
                shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Link Copied!';
                shareButton.classList.add('shared');
                setTimeout(() => {
                    shareButton.innerHTML = originalText;
                    shareButton.classList.remove('shared');
                }, 2000);
            }).catch(() => {
                // Fallback to opening email
                window.location.href = `mailto:?subject=Check out this resume&body=Check out this resume: ${url}`;
            });
        } else {
            // Final fallback: open email
            window.location.href = `mailto:?subject=Check out this resume&body=Check out this resume: ${url}`;
        }
    });
}

/**
 * Photo Resume Carousel
 * Randomly cycles through photos from local photos folder
 */
const carouselContainer = document.getElementById('carousel-container');
const carouselIndicators = document.getElementById('carousel-indicators');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

// Load photos from local folder - dynamically generated
// Photos will be loaded from the photos/ folder
async function loadPhotos() {
    // Wait a moment for photo-list.js to load if it exists
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Try to load from generated photo-list.js if it exists
    if (typeof photoFiles !== 'undefined' && photoFiles && photoFiles.length > 0) {
        console.log(`Loaded ${photoFiles.length} photos from photo-list.js`);
        return photoFiles;
    }
    
    // No photos found
    console.log('No photos found - download photos and run download_photos.py');
    return [];
}

// Photo URLs - will be populated from photos folder
// Run download_photos.py after adding photos to generate photo-list.js
let photoUrls = [];

let currentSlide = 0;
let autoPlayInterval = null;

// Shuffle photos for random display
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load photos and initialize carousel
async function initializePhotoCarousel() {
    photoUrls = await loadPhotos();
    
    // If no photos found, show placeholder message
    if (photoUrls.length === 0) {
        if (carouselContainer) {
            carouselContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; padding: 2rem; text-align: center; color: var(--text-secondary);">
                    <p style="margin-bottom: 1rem;">Photos will appear here once downloaded.</p>
                    <p style="font-size: 0.875rem;">See PHOTO_DOWNLOAD_INSTRUCTIONS.md for setup.</p>
                    <a href="https://photos.app.goo.gl/xchprn5PxKr3D5fn6" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 1rem;">View Photo Album</a>
                </div>
            `;
        }
        return;
    }
    
    const shuffledPhotos = shuffleArray(photoUrls);
    initCarousel(shuffledPhotos);
}

function initCarousel(shuffledPhotos) {
    if (!carouselContainer || !shuffledPhotos || shuffledPhotos.length === 0) return;
    
    // Clear existing content
    carouselContainer.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    // Create slides
    shuffledPhotos.forEach((url, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${url}" alt="Photo ${index + 1}" loading="lazy">`;
        carouselContainer.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });
    
    // Setup navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }
    
    // Auto-play carousel (changes every 5 seconds)
    startAutoPlay();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (slides.length === 0) return;
    
    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Update active slide
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset auto-play
    startAutoPlay();
}

function startAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
    
    autoPlayInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

// Pause auto-play on hover
const photoCarousel = document.getElementById('photo-carousel');
if (photoCarousel) {
    photoCarousel.addEventListener('mouseenter', () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    });
    
    photoCarousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// Initialize carousel when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePhotoCarousel);
} else {
    initializePhotoCarousel();
}

// Console easter egg for developers
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cWant to see the code? Check out the source!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cLooking for an amazing engineer? You found one! 🚀', 'font-size: 14px; color: #00d9ff;');
console.log('%cGitHub: https://github.com/loseyco/resume', 'font-size: 12px; color: #71717a;');

