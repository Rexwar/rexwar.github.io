# 000 — Visión del Portafolio

> **Propietario:** Rey Valdés Marangunic
> **Estado:** Draft — pendiente de aprobación
> **Última actualización:** 2026-07-20

---

## 1. Visión General

Portafolio web profesional de Rey Valdés, Ingeniero Civil en Computación e
Informática egresado de la Universidad Católica del Norte (UCN). El sitio
funciona como **CV vivo** y vitrina técnica: muestra formación, experiencia,
proyectos y capacidad de ejecución.

Evoluciona en fases incrementales, cada una agregando una capa de
funcionalidad sin romper lo anterior. Nunca hay un "rewrite total".

---

## 2. Roadmap de Fases

### Fase 1 — CV Estático ✅ (en curso)

Sitio HTML/CSS/JS estático desplegado en GitHub Pages. Contenido
data-driven desde un único JSON. Sin backend, sin build step, cero
dependencias runtime.

**Entregables:**
- Datos personales, educación, experiencia, idiomas, proyectos
- Diseño responsive, dark theme
- Deploy automático a GitHub Pages

### Fase 2 — Módulos JS sin backend

Widgets interactivos que no requieren servidor:

- Dashboard de GitHub (estadísticas de perfil, lenguajes, contribuciones)
- Visualización tipo radar/globe de skills técnicas
- Timeline interactivo de experiencia profesional
- Filtros avanzados de proyectos por tecnología

### Fase 3 — Integración Supabase

Capa de backend serverless con Supabase plan gratuito:

- Formulario de contacto persistente
- Sección de "notas técnicas" / blog ligero
- Autenticación opcional para área privada
- RLS estricto — nunca se exponen service keys en el front

### Fase 4 — Módulo Destacado ML

Chatbot RAG sobre el CV usando pgvector en Supabase:

- Embeddings del contenido del CV (experiencia, proyectos, tesis)
- Interfaz chat para que reclutadores pregunten en lenguaje natural
- "Pregúntale a mi CV" como feature diferencial

---

## 3. Criterios de Éxito Globales

| Criterio | Métrica |
|----------|---------|
| Tiempo de carga | < 2s en 3G |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 85 |
| Sin dependencias runtime en Fase 1-2 | Cero npm/CDN mandates |
| Deploy | Automático desde `main` |
| i18n | Español e inglés desde Fase 1 |

---

## 4. No-Goals (explícitamente fuera del alcance)

- ❌ Framework SPA (React, Vue, Svelte) en Fase 1 — overkill
- ❌ Backend propio (no hay servidor que mantener)
- ❌ CMS tipo Strapi/WordPress — contenido en JSON plano
- ❌ Base de datos en Fase 1-2 — se agrega solo en Fase 3
- ❌ Diseño sistema de componentes — el sitio es pequeño, no lo necesita
- ❌ E-commerce, suscripciones, paywalls — no es un producto
- ❌ SEO agresivo — es un CV personal, no un blog de contenido
