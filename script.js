// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('active');
    burgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

closeMenuBtn.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);

// Close menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ===== SCROLL REVEAL ANIMATIONS (Intersection Observer) =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Use the inline transition-delay if present, otherwise 0
            const delay = parseFloat(entry.target.style.transitionDelay) || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay * 1000);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate sending
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#2e7d32';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            contactForm.reset();
        }, 2500);
    }, 1800);
});

// ===== SMOOTH ANCHOR SCROLL (No Jump) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});


console.log('✅ Victory Centre Ministries International — site loaded.');