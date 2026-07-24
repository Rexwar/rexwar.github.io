# rexwar.github.io

CV y portafolio web de **Rey Valdés Marangunic** — estudiante de Ingeniería Civil en Computación e Informática (UCN).

**En vivo:** [rexwar.github.io](https://rexwar.github.io)

## Stack

- HTML, CSS y JavaScript puros (módulos ES) — sin frameworks, sin build step, cero dependencias runtime.
- Contenido data-driven: todo el contenido vive en `js/data.js`.
- Desplegado en GitHub Pages.

## Estructura

```
├── index.html        # Estructura de la página
├── css/
│   ├── styles.css    # Punto de entrada (solo imports)
│   ├── base.css      # Reset, variables y tipografía
│   ├── layout.css    # Container, header, secciones, responsive
│   ├── components.css# Chips, timeline, cards
│   └── nav.css       # Navegación y animaciones
├── js/
│   ├── main.js       # Orquestador (punto de entrada)
│   ├── data.js       # Única fuente de verdad del contenido
│   ├── render.js     # Funciones puras de renderizado
│   ├── nav.js        # Navegación entre vistas
│   └── rainbow.js    # Micro-animación del chip de GitHub
└── specs/            # Visión y especificaciones por fase
```

## Editar contenido

Para agregar o modificar educación, experiencia, idiomas o proyectos, solo se toca `js/data.js`.
