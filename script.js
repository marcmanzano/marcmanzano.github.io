// ============================================
// Matrix Background Effect
// ============================================

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00F0FF';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Matrix animation disabled per user request
// setInterval(drawMatrix, 35);

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Stats Counter Animation
// ============================================

const animateCounter = (element) => {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + ((target === 15 || target === 35) ? '+' : '');
        }
    };

    updateCounter();
};

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(num => animateCounter(num));
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats').forEach(section => {
    statsObserver.observe(section);
});

// ============================================
// Timeline Animation
// ============================================

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// ============================================
// Publication Cards Animation
// ============================================

const publicationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.publication-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    publicationObserver.observe(card);
});

// ============================================
// Active Nav Link on Scroll
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#00F0FF';
        }
    });
});

// ============================================
// Terminal Typing Effect
// ============================================

const terminalOutput = document.querySelector('.typing-effect');
if (terminalOutput) {
    const text = terminalOutput.textContent;
    terminalOutput.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            terminalOutput.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1000);
}

// ============================================
// Glitch Effect on Hover - DISABLED
// ============================================

// Glitch animation disabled per user request
// const glitchElements = document.querySelectorAll('.glitch');
// glitchElements.forEach(element => {
//     element.addEventListener('mouseenter', () => {
//         element.style.animation = 'glitch 0.3s infinite';
//     });
//
//     element.addEventListener('mouseleave', () => {
//         element.style.animation = 'glitch 3s infinite';
//     });
// });

// ============================================
// Parallax Effect for Terminal Windows
// ============================================

document.addEventListener('mousemove', (e) => {
    const terminals = document.querySelectorAll('.terminal-window');
    terminals.forEach(terminal => {
        const rect = terminal.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
            const moveX = (x - 0.5) * 20;
            const moveY = (y - 0.5) * 20;
            terminal.style.transform = `perspective(1000px) rotateY(${moveX * 0.1}deg) rotateX(${-moveY * 0.1}deg)`;
        } else {
            terminal.style.transform = '';
        }
    });
});

// ============================================
// Cursor Trail Effect (Subtle)
// ============================================

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.cursor-circle');

if (circles.length === 0 && window.innerWidth > 768) {
    for (let i = 0; i < 12; i++) {
        const circle = document.createElement('div');
        circle.className = 'cursor-circle';
        circle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 240, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.2s ease;
        `;
        document.body.appendChild(circle);
    }
}

const cursorCircles = document.querySelectorAll('.cursor-circle');

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCursor() {
    let x = coords.x;
    let y = coords.y;

    cursorCircles.forEach((circle, index) => {
        circle.style.left = x - 2 + 'px';
        circle.style.top = y - 2 + 'px';
        circle.style.transform = `scale(${(cursorCircles.length - index) / cursorCircles.length})`;

        const nextCircle = cursorCircles[index + 1] || cursorCircles[0];
        x += (nextCircle.offsetLeft - x) * 0.3;
        y += (nextCircle.offsetTop - y) * 0.3;
    });

    requestAnimationFrame(animateCursor);
}

if (window.innerWidth > 768) {
    animateCursor();
}

// ============================================
// Console Easter Egg
// ============================================

console.log('%c🔐 Marc Manzano - Cybersecurity Portfolio', 'color: #00F0FF; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repo!', 'color: #B026FF; font-size: 14px;');
console.log('%cBuilt with: HTML, CSS, JS + Matrix Effects + Cyber Aesthetics', 'color: #39FF14; font-size: 12px;');
console.log('%c\nIf you\'re reading this, we should probably talk about cryptography 🔐', 'color: #00F0FF; font-size: 14px; font-style: italic;');

// ============================================
// Loading Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
