// ══════════════════════════════════════════════
//  contactChips.js — Chips de contacto privados
//  Por defecto solo muestran el ícono (con un
//  destello sutil que indica que son interactuables).
//  En escritorio, pasar el mouse por encima revela el
//  valor (transición suave) y lo oculta al salir. En
//  touch (sin hover real) se usa mantener presionado.
//  Revelar SOLO muestra el valor — nunca copia solo.
//  Si el chip tiene data-copy-value, además aparece un
//  aviso "Clic para copiar"; el copiado real ocurre
//  recién al hacer clic, y el aviso cambia a "✓ copiado".
// ══════════════════════════════════════════════

import { copyToClipboard } from './clipboard.js';

const HINT_TEXT = 'Clic para copiar';
const COPIED_TEXT = '✓ copiado';

function setHint(chip, text, confirm = false) {
  let hint = chip.querySelector('.chip-hint');
  if (!hint) {
    hint = document.createElement('span');
    hint.className = 'chip-hint';
    chip.appendChild(hint);
  }
  hint.textContent = text;
  hint.classList.toggle('chip-hint--confirm', confirm);
}

function clearHint(chip) {
  chip.querySelector('.chip-hint')?.remove();
}

export function initContactChips() {
  document.querySelectorAll('.chip-reveal').forEach(chip => {
    const copyValue = chip.dataset.copyValue;

    const reveal = () => {
      chip.classList.add('is-revealed');
      if (copyValue) setHint(chip, HINT_TEXT);
    };
    const hide = () => {
      chip.classList.remove('is-revealed');
      clearHint(chip);
    };

    // Escritorio: mostrar al pasar el mouse, ocultar al salir.
    chip.addEventListener('mouseenter', reveal);
    chip.addEventListener('mouseleave', hide);

    // Touch: no hay hover real, se usa mantener presionado.
    chip.addEventListener('touchstart', reveal, { passive: true });
    chip.addEventListener('touchend', hide);

    if (copyValue) {
      chip.addEventListener('click', e => {
        e.preventDefault(); // evita mailto/navegación al copiar
        copyToClipboard(copyValue);
        setHint(chip, COPIED_TEXT, true);
        setTimeout(() => {
          if (chip.matches(':hover')) setHint(chip, HINT_TEXT);
          else clearHint(chip);
        }, 1100);
      });
    }
  });
}
