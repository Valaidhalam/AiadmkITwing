// ── Navbar scroll behaviour ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Intersection Observer for reveal animations ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// ── Stagger children inside cards-grid ──
document.querySelectorAll('.cards-grid').forEach(grid => {
    grid.querySelectorAll('.card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 80}ms`;
    });
});

// ── Stagger leader cards in tier2 ──
document.querySelectorAll('.tier2-cards .lcard').forEach((card, i) => {
    card.style.transitionDelay = `${i * 120}ms`;
});