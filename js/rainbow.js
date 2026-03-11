// ══════════════════════════════════════════════
//  rainbow.js — Efecto arcoíris + onda sinusoidal
//  Aplica el efecto a cualquier elemento con
//  el atributo data-rainbow.
//  Ajusta AMPLITUDE y SPEED a tu gusto.
// ══════════════════════════════════════════════

const AMPLITUDE = 1;      // píxeles de desplazamiento vertical (sube/baja)
const WAVE_SPEED = 0.000016; // velocidad de la onda (más alto = más rápido)
const COLOR_SPEED = 0.5;  // qué tan rápido rotan los colores (0-1)
const LETTER_GAP = 2.9;   // desfase entre letras (más alto = onda más ancha)

function splitIntoSpans(el) {
  const text = el.textContent;
  el.textContent = '';
  el.style.display = 'inline-flex';
  el.style.alignItems = 'baseline';

  return [...text].map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // preserva espacios
    span.style.display = 'inline-block';
    span.style.willChange = 'transform, color';
    el.appendChild(span);
    return span;
  });
}

function animateRainbow(spans) {
  let t = 0;

  function frame() {
    spans.forEach((span, i) => {
      // Onda sinusoidal: cada letra desfasada por LETTER_GAP
      const y = Math.sin(t * WAVE_SPEED * 1000 + i * LETTER_GAP) * AMPLITUDE;
      span.style.transform = `translateY(${y}px)`;

      // Color HSL que rota en el tiempo + desfase por posición
      const hue = (t * COLOR_SPEED + i * (360 / spans.length)) % 360;
      span.style.color = `hsl(${hue}, 90%, 70%)`;
    });

    t++;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

export function initRainbow() {
  document.querySelectorAll('[data-rainbow]').forEach(el => {
    // Solo animar el texto del nodo de texto directo (no el <a> hijo)
    // Buscamos si tiene un <a> adentro para preservarlo
    const anchor = el.querySelector('a');
    const icon   = el.querySelector('i');

    if (anchor) {
      const spans = splitIntoSpans(anchor);
      animateRainbow(spans);
    }
  });
}