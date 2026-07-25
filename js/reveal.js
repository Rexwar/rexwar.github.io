// ══════════════════════════════════════════════
//  reveal.js — Revela secciones al hacer scroll
//  Usa IntersectionObserver: cuando un elemento con
//  [data-reveal] entra en pantalla, se le agrega la
//  clase .is-visible (una sola vez) y deja de observarse.
// ══════════════════════════════════════════════

export function initReveal(selector = '[data-reveal]') {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  // Sin soporte o con movimiento reducido: mostrar todo de inmediato
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
}
