// 1. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const ring = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    
    // Smooth follow for the main dot
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    
    // Smooth follow for the outer ring (slight delay via CSS transition)
    ring.style.transform = `translate(${x}px, ${y}px)`;
});

// Cursor Hover Effects (Scales up when hovering over buttons/links)
const hoverables = document.querySelectorAll('a, button, .btn-primary, .btn-outline');
hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
        cursor.style.background = 'var(--accent2)';
        ring.style.width = '60px';
        ring.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(1)`;
        cursor.style.background = 'var(--accent)';
        ring.style.width = '36px';
        ring.style.height = '36px';
    });
});

// 2. Navbar Scroll Effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 4rem';
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.padding = '1.4rem 4rem';
        nav.style.background = 'rgba(10, 10, 15, 0.7)';
    }
});

// 3. Reveal Elements on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Select sections to animate
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
    
});
