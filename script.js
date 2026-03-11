/* ─────────────────────────────────────────
   script.js
   1. Custom cursor
   2. Scroll reveal
   3. Dynamic project rendering from projects.js
───────────────────────────────────────── */

// ── 1. CUSTOM CURSOR ──────────────────────
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Ring follows with slight lag
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Grow cursor on hoverable elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '18px';
    cursor.style.height = '18px';
    cursorRing.style.width  = '50px';
    cursorRing.style.height = '50px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '8px';
    cursor.style.height = '8px';
    cursorRing.style.width  = '32px';
    cursorRing.style.height = '32px';
  });
});


// ── 2. SCROLL REVEAL ──────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── 3. DYNAMIC PROJECT RENDERING ──────────
function getBadge(status) {
  const map = {
    live:     { cls: 'badge-live',     label: 'Live' },
    building: { cls: 'badge-building', label: 'In Progress' },
    archived: { cls: 'badge-archived', label: 'Archived' },
  };
  return map[status] || map['archived'];
}

function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container || typeof projects === 'undefined') return;

  container.innerHTML = projects.map((p, i) => {
    const badge = getBadge(p.status);
    const techHTML = p.tech.map(t => `<span class="t-tag">${t}</span>`).join('');

    const linksHTML = [
      p.link   ? `<a href="${p.link}"   target="_blank" class="proj-link">↗ Live Site</a>` : '',
      p.github ? `<a href="${p.github}" target="_blank" class="proj-link">↗ GitHub</a>`   : '',
    ].filter(Boolean).join('');

    return `
      <div class="proj-card reveal d${Math.min(i + 1, 3)}">
        <div class="proj-top">
          <div class="proj-meta">
            <span class="proj-year">${p.year}</span>
            <span class="badge ${badge.cls}">${badge.label}</span>
          </div>
        </div>

        <div class="proj-name">${p.name}</div>
        <div class="proj-tagline">${p.tagline}</div>
        <div class="proj-divider"></div>

        <div class="proj-body">
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-right">
            <div class="proj-highlight">${p.highlight}</div>
            <div class="proj-tech">${techHTML}</div>
            ${linksHTML ? `<div class="proj-links">${linksHTML}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe newly rendered cards
  container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', renderProjects);