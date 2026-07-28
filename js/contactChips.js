// ══════════════════════════════════════════════
//  contactChips.js — Chips de contacto privados
//  Por defecto solo muestran el ícono (con un
//  destello sutil que indica que son interactuables).
//  En escritorio, pasar el mouse por encima revela el
//  valor (transición suave) y lo oculta al salir. En
//  touch (sin hover real) se usa mantener presionado.
//  Si el chip tiene data-copy-value, también copia al
//  portapapeles al revelarse.
// ══════════════════════════════════════════════

import { copyToClipboard } from './clipboard.js';

function showToast(chip) {
  const toast = document.createElement('span');
  toast.className = 'chip-toast';
  toast.textContent = '✓ copiado';
  chip.appendChild(toast);
  setTimeout(() => toast.remove(), 1200);
}

export function initContactChips() {
  document.querySelectorAll('.chip-reveal').forEach(chip => {
    const copyValue = chip.dataset.copyValue;
    let copiedThisHold = false;

    const reveal = () => {
      chip.classList.add('is-revealed');
      if (copyValue && !copiedThisHold) {
        copyToClipboard(copyValue);
        showToast(chip);
        copiedThisHold = true;
      }
    };
    const hide = () => {
      chip.classList.remove('is-revealed');
      copiedThisHold = false;
    };

    // Escritorio: mostrar al pasar el mouse, ocultar al salir.
    chip.addEventListener('mouseenter', reveal);
    chip.addEventListener('mouseleave', hide);

    // Touch: no hay hover real, se usa mantener presionado.
    chip.addEventListener('touchstart', reveal, { passive: true });
    chip.addEventListener('touchend', hide);

    // El chip de email es solo para copiar: no abre el cliente de correo.
    if (chip.classList.contains('chip-nonav')) {
      chip.addEventListener('click', e => e.preventDefault());
    }
  });
}
