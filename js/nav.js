// ══════════════════════════════════════════════
//  nav.js — Lógica de navegación entre vistas
//  Solo sabe qué secciones mostrar por cada tab.
//  No sabe nada de datos ni de renderizado.
// ══════════════════════════════════════════════

// Mapa declarativo: qué secciones son visibles en cada vista.
// 'stack' (terminal + stack técnico) NO está aquí a propósito:
// es la sección hero, siempre visible, no la filtra el nav.
const VIEWS = {
  all:        ['education', 'projects', 'experience', 'languages'],
  experience: ['education', 'experience'],
  projects:   ['projects'],
};

function setView(viewName) {
  const visible = new Set(VIEWS[viewName]);
  const allSections = Object.values(VIEWS).flat();

  // Mostrar u ocultar cada sección según la vista activa.
  // Al mostrar, se limpia el display inline (no se fuerza 'block')
  // para respetar el display real definido en CSS de cada sección
  // (ej: la del stack usa 'grid', no 'block').
  [...new Set(allSections)].forEach(id => {
    const el = document.getElementById(`${id}-section`);
    if (el) el.style.display = visible.has(id) ? '' : 'none';
  });

  // Actualizar botón activo
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
}

export function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });

  // Vista inicial
  setView('all');
}