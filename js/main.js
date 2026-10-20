/* =========================================================
   main.js — 页面逻辑（一般不需要改）
   内容请改 js/data.js
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const seriesOf = id => SERIES.find(s => s.id === id);

  /* ---------- 填充首页内容 ---------- */
  // Hero
  $('#heroImg').src = SITE.hero.image;
  $('#heroTitle').innerHTML = SITE.hero.lines.map(l => `<span class="ln"><span>${esc(l)}</span></span>`).join('');
  $('#heroSub').textContent = SITE.hero.sub;
  $('#heroKicker').textContent = SITE.hero.kicker || '';

  // Philosophy
  $('#philoPanels').innerHTML = SITE.philosophy.map((p, i) => `
    <div class="philo__panel" data-i="${i + 1}">
      <h2 class="philo__word rv">${esc(p.word)}</h2>
      <p class="philo__text rv">${esc(p.text)}</p>
    </div>`).join('');
  $('.philo__count small').textContent = `/ ${String(SITE.philosophy.length).padStart(2, '0')}`;

  // Approach
  $('#rotor').innerHTML = SITE.approach.rotating.map((w, i) => `<span class="${i === 0 ? 'on' : ''}">${esc(w)}</span>`).join('');
  $('#approachHeadline').innerHTML = SITE.approach.headline.map(esc).join('<br>');
  $('#approachIntro').textContent = SITE.approach.intro;
  $('#approachSteps').innerHTML = SITE.approach.steps.map((s, i) => `
    <li class="rv">
      <div class="step__top"><span>${String(i + 1).padStart(2, '0')}</span><span>${esc(s.label)}</span></div>
      <h3 class="step__title">${esc(s.title)}</h3>
      <p class="step__text">${esc(s.text)}</p>
      ${s.work ? `<a class="step__link" href="#/work/${s.work}">View work — ${esc((WORKS.find(w => w.slug === s.work) || {}).title || '')} →</a>` : ''}
    </li>`).join('');

  // Works grid
  $('#worksFilter').innerHTML = `<button class="on" data-f="all">All</button>` +
    SERIES.map(s => `<button data-f="${s.id}">${s.id} ${esc(s.title)}</button>`).join('');
  $('#worksGrid').innerHTML = WORKS.map(w => `
    <a class="card rv" href="#/work/${w.slug}" data-series="${w.series}">
      <div class="card__img"><img src="${w.thumb || w.cover}" alt="${esc(w.title)}" loading="lazy"></div>
      <div class="card__meta">
        <span>${w.series}.${w.no}<span class="card__title">${esc(w.title)}</span></span>
        <span>${w.year}</span>
      </div>
    </a>`).join('');
  $('#worksFilter').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#worksFilter button').forEach(x => x.classList.toggle('on', x === b));
    $$('.card').forEach(c => c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.series !== b.dataset.f));
  });

  // Series
  $('#seriesList').innerHTML = SERIES.map(s => `
    <li class="s-row" data-cover="${s.cover}">
      <button class="s-row__head">
        <span class="s-row__no">${s.id}</span>
        <span class="s-row__title">${esc(s.title)}</span>
        <span class="s-row__kind">${esc(s.kind)}</span>
        <span class="s-row__plus">+</span>
      </button>
      <div class="s-row__body"><div><div class="s-row__inner">
        <p class="s-row__text">${esc(s.text)}</p>
        <ul class="s-row__works">${WORKS.filter(w => w.series === s.id).map(w =>
          `<li><a href="#/work/${w.slug}"><span>${w.no} — ${esc(w.title)}</span><small>${w.year}</small></a></li>`).join('')}</ul>
      </div></div></div>
    </li>`).join('');
  $$('.s-row__head').forEach(h => h.addEventListener('click', () => h.parentElement.classList.toggle('open')));

  // 悬停跟随图
  const float = $('#seriesFloat'), floatImg = $('img', float);
  $$('.s-row').forEach(r => {
    const head = $('.s-row__head', r);
    head.addEventListener('mouseenter', () => { floatImg.src = r.dataset.cover; float.classList.add('on'); });
    head.addEventListener('mouseleave', () => float.classList.remove('on'));
  });
  window.addEventListener('mousemove', e => { float.style.left = e.clientX + 'px'; float.style.top = e.clientY + 'px'; }, { passive: true });


  // About
  $('#aboutImg').src = SITE.about.portrait;
  $('#aboutIntro').textContent = SITE.about.intro;
  $('#aboutStatement').innerHTML = SITE.about.statement.map(p => `<p>${esc(p)}</p>`).join('');
  $('#aboutEdu').innerHTML = SITE.about.education.map(e => `<div><dt>${esc(e.school)}</dt><dd>${esc(e.degree)}</dd></div>`).join('');
  $('#aboutBg').textContent = SITE.about.background;
  $('#aboutCaption').textContent = SITE.about.caption || '';

  // Contact
  $('#contactBig').href = `mailto:${SITE.email}`;
  $('#contactEmail').href = `mailto:${SITE.email}`;
  $('#contactEmail').textContent = SITE.email;
  $('#contactIg').href = `https://instagram.com/${SITE.instagram}`;
  $('#contactIg').textContent = '@' + SITE.instagram;
  $('#year').textContent = new Date().getFullYear();

  /* ---------- 开场 & 进场动画 ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => { $('#intro').classList.add('done'); $('#hero').classList.add('ready'); }, 700);
  });
  setTimeout(() => { $('#intro').classList.add('done'); $('#hero').classList.add('ready'); }, 2500); // 保险

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  const observeReveal = root => $$('.rv:not(.in)', root).forEach(el => io.observe(el));
  observeReveal(document);

  // Philosophy 编号
  const num = $('#philoNum');
  const pio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) num.textContent = String(e.target.dataset.i).padStart(2, '0');
  }), { rootMargin: '-45% 0px -45% 0px' });
  $$('.philo__panel').forEach(p => pio.observe(p));

  // 轮换词
  const words = $$('#rotor span'); let wi = 0;
  setInterval(() => {
    words[wi].classList.remove('on'); words[wi].classList.add('off');
    const prev = words[wi]; setTimeout(() => prev.classList.remove('off'), 700);
    wi = (wi + 1) % words.length; words[wi].classList.add('on');
  }, 2200);

  // 导航高亮
  const links = $$('#navLinks a');
  const sio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-50% 0px -50% 0px' });
  $$('main section[id]').forEach(s => sio.observe(s));

  // 手机菜单
  $('#menuBtn').addEventListener('click', () => {
    const open = $('#nav').classList.toggle('menu-open');
    $('#menuBtn').textContent = open ? 'Close' : 'Menu';
  });
  links.forEach(a => a.addEventListener('click', () => { $('#nav').classList.remove('menu-open'); $('#menuBtn').textContent = 'Menu'; }));

  /* ---------- 作品详情页（#/work/xxx） ---------- */
  const project = $('#project'), inner = $('#projectInner');
  let lbList = [], lbIndex = 0;

  const imgTag = src => `<img src="${src}" alt="" loading="lazy">`;
  // 单张图自动交替大小：大(居中) → 中(靠右) → 中(靠左)，制造留白节奏
  // 也可以在 data.js 里手动指定 size: 'l' | 'm' | 's'，align: 'left' | 'right' | 'center'
  const RHYTHM = [{ size: 'l', align: 'center' }, { size: 'm', align: 'right' }, { size: 'm', align: 'left' }];
  let fullCount = 0;
  const renderBlock = b => {
    switch (b.type) {
      case 'text': return `<div class="b-text rv"><h3>${esc(b.title || '')}</h3><div>${(b.body || []).map(p => `<p>${esc(p)}</p>`).join('')}</div></div>`;
      case 'full': {
        const r = RHYTHM[fullCount++ % RHYTHM.length];
        const size = b.size || r.size, align = b.align || r.align;
        return `<div class="b b-full ${size} ${align} rv">${imgTag(b.src)}${b.caption ? `<p class="cap">${esc(b.caption)}</p>` : ''}</div>`;
      }
      case 'grid': return `<div class="b b-grid c${b.cols || 2} ${b.natural ? 'natural' : ''} rv">${b.srcs.map(imgTag).join('')}</div>`;
      case 'pair': return `<div class="b b-pair rv">${imgTag(b.srcs[0])}<div class="side">${b.srcs[1] ? imgTag(b.srcs[1]) : ''}${b.text ? `<p>${esc(b.text)}</p>` : ''}</div></div>`;
      case 'row': return `<div class="b b-row rv">${b.srcs.map(s => `<figure>${imgTag(s)}</figure>`).join('')}</div>${b.caption ? `<p class="b-row__cap">${esc(b.caption)}</p>` : ''}`;
      case 'quote': return `<blockquote class="b-quote rv">“${esc(b.body)}”</blockquote>`;
      case 'video': {
        let src = '';
        if (b.youtube) src = `https://www.youtube-nocookie.com/embed/${b.youtube}`;
        else if (b.vimeo) src = `https://player.vimeo.com/video/${b.vimeo}?dnt=1`;
        const player = src
          ? `<div class="b-video"><iframe src="${src}" title="${esc(b.title || 'Video')}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" loading="lazy"></iframe></div>`
          : b.mp4
            ? `<div class="b-video"><video src="${b.mp4}" ${b.poster ? `poster="${b.poster}"` : ''} controls playsinline preload="none"></video></div>`
            : `<div class="b-video empty"><img src="${b.poster || ''}" alt=""><span>${esc(b.note || 'Video coming soon')}</span></div>`;
        return `<section class="b b-vid rv">
          <div class="b-vid__head"><span class="label">${esc(b.label || 'Moving Image')}</span>${b.meta ? `<span class="b-vid__meta">${esc(b.meta)}</span>` : ''}</div>
          ${player}
        </section>`;
      }
      default: return '';
    }
  };

  function openWork(slug) {
    const i = WORKS.findIndex(w => w.slug === slug);
    if (i < 0) return closeWork();
    const w = WORKS[i], s = seriesOf(w.series), next = WORKS[(i + 1) % WORKS.length];
    $('#projectCrumb').textContent = `${s.id} ${s.title} / ${w.no}`;
    inner.innerHTML = `
      <header class="p-head">
        <div><span class="p-head__no">${s.id}.${w.no} — ${esc(s.kind)}</span><h1 class="p-head__title">${esc(w.title)}</h1></div>
        <p class="p-head__tags">${esc(w.tags || '')}</p>
      </header>
      <img class="p-cover" src="${w.cover}" alt="${esc(w.title)}">
      <section class="p-credits">
        <span class="label">${w.year}</span>
        <dl>${w.credits.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      </section>
      ${(fullCount = 0, w.blocks.filter(b => !(b.type === 'full' && b.src === w.cover)).map(renderBlock).join(''))}
      <a class="p-next" href="#/work/${next.slug}"><small>Next work — ${next.series}.${next.no}</small><strong>${esc(next.title)} →</strong></a>`;
    project.classList.add('open'); project.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
    project.scrollTop = 0;
    observeReveal(inner);
    // 同一行里的图片按原比例分配宽度，让高度对齐、不裁切
    $$('.b-row img', inner).forEach(im => {
      const fit = () => { if (im.naturalWidth) im.parentElement.style.flex = `${im.naturalWidth / im.naturalHeight} 1 0`; };
      im.complete ? fit() : im.addEventListener('load', fit);
    });
    lbList = $$('img:not(.b-video img)', inner).map(im => im.getAttribute('src'));
    document.title = `${w.title} — Ming Lu 路铭`;
  }
  function closeWork() {
    project.classList.remove('open'); project.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
    document.title = 'Ming Lu 路铭 — How to See, How to Be Seen';
  }
  function route() {
    const m = location.hash.match(/^#\/work\/(.+)$/);
    if (m) openWork(decodeURIComponent(m[1]));
    else if (project.classList.contains('open')) closeWork();
  }
  window.addEventListener('hashchange', route);
  route();
  $('#projectClose').addEventListener('click', e => { e.preventDefault(); history.pushState('', '', '#works'); closeWork(); $('#works').scrollIntoView(); });

  /* ---------- 大图浏览 ---------- */
  const lb = $('#lightbox'), lbImg = $('#lbImg');
  const showLb = () => { lbImg.src = lbList[lbIndex]; $('#lbCount').textContent = `${lbIndex + 1} / ${lbList.length}`; };
  inner.addEventListener('click', e => {
    const im = e.target.closest('img'); if (!im) return;
    lbIndex = lbList.indexOf(im.getAttribute('src')); if (lbIndex < 0) return; showLb(); lb.classList.add('open');
  });
  const lbMove = d => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); };
  $('#lbPrev').addEventListener('click', () => lbMove(-1));
  $('#lbNext').addEventListener('click', () => lbMove(1));
  $('#lbClose').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  window.addEventListener('keydown', e => {
    if (lb.classList.contains('open')) {
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowLeft') lbMove(-1);
      if (e.key === 'ArrowRight') lbMove(1);
    } else if (project.classList.contains('open') && e.key === 'Escape') {
      $('#projectClose').click();
    }
  });
})();
