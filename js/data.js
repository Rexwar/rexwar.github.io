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
    extra: "Egreso: junio 2026",
    status: "Egresado",
    statusType: "blue",
  },
];

export const experience = [
  {
    company: "UCN — Tesista",
    role: "Pipeline de ML para predicción de ETA en transporte",
    date: "2025 – 2026",
    desc: "Diseño del pipeline de recolección y procesamiento de datos del modelo predictivo: ETL/EDA con pandas, NumPy y scikit-learn, integrando Railway, Supabase y Google Colab en un flujo automatizado que sostiene el entrenamiento de modelos supervisados.",
    dotColor: "green",
  },
  {
    company: "UCN — Laboratorio de Robótica",
    role: "Asistente de Investigación · Dr. Oswald Menéndez",
    date: "2025",
    desc: "Adquisición de datos en Python desde un electrómetro Keithley para caracterización eléctrica en plantas: comunicación PC-instrumento, configuración de lectura y graficado en tiempo real. Diseño en CAD e impresión 3D de elevadores de altura variable (5+ iteraciones).",
    dotColor: "green",
  },
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
  "> Instancia única de la clase Rey; el constructor tardó 24 años\n" +
  "  en no lanzar excepciones.\n\n" +
  "rey@portfolio ~ % cat intereses.txt\n" +
  "> Frontend · UI/UX · micro-interacciones · aprendizaje constante\n";

export const stack = [
  { category: "AI / ML", items: [
    { label: "Prompt engineering", icon: "fa-solid fa-comments" },
    { label: "Agentes de IA", icon: "fa-solid fa-robot" },
    { label: "RAG", icon: "fa-solid fa-layer-group" },
    { label: "scikit-learn", icon: "fa-solid fa-chart-line" },
    { label: "PyTorch", icon: "fa-solid fa-fire" },
    { label: "ETL/EDA", icon: "fa-solid fa-filter" },
  ]},
  { category: "Frontend", items: [
    { label: "HTML5", icon: "fa-brands fa-html5" },
    { label: "CSS3", icon: "fa-brands fa-css3-alt" },
    { label: "JavaScript", icon: "fa-brands fa-js" },
    { label: "TypeScript", icon: "fa-solid fa-code" },
    { label: "React", icon: "fa-brands fa-react" },
    { label: "React Native", icon: "fa-solid fa-mobile-screen" },
  ]},
  { category: "Backend", items: [
    { label: "Node.js", icon: "fa-brands fa-node-js" },
    { label: "Express", icon: "fa-solid fa-server" },
    { label: "gRPC", icon: "fa-solid fa-diagram-project" },
    { label: "Python", icon: "fa-brands fa-python" },
    { label: "Railway", icon: "fa-solid fa-train" },
    { label: "Supabase", icon: "fa-solid fa-bolt" },
  ]},
  { category: "Datos & DevOps", items: [
    { label: "SQL", icon: "fa-solid fa-database" },
    { label: "PostgreSQL", icon: "fa-solid fa-database" },
    { label: "MongoDB", icon: "fa-solid fa-leaf" },
    { label: "Neo4j", icon: "fa-solid fa-circle-nodes" },
    { label: "Git/GitHub", icon: "fa-brands fa-git-alt" },
    { label: "Docker", icon: "fa-brands fa-docker" },
    { label: "GitHub Actions", icon: "fa-brands fa-github" },
    { label: "CI/CD", icon: "fa-solid fa-infinity" },
    { label: "Linux", icon: "fa-brands fa-linux" },
  ]},
  { category: "Arquitectura", items: [
    { label: "SOLID", icon: "fa-solid fa-cubes" },
    { label: "Patrones de diseño", icon: "fa-solid fa-shapes" },
    { label: "User stories", icon: "fa-solid fa-list-check" },
    { label: "Code review", icon: "fa-solid fa-code-compare" },
    { label: "Agile", icon: "fa-solid fa-arrows-spin" },
  ]},
  { category: "Workflow IA", items: [
    { label: "OpenCode", icon: "fa-solid fa-terminal" },
    { label: "Spec-driven dev.", icon: "fa-solid fa-file-lines" },
    { label: "IA en el flujo de trabajo", icon: "fa-solid fa-wand-magic-sparkles" },
  ]},
  { category: "Hardware", items: [
    { label: "Arduino", icon: "fa-brands fa-arduino" },
    { label: "CAD / modelado 3D", icon: "fa-solid fa-cube" },
    { label: "Impresión 3D", icon: "fa-solid fa-print" },
    { label: "Instrumentación Keithley", icon: "fa-solid fa-gauge" },
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
  {
    emoji: "📈",
    name: "Sistema de adquisición Keithley",
    desc: "Software de lectura de voltaje/amperaje y graficado en tiempo real para caracterización eléctrica, con comunicación serial a un electrómetro Keithley. Desarrollado en el Laboratorio de Robótica de la UCN.",
    lang: "Python · CAD",
    langColor: "#3572A5",
    stars: 0,
    url: "https://github.com/Rexwar?tab=repositories",
  },
];