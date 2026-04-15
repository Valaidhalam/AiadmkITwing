document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once element is visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Staggered animation for hero elements
    const heroElements = document.querySelectorAll('.hero .hidden');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 150}ms`;
        setTimeout(() => {
            el.classList.add('show');
        }, 100); // Small initial delay
    });

    // Animating other sections
    const hiddenElements = document.querySelectorAll('.hidden:not(.hero .hidden)');
    hiddenElements.forEach((el, index) => {
        observer.observe(el);
    });

    // Special staggering for cards
    const cards = document.querySelectorAll('.card.hidden');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 3) * 100}ms`; // Stagger rows
    });
    
    // Navbar sequence show
    setTimeout(() => {
        navbar.classList.add('show');
        navbar.classList.remove('hidden');
    }, 1000);
});
