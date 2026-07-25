// ══════════════════════════════════════════════
//  contactChips.js — Chips de contacto privados
//  Por defecto solo muestran el ícono (con un
//  destello sutil que indica que son interactuables).
//  Mantener presionado revela el valor con una
//  transición suave; si tiene data-copy-value,
//  también lo copia al portapapeles.
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

    chip.addEventListener('mousedown', reveal);
    chip.addEventListener('mouseup', hide);
    chip.addEventListener('mouseleave', hide);
    chip.addEventListener('touchstart', reveal, { passive: true });
    chip.addEventListener('touchend', hide);

    // El chip de email es solo para copiar: no abre el cliente de correo.
    if (chip.classList.contains('chip-nonav')) {
      chip.addEventListener('click', e => e.preventDefault());
    }
  });
}
