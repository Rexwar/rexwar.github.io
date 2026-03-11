// ══════════════════════════════════════════════
//  nav.js — Lógica de navegación entre vistas
//  Solo sabe qué secciones mostrar por cada tab.
//  No sabe nada de datos ni de renderizado.
// ══════════════════════════════════════════════

// Mapa declarativo: qué secciones son visibles en cada vista
const VIEWS = {
  all:        ['education', 'experience', 'languages', 'projects'],
  experience: ['education', 'experience'],
  projects:   ['projects'],
};

function setView(viewName) {
  const visible = new Set(VIEWS[viewName]);
  const allSections = Object.values(VIEWS).flat();

  // Mostrar u ocultar cada sección según la vista activa
  [...new Set(allSections)].forEach(id => {
    const el = document.getElementById(`${id}-section`);
    if (el) el.style.display = visible.has(id) ? 'block' : 'none';
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