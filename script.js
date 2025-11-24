// script.js REVISADO

// 1. Navbar muda ao rolar a página (mantido)
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  // Se o usuário rolou mais de 50 pixels
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// 2. Rolagem suave para âncoras (mantido)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    // Previne o comportamento padrão (pulo instantâneo)
    e.preventDefault(); 
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      // Faz a rolagem suave até o elemento
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// 3. Inicialização de Bibliotecas (NOVO/ATUALIZADO)
document.addEventListener('DOMContentLoaded', () => {
    
    // Se estiver usando o AOS, certifique-se de inicializá-lo
    // Mas no HTML anterior, já inicializamos ele direto no script tag, então não é necessário aqui
    
    // O código de IntersectionObserver para 'section-card' foi REMOVIDO
    // pois o AOS está lidando com animações de forma mais elegante e global.

});