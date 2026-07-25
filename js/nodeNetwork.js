// ══════════════════════════════════════════════
//  nodeNetwork.js — Red de nodos animada de fondo
//  Canvas fijo detrás del contenido: partículas que
//  se mueven y dibujan líneas entre sí al acercarse.
//  Ajusta COUNT y MAX_DIST a tu gusto.
// ══════════════════════════════════════════════

const COUNT = 55;
const MAX_DIST = 140;
const DOT_COLOR = '113,141,172'; // rgb de --accent

function createParticles(width, height) {
  return Array.from({ length: COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
  }));
}

export function initNodeNetwork(selector = '[data-node-canvas]') {
  const canvas = document.querySelector(selector);
  if (!canvas) return;

  // Respeta la preferencia de movimiento reducido del sistema
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = createParticles(canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${DOT_COLOR},0.5)`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${DOT_COLOR},${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
