/* Logic only. To change content, edit data.js instead. */
const $ = s => document.querySelector(s);
let lang = 'en';

/* Contact */
$('#wa').href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello Hon. Komugisha Joan, I found your website.')}`;
$('#c-email').innerHTML = `Email: <a href="mailto:${SITE.email}">${SITE.email}</a>`;
$('#c-addr').textContent = `Address: ${SITE.address}`;
$('#social').innerHTML = Object.entries(SITE.social).filter(([, u]) => u)
  .map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n[0].toUpperCase() + n.slice(1)}</a>`).join('');
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const t = `Name: ${f.get('name')}\nContact: ${f.get('contact')}\n${f.get('msg')}`;
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`, '_blank');
});

/* Stats with count-up when scrolled into view */
$('#stats').innerHTML = STATS.map(s =>
  `<div class="stat"><b data-n="${s.n}" data-p="${s.plus ? '+' : ''}">0</b><span>${s.label}</span></div>`).join('');
const fmt = n => n.toLocaleString('en-US');
const count = el => {
  const end = +el.dataset.n, t0 = performance.now();
  const tick = t => {
    const p = Math.min((t - t0) / 1400, 1);
    el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3)))) + (p === 1 ? el.dataset.p : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
new IntersectionObserver((es, o) => es.forEach(e => {
  if (e.isIntersecting) { e.target.querySelectorAll('b').forEach(count); o.unobserve(e.target); }
}), { threshold: .4 }).observe($('#stats'));

/* Map */
const hub = DISTRICTS[0];
$('#map').innerHTML = DISTRICTS.slice(1).map(d => `<line x1="${hub.x}" y1="${hub.y}" x2="${d.x}" y2="${d.y}"/>`).join('') +
  DISTRICTS.map((d, i) => `<g tabindex="0" role="button" data-i="${i}"><circle cx="${d.x}" cy="${d.y}" r="${i ? 5 : 7}"/><text x="${d.x}" y="${d.y + (i ? 10 : 13)}">${d.name}</text></g>`).join('');
document.querySelectorAll('#map g').forEach(g => {
  const show = () => {
    document.querySelectorAll('#map g').forEach(x => x.classList.remove('on'));
    g.classList.add('on');
    const d = DISTRICTS[g.dataset.i];
    $('#map-info').innerHTML = `<strong>${d.name}.</strong> ${d.text}`;
  };
  g.addEventListener('click', show);
  g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
});

/* News, videos, gallery */
const dateFmt = d => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
$('#news-list').innerHTML = NEWS.map(n => `<article><time>${dateFmt(n.date)}</time><h3>${n.title}</h3><p>${n.body}</p></article>`).join('');
$('#videos').innerHTML = VIDEOS.map(v => {
  const id = (v.url.match(/(?:v=|youtu\.be\/)([\w-]{11})/) || [])[1];
  return id ? `<div class="vid"><iframe src="https://www.youtube.com/embed/${id}" title="${v.title}" allowfullscreen loading="lazy"></iframe></div>`
            : `<div class="vid">${v.title}</div>`;
}).join('');
$('#grid').innerHTML = GALLERY.map(g => `<figure><img src="${g.src}" alt="${g.cap}" loading="lazy"><figcaption>${g.cap}</figcaption></figure>`).join('');

/* Language toggle (page text + chatbot) */
const base = {};
document.querySelectorAll('[data-i18n]').forEach(el => base[el.dataset.i18n] = el.textContent);
$('#lang').addEventListener('click', () => {
  lang = lang === 'en' ? 'lg' : 'en';
  document.documentElement.lang = lang === 'en' ? 'en' : 'lg';
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = lang === 'lg' && LG[el.dataset.i18n] ? LG[el.dataset.i18n] : base[el.dataset.i18n]);
  $('#q').placeholder = BOT[lang].ph;
  say(BOT[lang].hello, 'bot'); chips();
});

/* Chatbot: answers only from FAQ in data.js */
const log = $('#log');
function say(t, who) {
  const m = document.createElement('div');
  m.className = 'msg ' + who; m.textContent = t;
  log.appendChild(m); log.scrollTop = log.scrollHeight;
}
function chips() {
  $('#chips').innerHTML = BOT[lang].chips.map(c => `<button type="button">${c}</button>`).join('');
  $('#chips').querySelectorAll('button').forEach(b => b.onclick = () => ask(b.textContent));
}
function answer(q) {
  const words = q.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/);
  const hasHer = /joan|komugisha|hon|she|her|mubende/.test(q.toLowerCase());
  let best = null, top = 0;
  FAQ.forEach(f => {
    const s = f.k.filter(k => words.includes(k)).length;
    if (s > top) { top = s; best = f; }
  });
  // Luganda quick keys map onto the same answers
  const lgMap = { 'emirimu': 1, 'ani': 0, 'okukolagana': 9, 'okukolaganamu': 9, 'tukwatagane': 10 };
  words.forEach(w => { if (lgMap[w] !== undefined && !top) { best = FAQ[lgMap[w]]; top = 1; } });
  return top && (top > 1 || hasHer || q.split(' ').length < 6) ? best.a : BOT[lang].nope;
}
function ask(q) {
  q = q.trim(); if (!q) return;
  say(q, 'me');
  setTimeout(() => say(answer(q), 'bot'), 350);
}
$('#chat-form').addEventListener('submit', e => { e.preventDefault(); ask($('#q').value); $('#q').value = ''; });
const toggle = open => { $('#chat').hidden = !open; if (open && !log.children.length) { say(BOT[lang].hello, 'bot'); chips(); $('#q').placeholder = BOT[lang].ph; } if (open) $('#q').focus(); };
$('#chat-fab').onclick = () => toggle($('#chat').hidden);
$('#open-chat').onclick = () => toggle(true);
$('#chat-x').onclick = () => toggle(false);