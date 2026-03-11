// ══════════════════════════════════════════════
//  main.js — Punto de entrada de la aplicación
//  Solo orquesta: importa datos, renderiza, inicia nav.
//  No contiene lógica de negocio ni HTML inline.
// ══════════════════════════════════════════════

import { education, experience, languages, projects } from './data.js';
import { renderEducation, renderExperience, renderLanguages, renderProjects } from './render.js';
import { initNav } from './nav.js';

// Inyectar contenido en cada sección
document.getElementById('education-list').innerHTML    = renderEducation(education);
document.getElementById('experience-list').innerHTML   = renderExperience(experience);
document.getElementById('languages-list').innerHTML    = renderLanguages(languages);
document.getElementById('projects-grid').innerHTML     = renderProjects(projects);

// Inicializar navegación
initNav();