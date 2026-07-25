// ══════════════════════════════════════════════
//  contactChips.js — Chips de contacto privados
//  .chip-reveal:  mantener presionado muestra el
//                 valor y lo copia; soltar lo oculta.
//  .chip-copy:    un clic copia el valor (el texto
//                 sigue siempre visible).
// ══════════════════════════════════════════════

import { copyToClipboard } from './clipboard.js';

function showToast(chip) {
  const toast = document.createElement('span');
  toast.className = 'chip-toast';
  toast.textContent = '✓ copiado';
  chip.appendChild(toast);
  setTimeout(() => toast.remove(), 1200);
}

function initRevealChips() {
  document.querySelectorAll('.chip-reveal').forEach(chip => {
    const label = chip.querySelector('.chip-reveal-text');
    const original = label.textContent;
    const value = chip.dataset.revealValue;
    let copied = false;

    const reveal = () => {
      label.textContent = value;
      if (!copied) {
        copyToClipboard(value);
        showToast(chip);
        copied = true;
      }
    };
    const hide = () => { label.textContent = original; };

    chip.addEventListener('mousedown', reveal);
    chip.addEventListener('mouseup', hide);
    chip.addEventListener('mouseleave', hide);
    chip.addEventListener('touchstart', e => { e.preventDefault(); reveal(); }, { passive: false });
    chip.addEventListener('touchend', hide);
  });
}

function initCopyChips() {
  document.querySelectorAll('.chip-copy').forEach(chip => {
    chip.addEventListener('click', e => {
      e.preventDefault(); // no abrir mailto: al copiar
      copyToClipboard(chip.dataset.copyValue);
      showToast(chip);
    });
  });
}

export function initContactChips() {
  initRevealChips();
  initCopyChips();
}
