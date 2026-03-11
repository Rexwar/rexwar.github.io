// ══════════════════════════════════════════════
//  data.js — Única fuente de verdad para contenido
//  Si quieres agregar/editar proyectos o experiencia,
//  solo tocas ESTE archivo.
// ══════════════════════════════════════════════

export const education = [
  {
    institution: "Instituto Obispo Silva Lezaeta (IOSL)",
    description: "Educación básica y media · Calama",
    status: "Completa",
    statusType: "green",
  },
  {
    institution: "Universidad Católica del Norte (UCN)",
    description: "Ingeniería Civil en Computación e Informática · Antofagasta",
    extra: "Egreso estimado: junio 2026",
    status: "En curso",
    statusType: "blue",
  },
];

export const experience = [
  {
    company: "Falabella",
    role: "Asistente de Bodega · Part time",
    date: "oct 2024 – ene 2026",
    desc: "Mantenimiento del orden, control de acceso e inventario para el cuidado de activos de la empresa.",
    dotColor: "",
  },
  {
    company: "UCN – Ayudante Cátedra",
    role: "Diseño de Sistemas Digitales",
    date: "ago – dic 2024",
    desc: "Revisión de evaluaciones y ayudantías para reforzar contenidos de sistemas digitales.",
    dotColor: "green",
  },
  {
    company: "UCN – Ayudante Cátedra",
    role: "Proyecto Introducción a la Ingeniería",
    date: "ene – jun 2024",
    desc: "Desarrollo de maqueta electrónica con LEDs como material de referencia y apoyo a grupos de alumnos.",
    dotColor: "green",
  },
  {
    company: "UCN – Ayudante Cátedra",
    role: "Fundamentos de la Computación",
    date: "ago – dic 2023",
    desc: "Revisión de evaluaciones y realización de ayudantías para reforzar contenidos.",
    dotColor: "green",
  },
  {
    company: "LADECO UCN",
    role: "Operador Logístico – Laboratorios de Computación",
    date: "mar – dic 2023",
    desc: "Registro y control del uso del inmueble por turnos entre clases.",
    dotColor: "",
  },
  {
    company: "Lipigas – Centro de Reparto",
    role: "Operador Logístico",
    date: "dic 2019 – feb 2020",
    desc: "Control y cuadratura de inventario, carga de información en sistema, contabilidad y soporte de terreno a distancia.",
    dotColor: "",
  },
  {
    company: "Paris",
    role: "Apoyo Navideño",
    date: "dic 2014 – ene 2015",
    desc: "Apoyo en sección trastienda de zapatería.",
    dotColor: "",
  },
];

export const languages = [
  { flag: "🇨🇱", name: "Español", level: "Nativo" },
  { flag: "🇺🇸", name: "Inglés",  level: "B2"     },
  { flag: "🇩🇪", name: "Alemán",  level: "Básico"  },
];

export const projects = [
  {
    emoji: "🔧",
    name: "Nombre del Repo",
    desc: "Descripción breve de qué hace el proyecto y qué aprendiste.",
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    url: "https://github.com/Rexwar/NOMBRE_REPO",
  },
  {
    emoji: "💡",
    name: "Otro Proyecto",
    desc: "Descripción breve. Tecnologías usadas, problema que resuelve.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 0,
    url: "https://github.com/Rexwar/NOMBRE_REPO_2",
  },
  {
    emoji: "📐",
    name: "Otro Proyecto",
    desc: "Descripción breve. Tecnologías usadas, problema que resuelve.",
    lang: "HTML/CSS",
    langColor: "#e34c26",
    stars: 0,
    url: "https://github.com/Rexwar/NOMBRE_REPO_3",
  },
];