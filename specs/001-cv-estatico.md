# 001 — CV Estático

> **Fase:** 1 de 4
> **Depende de:** Ninguna
> **Estado:** Draft — pendiente de aprobación

---

## 1. Stack Propuesto

### Decisión: Vanilla JS (ratificado)

| Opción | Veredicto |
|--------|-----------|
| **Vanilla JS** ✅ | Sigue siendo la opción correcta. El sitio tiene 4 secciones, cero estado compartido, cero routing. Agregar un build step (Astro, Vite, etc.) por 99 líneas de HTML es sobrediseño. |
| Astro | Beneficios reales cuando hay Markdown, múltiples páginas, imágenes optimizadas. Para un CV de una sola página, agrega complejidad sin retorno. |

### Stack concreto

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| HTML | Semántico ARIA | Accesibilidad desde el vamos |
| CSS | CSS custom properties + módulos planos | Ya existe y es mantenible |
| JS | ES modules nativos (`type="module"`) | Sin bundler, sin build |
| Iconos | Font Awesome 6 (CDN) | Ya está, reemplazar por SVG sprite si se vuelve cuello de botella |
| Hosting | GitHub Pages | Gratuito, HTTPS automático, CDN global |
| Dominio | `rexwar.github.io` (gratuito) o custom | Si tiene dominio propio, se configura CNAME |
| CI/CD | GitHub Actions → Pages | Deploy automático desde `main` — pendiente de crear |

---

## 2. Secciones del Sitio

| # | Sección | Contenido | Prioridad |
|---|---------|-----------|-----------|
| 1 | **Header** | Avatar, nombre, tagline, chips de contacto (email, tel, ubicación, GitHub) | P0 |
| 2 | **Sobre mí** | Resumen profesional tipo elevator pitch (~3 líneas) — pendiente de escribir | P0 |
| 3 | **Skills técnicas** | Grid de tecnologías con nivel (Experto/Avanzado/Intermedio), separadas por backend/frontend/ML/data | P0 |
| 4 | **Educación** | UCN (Ing. Civil en Computación, egreso 2026) + colegio. Badge "En curso" con estilo `.blue` | P0 |
| 5 | **Experiencia** | Timeline: ayudantías UCN, Falabella, LADECO, Lipigas — descripciones reformuladas con formato XYZ | P0 |
| 6 | **Proyectos** | Cards con: repo name, desc, lenguaje, ⭐, link a GitHub. Debe incluir tesis ETA y app meal-planning | P0 |
| 7 | **Idiomas** | Español nativo, Inglés B2 (en progreso), Alemán básico | P0 |
| 8 | **Contacto** | Formulario estático con mailto fallback + links a LinkedIn/GitHub | P1 |
| 9 | **Footer** | Créditos, año, "Hecho con HTML puro" | P0 |

---

## 3. Estructura de Datos

Fuente de verdad: un único `data.js` (ya existe) que exporta arrays planos.
Cada sección importa solo lo que necesita.

### Schema propuesto para `data.js`

```js
export const profile = {
  name: "Rey Valdés Marangunic",
  tagline: "Ingeniero Civil en Computación · ML & Full-Stack",
  email: "reyvaldesm@gmail.com",
  phone: "+569 37477315",
  location: "Antofagasta, Chile",
  github: "Rexwar",
  linkedin: "rexwar",
  avatar: "https://github.com/Rexwar.png",
};

export const skills = [
  { category: "backend",    name: "Python",     level: "Avanzado" },
  { category: "backend",    name: "Node.js",    level: "Intermedio" },
  { category: "frontend",   name: "JavaScript", level: "Avanzado" },
  { category: "frontend",   name: "React",      level: "Intermedio" },
  { category: "ml",         name: "Scikit-learn", level: "Avanzado" },
  { category: "ml",         name: "PyTorch",    level: "Intermedio" },
  { category: "data",       name: "SQL",        level: "Avanzado" },
  { category: "data",       name: "PostgreSQL", level: "Intermedio" },
  // ... pendiente de completar por Rey
];

export const education = [ /* igual que hoy */ ];
export const experience = [ /* reformulado XYZ */ ];
export const projects = [ /* datos reales */ ];
export const languages = [ /* igual que hoy */ ];
```

---

## 4. Requisitos Técnicos

### Responsive

- Mobile-first: sin cambios mayores, el layout actual usa `max-width: 860px` y flexbox
- Breakpoints: 640px (mobile), 860px (tablet), 1200px (desktop)
- Header: en mobile los chips de contacto pasan a columna única

### Accesibilidad Básica

- Roles ARIA en nav (`role="tablist"`, `role="tab"`, `aria-selected`)
- `alt` texts descriptivos en avatar e iconos
- Contraste de colores mínimo AA (4.5:1 texto normal)
- Navegación por teclado (`Tab`, `Enter`, `Escape`)
- `prefers-reduced-motion` para el efecto rainbow

### Dark Mode

- Ya es dark mode nativo — el tema claro vendría con `prefers-color-scheme`
- Preparar variables CSS para ambos temas, sin implementar el toggle aún
- Fase 1 solo dark, Fase 2 agrega light toggle

### Deploy Automático

- GitHub Actions workflow: trigger en push a `main`
- Build: no hay (sitio estático plano)
- Deploy: `peaceiris/actions-gh-pages` o GitHub's `actions/deploy-pages`
- Dominio: si usa custom domain, CNAME file en el repo

### SEO Mínimo

- Meta tags: `description`, `og:title`, `og:image`, `twitter:card`
- Lang attribute correcto (`es` por defecto)
- JSON-LD structured data para `Person` schema

---

## 5. Criterios de Aceptación (Definition of Done)

- [ ] Header informativo: nombre, tagline, contacto visible sin scroll
- [ ] Sección Sobre mí con elevator pitch
- [ ] Skills grid con categorías y niveles visibles
- [ ] Educación con badges correctos (`.badge.blue` existe en CSS)
- [ ] Experiencia reformulada con logros cuantificables (formato XYZ)
- [ ] Proyectos reales: tesis ETA + meal-planning app + al menos 1 más
- [ ] Timeline visual con dots de colores significativos
- [ ] Navegación por tabs funciona sin errores de consola
- [ ] `padding: 1px` corregido a `0` en reset universal
- [ ] Todos los links externos abren con `target="_blank" rel="noopener"`
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 85
- [ ] Sin errores en consola del navegador
- [ ] Meta tags OG implementados
- [ ] Deploy automático funcionando desde `main`
- [ ] README.md actualizado con descripción del proyecto e instrucciones

---

## 6. Riesgos y Decisiones Abiertas

### Riesgos

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Contenido placeholder en proyectos | Alto — un reclutador lo nota en 5s | Poblar con proyectos reales antes del deploy |
| Falta de skills técnicas declaradas | Alto — el ATS no encuentra keywords | Definir skills reales en data.js |
| Inglés B2 sin certificación | Medio | Estudiar para EFSET o similar, mostrar "en preparación" |
| Font Awesome CDN es un punto de falla | Bajo | Agregar fallback o migrar a SVG inline en Fase 2 |

### Decisiones abiertas (REQUIEREN RESPUESTA DE REY)

1. **Skills reales** — ¿Qué tecnologías manejás realmente y a qué nivel? Necesito la lista para poblarla.
2. **Proyectos reales** — ¿Cuáles son los URLs de GitHub de tu tesis de ETA, la app de meal-planning, y otros proyectos que quieras mostrar?
3. **LinkedIn** — ¿Tenés perfil? ¿Cuál es el URL/user?
4. **Sobre mí** — Redactalo o dame bullet points y lo paso a elevator pitch.
5. **Dominio propio** — ¿Querés usar `rexwar.github.io` o tenés un dominio custom?
6. **Secciones de experiencia a excluir** — Paris (2014-2015) y posiblemente Lipigas (2019-2020) son ruido para un perfil CS. ¿Las eliminamos o las fusionamos en "otra experiencia"?
