# Changelog de diseño — julio 2026 (referencia)

> Nota: este archivo documenta el proceso de una exploración de diseño
> hecha en una herramienta de prototipado (formato `.dc.html` con React),
> **no el sitio real**. Las ideas que se portaron a la arquitectura vanilla
> JS del sitio están en los commits del repo desde `9e358d0` en adelante;
> lo demás (terminal animada, tilt 3D, etc.) quedó fuera de scope por ahora.
> Se conserva aquí solo como referencia del proceso.

---

Historial de cambios del portafolio, en formato [Conventional Commits](https://www.conventionalcommits.org/). No hay repo Git conectado en este proyecto, así que este archivo documenta cada cambio como si fuera un commit.

---

**feat: rediseño animado del portafolio con foco en frontend/UI-UX**
Terminal con efecto typing, spotlight de cursor, cards de proyecto con tilt 3D, stack técnico agrupado por categoría, scroll-reveal por sección. Reordena Proyectos/Stack antes que Experiencia. Actualiza estado educativo a "Titulado".

**fix: elimina marcadores CDATA filtrados que rompían el logic class**
Los `<![CDATA[` quedaron como texto literal en el archivo, invalidando el JS y dejando el template sin interactividad. Reescrito sin ellos.

**feat: restaura el efecto rainbow del chip de GitHub**
Micro-animación letra por letra portada del sitio original (rainbow.js).

**fix: el efecto rainbow desaparecía por reconciliación de React**
La manipulación directa del DOM se revertía en cada re-render. Reimplementado como CSS puro (`@keyframes rainbow-wave`) dirigido por datos de plantilla, no por JS imperativo.

**style: quita fondo y borde del header principal**

**refactor: separa datos, estilos y efectos en módulos con responsabilidad única**
- `src/data/content.js` — única fuente de contenido (educación, experiencia, idiomas, proyectos, stack, script de terminal).
- `src/styles/theme.js` — tokens de color y funciones puras que construyen cada estilo (SRP, evita estilos hardcodeados repetidos).
- `src/effects/rainbow.js` — función pura para el efecto arcoíris.
El componente principal (`Portafolio Rey Valdes.dc.html`) ahora solo orquesta estado y delega en estos módulos (cargados vía `import()` dinámico), sin conocer sus detalles internos.

**docs: agrega este CHANGELOG.md**

**feat: chips de teléfono y ubicación ocultos, revelados al mantener presionado**
Reemplaza el texto siempre visible por un ícono con destello sutil; mantener clic/touch muestra el dato, soltar lo oculta.

**feat: minimizar funcional en la ventana de terminal estilo macOS**
El botón amarillo colapsa el cuerpo de la terminal; clic de nuevo lo restaura.

**feat: email y teléfono se ocultan, revelan y copian al portapapeles con un clic**
Ambos chips se mueven junto al nombre/carrera en el header. Un clic revela el valor y lo copia (con confirmación "✓ copiado"); clic de nuevo lo oculta. Se añade `src/effects/clipboard.js` (SRP: solo copia texto) y la lógica de revelar+copiar se centraliza en un único método reusado por ambos chips.

**refactor: reemplaza click-toggle por press-and-hold en email/teléfono, con toast flotante**
`onClick` cambia a `onMouseDown`/`onMouseUp`/`onTouchStart`/`onTouchEnd`: mantener presionado revela el dato y dispara la copia; soltar lo oculta (dos comportamientos independientes y simultáneos). El mensaje "✓ copiado" ya no reemplaza el texto del chip: aparece como un tooltip absoluto sobre el ícono (`z-index:10`) con temporizador propio.

**feat: mueve todos los chips de contacto (email, teléfono, ubicación, GitHub, LinkedIn) a la derecha del nombre/carrera**
Antes vivían en una fila aparte debajo del header; ahora forman una columna alineada a la derecha, junto al bloque de nombre y carrera.

**style: reduce el layout de terminal + stack técnico a dos columnas compactas**
Terminal a la izquierda, Stack Técnico a la derecha, en grid de 2 columnas con paddings, fuentes e íconos más pequeños para ocupar menos espacio vertical y horizontal.

**fix: chip "React Native" ya no envuelve el texto en dos líneas**
Se agrega `white-space:nowrap;flex-shrink:0` a los chips de tecnología del Stack Técnico.

**feat: red de nodos animada de fondo**
Canvas fijo detrás del contenido con partículas que se mueven y dibujan líneas entre sí cuando están cerca (efecto de conexión/desconexión tipo red neuronal), independiente del spotlight de cursor existente (ambos conviven).

**content: quita la frase "apasionado por el frontend/UI-UX" del header**
No representaba honestamente la relación del usuario con el frontend (aprendizaje apoyado en IA, no pasión declarada). Se elimina la línea sin reemplazo.

**content: cambia "buen código" por "aprendizaje constante" en el script de la terminal**

**style: hace el layout responsive con unidades fluidas (clamp/auto-fit), sin breakpoints fijos**
Padding del contenedor, header (avatar, tipografía, gaps) y el grid terminal+stack usan `clamp()`/`auto-fit`/`min()` para adaptarse de escritorio a móvil sin distorsionar ni desbordar contenido.
