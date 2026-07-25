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
    extra: "Titulado · 2026",
    status: "Titulado",
    statusType: "green",
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

export const terminalScript =
  "rey@portfolio ~ % whoami\n" +
  "> Rey Valdés — Ingeniero titulado (UCN)\n\n" +
  "rey@portfolio ~ % cat intereses.txt\n" +
  "> Frontend · UI/UX · micro-interacciones · aprendizaje constante\n";

export const stack = [
  { category: "Frontend", items: [
    { label: "HTML5", icon: "fa-brands fa-html5" },
    { label: "CSS3", icon: "fa-brands fa-css3-alt" },
    { label: "JavaScript", icon: "fa-brands fa-js" },
  ]},
  { category: "Backend", items: [
    { label: "Node.js", icon: "fa-brands fa-node-js" },
    { label: "Express", icon: "fa-solid fa-server" },
    { label: "gRPC", icon: "fa-solid fa-diagram-project" },
  ]},
  { category: "Cloud & DevOps", items: [
    { label: "Docker", icon: "fa-brands fa-docker" },
    { label: "GitHub Actions", icon: "fa-brands fa-github" },
  ]},
  { category: "Bases de datos", items: [
    { label: "MongoDB", icon: "fa-solid fa-leaf" },
    { label: "Neo4j", icon: "fa-solid fa-circle-nodes" },
  ]},
];

export const languages = [
  { flag: "🇨🇱", name: "Español", level: "Nativo" },
  { flag: "🇺🇸", name: "Inglés",  level: "B2"     },
  { flag: "🇩🇪", name: "Alemán",  level: "Básico"  },
];

export const projects = [
  {
    emoji: "🎮",
    name: "api-metacritic",
    desc: "API REST no oficial de videojuegos con datos de Metacritic vía web scraping. Node.js + Express, documentada y con propósito educativo.",
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    url: "https://github.com/Rexwar/api-metacritic",
  },
  {
    emoji: "📦",
    name: "censudex-products",
    desc: "Microservicio de gestión de productos con gRPC, MongoDB y Cloudinary. Incluye tests, seeders y documentación completa.",
    lang: "Node.js · gRPC",
    langColor: "#3fb950",
    stars: 0,
    url: "https://github.com/Rexwar/censudex-products",
  },
  {
    emoji: "🚇",
    name: "perla-metro-route-service",
    desc: "Servicio de rutas para sistema de transporte con arquitectura SOA. Express.js + Neo4j Aura (base de datos de grafos).",
    lang: "Node.js · Neo4j",
    langColor: "#4581ea",
    stars: 0,
    url: "https://github.com/Rexwar/perla-metro-route-service",
  },
  {
    emoji: "🗂️",
    name: "insightflow-tasks",
    desc: "Microservicio de tareas para la plataforma InsightFlow. Express.js, dockerizado y con integración continua en GitHub Actions.",
    lang: "Node.js · Docker",
    langColor: "#2496ed",
    stars: 0,
    url: "https://github.com/Rexwar/insightflow-tasks",
  },
];