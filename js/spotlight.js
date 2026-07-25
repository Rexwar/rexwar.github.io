// ══════════════════════════════════════════════
//  spotlight.js — Halo radial que sigue el cursor
//  Crea una capa fija con un radial-gradient
//  centrado en la posición del mouse.
// ══════════════════════════════════════════════

export function initSpotlight(selector = '[data-spotlight]') {
  const el = document.querySelector(selector);
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Sin puntero fino (touch) el spotlight no aporta nada
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.addEventListener('mousemove', e => {
    el.style.background =
      `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(113,141,172,.14), transparent 70%)`;
  });
}
