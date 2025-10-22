// Navbar muda ao rolar a página
window.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
if (window.scrollY > 50) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(anchor.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});

// Fade-in dos cards ao aparecer
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.section-card');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
});
