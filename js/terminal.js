// ══════════════════════════════════════════════
//  terminal.js — Ventana de terminal estilo macOS
//  Escribe `script` letra por letra en el nodo con
//  data-terminal-body. El botón amarillo minimiza.
// ══════════════════════════════════════════════

const TYPE_SPEED_MS = 28;

function typeInto(el, text, onDone) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = text;
    onDone?.();
    return;
  }

  let i = 0;
  const interval = setInterval(() => {
    el.textContent = text.slice(0, i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
      onDone?.();
    }
  }, TYPE_SPEED_MS);
}

export function initTerminal(script, selector = '[data-terminal]') {
  const root = document.querySelector(selector);
  if (!root) return;

  const body = root.querySelector('[data-terminal-body]');
  const minimizeBtn = root.querySelector('[data-terminal-minimize]');

  if (body) typeInto(body, script);

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      root.classList.toggle('is-minimized');
    });
  }
}
