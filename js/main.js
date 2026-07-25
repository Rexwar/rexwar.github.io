// ══════════════════════════════════════════════
//  main.js — Punto de entrada de la aplicación
//  Solo orquesta: importa datos, renderiza, inicia nav.
//  No contiene lógica de negocio ni HTML inline.
// ══════════════════════════════════════════════

import { education, experience, languages, projects, stack, terminalScript } from './data.js';
import { renderEducation, renderExperience, renderLanguages, renderProjects, renderStack } from './render.js';
import { initNav } from './nav.js';
import { initRainbow } from './rainbow.js';
import { initNodeNetwork } from './nodeNetwork.js';
import { initSpotlight } from './spotlight.js';
import { initContactChips } from './contactChips.js';
import { initReveal } from './reveal.js';
import { initTerminal } from './terminal.js';

// Inyectar contenido en cada sección
document.getElementById('education-list').innerHTML    = renderEducation(education);
document.getElementById('experience-list').innerHTML   = renderExperience(experience);
document.getElementById('languages-list').innerHTML    = renderLanguages(languages);
document.getElementById('projects-grid').innerHTML     = renderProjects(projects);
document.getElementById('stack-list').innerHTML        = renderStack(stack);

// Inicializar navegación
initNav();

// Fondo animado (independiente del contenido)
initNodeNetwork();
initSpotlight();
initContactChips();
initReveal();
initTerminal(terminalScript);

// Inicializar efecto arcoíris
initRainbow();