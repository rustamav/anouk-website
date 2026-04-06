// ─── Navbar: hide on scroll down, reappear on scroll up ───────
const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 60) {
        navbar.classList.remove('scrolled', 'hidden');
    } else if (currentScrollY > lastScrollY) {
        navbar.classList.add('hidden', 'scrolled');
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.add('scrolled');
    }
    lastScrollY = currentScrollY;
}, { passive: true });

// ─── Mobile menu toggle ──────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ─── Smooth scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // let browser handle scroll-to-top
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── Parallax on about image ───────────────────────────────────
const aboutImg = document.querySelector('.about-image img');
if (aboutImg) {
    window.addEventListener('scroll', () => {
        const section = document.querySelector('.about');
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = -rect.top / window.innerHeight;
            aboutImg.style.transform = `translateY(${progress * 20}px)`;
        }
    }, { passive: true });
}

// ─── Reveal on scroll ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Stagger timeline items
            if (entry.target.classList.contains('timeline-item')) {
                const items = document.querySelectorAll('.timeline-item');
                items.forEach((item, index) => {
                    setTimeout(() => item.classList.add('visible'), index * 120);
                });
                revealObserver.unobserve(entry.target);
            } else {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => {
    revealObserver.observe(el);
});

// Observe only the first timeline item to trigger all
const firstTimeline = document.querySelector('.timeline-item');
if (firstTimeline) revealObserver.observe(firstTimeline);

// Skills section — staggered fade-up
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skills-group').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
    skillsObserver.observe(el);
});
