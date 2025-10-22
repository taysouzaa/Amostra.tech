// Navbar muda ao rolar a página
window.addEventListener('scroll', () => {
    // Nav continua oculto na responsividade, mas mantemos o script para desktop
    const nav = document.querySelector('nav');
    if (nav) { // Verifica se 'nav' existe antes de tentar manipular
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
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

// Animação dos cards (Fade-in e Efeito de Contorno na Rolagem)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.section-card');

    // Opções de Interseção
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        // Define dois thresholds:
        // 0.2 para o Fade-in (animação original)
        // 0.5 para o Contorno Vermelho (quando 50% do card está no centro da tela)
        threshold: [0.2, 0.5] 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const card = entry.target;
            
            // Lógica 1: Fade-in dos cards (sua lógica original)
            // Usamos entry.intersectionRatio > 0.19 para corresponder ao threshold 0.2
            if (entry.intersectionRatio > 0.19) { 
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
            
            // Lógica 2: Efeito de Contorno Vermelho (para mobile)
            // O contorno só faz sentido em mobile (telas menores), mas aplicamos a classe
            // e deixamos o CSS decidir se deve exibir.
            // Usamos entry.intersectionRatio >= 0.5 para corresponder ao threshold 0.5
            if (entry.intersectionRatio >= 0.5) { 
                card.classList.add('card-in-view');
            } else {
                card.classList.remove('card-in-view');
            }

        });
    }, options);

    // Observa todos os cards
    cards.forEach(card => observer.observe(card));
});
