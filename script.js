// ============================================
// Reduced-motion preference
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Mobile Nav Toggle
// ============================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

if (navToggle && navMenu) {
    const closeMenu = () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close after tapping a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close when resizing up to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
            navToggle.focus();
        }
    });
}

// ============================================
// Stats Counter Animation
// ============================================

const animateCounter = (element) => {
    const target = parseInt(element.dataset.target);
    const suffix = (target === 15 || target === 35) ? '+' : '';

    if (prefersReducedMotion) {
        element.textContent = target + suffix;
        return;
    }

    const duration = 1800;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.querySelectorAll('.stat-number').forEach(num => animateCounter(num));
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats').forEach(section => statsObserver.observe(section));

// ============================================
// Reveal on Scroll
// ============================================

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// Active Nav Link on Scroll (throttled)
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
let scrollTicking = false;

function updateActiveNav() {
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--ink)';
        }
    });

    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(updateActiveNav);
        scrollTicking = true;
    }
}, { passive: true });

// ============================================
// Console note
// ============================================

console.log('%cMarc Manzano', 'color: #1a1d29; font-size: 20px; font-weight: 700;');
console.log('%cInterested in cryptography, security or running? Let\'s talk.', 'color: #3056ff; font-size: 13px;');
