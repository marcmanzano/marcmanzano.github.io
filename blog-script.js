// ============================================
// Blog Filter Functionality
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        // Filter posts
        postCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                const categories = card.dataset.category || '';
                if (categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ============================================
// Newsletter Form Handling
// ============================================

const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;

        // For now, just show a message (you can integrate with your email service later)
        alert(`Thanks for your interest! The newsletter feature is coming soon. For now, connect with me on LinkedIn: https://www.linkedin.com/in/marcmanzano/`);

        e.target.reset();
    });
}

// ============================================
// Animate Post Cards on Scroll
// ============================================

const postObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

postCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    postObserver.observe(card);
});

// ============================================
// Search Functionality (Basic)
// ============================================

// You can add a search bar later and implement this
function searchPosts(query) {
    const searchQuery = query.toLowerCase();

    postCards.forEach(card => {
        const title = card.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();

        if (title.includes(searchQuery) || excerpt.includes(searchQuery)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
