// ══════════════════════════════════════════════
//  render.js — Funciones puras de renderizado
//  Cada función recibe datos y devuelve HTML.
//  No saben nada de navegación ni eventos.
// ══════════════════════════════════════════════

export function renderEducation(items) {
  return items.map((item, i) => /* html */`
    <div class="edu-item" ${i > 0 ? 'style="margin-top:1rem"' : ''}>
      <h3>${item.institution}</h3>
      <p>${item.description}</p>
      ${item.extra ? `<p>${item.extra}</p>` : ''}
      <span class="badge ${item.statusType}">${item.status}</span>
    </div>
  `).join('');
}

export function renderExperience(items) {
  return items.map(item => /* html */`
    <div class="tl-item">
      <div class="tl-dot ${item.dotColor}"></div>
      <div class="tl-header">
        <div>
          <div class="tl-company">${item.company}</div>
          <div class="tl-role">${item.role}</div>
        </div>
        <div class="tl-date">${item.date}</div>
      </div>
      <div class="tl-desc">${item.desc}</div>
    </div>
  `).join('');
}

export function renderLanguages(items) {
  return items.map(item => /* html */`
    <div class="skill-chip">
      ${item.flag} ${item.name}<br>
      <small style="color:var(--muted)">${item.level}</small>
    </div>
  `).join('');
}

export function renderProjects(items) {
  return items.map(item => /* html */`
    <a class="project-card" href="${item.url}" target="_blank" style="display:block;color:inherit">
      <h3>${item.emoji} ${item.name}</h3>
      <p>${item.desc}</p>
      <div class="project-meta">
        <span>
          <span class="dot-lang" style="background:${item.langColor}"></span>
          ${item.lang}
        </span>
        <span>⭐ ${item.stars}</span>
      </div>
    </a>
  `).join('');
}