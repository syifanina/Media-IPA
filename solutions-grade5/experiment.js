// Slide 7 only. All durations below are illustrative simulation seconds.
(() => {
  const root = document.querySelector('#experiment-slide');
  root.innerHTML = `<div class="exp-canvas">
    <div class="exp-board">
      <header class="exp-header">
        <p>SCIENCE EXPERIMENT 2 / PERCOBAAN SAINS 2</p>
        <h1 id="experiment-title">WHICH DISSOLVES FASTER?</h1>
        <h2>MANAKAH YANG LEBIH CEPAT LARUT?</h2>
        <div class="exp-question">Does sugar dissolve faster in warm water or cold water?<span>Apakah gula lebih cepat larut dalam air hangat atau air dingin?</span></div>
      </header>
      <div class="exp-lab">
        <article class="exp-glass-card exp-warm" data-glass="warm"></article>
        <article class="exp-glass-card exp-cold" data-glass="cold"></article>
        <aside class="exp-results-panel">
          <div class="exp-wait"><span class="exp-big-star" aria-hidden="true">✦</span><h3>Watch & compare!<span>Amati & bandingkan!</span></h3><p>Same sugar, water volume,<br>and stirring speed.<span>Gula, volume air, dan<br>kecepatan aduk sama.</span></p></div>
          <div class="exp-results" hidden>
            <h3>EXPERIMENT RESULTS<span>HASIL PERCOBAAN</span></h3>
            <p class="exp-result-time">Warm / Hangat <strong>20 s</strong><br>Cold / Dingin <strong>45 s</strong></p>
            <p class="exp-note">Simulation Time / Waktu Simulasi</p>
            <h4>Which dissolves sugar faster?<span>Manakah yang melarutkan gula lebih cepat?</span></h4>
            <button type="button" data-answer="warm" aria-pressed="false">A. Warm Water / Air Hangat</button>
            <button type="button" data-answer="cold" aria-pressed="false">B. Cold Water / Air Dingin</button>
            <p class="exp-feedback" role="status" aria-live="polite"></p>
          </div>
        </aside>
      </div>
      <div class="exp-controls">
        <button type="button" data-action="add">ADD SUGAR<span>TAMBAHKAN GULA</span></button>
        <button type="button" data-action="start" disabled>START & STIR<span>MULAI & ADUK</span></button>
        <button type="button" data-action="reset">RESET<span>ULANGI</span></button>
        <button type="button" data-action="speed" aria-pressed="true">4×<span>Playback / Pemutaran</span></button>
      </div>
      <p class="exp-status" role="status" aria-live="polite">Add equal sugar portions to begin. / Tambahkan gula dengan takaran sama untuk memulai.</p>
      <div class="exp-conclusion" hidden><strong>SCIENCE CONCLUSION / KESIMPULAN</strong><p>Sugar usually dissolves faster in warm water than in cold water.<span>Gula biasanya larut lebih cepat dalam air hangat dibandingkan air dingin.</span></p></div>
      <p class="exp-disclaimer">Illustrative simulation, not real measurements. / Simulasi ilustratif, bukan hasil pengukuran nyata.</p>
    </div></div>`;
  // Reuse the existing vector decorations without modifying the earlier slide.
  const decor = document.querySelector('.quiz-decor').cloneNode(true);
  root.querySelector('.exp-canvas').prepend(decor);
  const $ = (selector) => root.querySelector(selector);
  const cards = ['warm', 'cold'].map((kind) => {
    const card = $(`[data-glass="${kind}"]`);
    const warm = kind === 'warm';
    card.innerHTML = `<h3>${warm ? 'WARM WATER / AIR HANGAT' : 'COLD WATER / AIR DINGIN'}</h3>
      <div class="exp-temperature"><svg viewBox="0 0 24 44" aria-hidden="true"><path d="M8 27V8a4 4 0 0 1 8 0v19a9 9 0 1 1-8 0Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12 12v22" stroke="currentColor" stroke-width="4"/><circle cx="12" cy="34" r="5" fill="currentColor"/></svg>${warm ? '50' : '15'}°C ${warm ? '' : '<span aria-hidden="true">❄</span>'}</div>
      <div class="exp-clock"><output aria-label="${warm ? 'Warm water / Air hangat' : 'Cold water / Air dingin'}">00:00</output><span>Simulation Time / Waktu Simulasi</span></div>
      <svg class="exp-glass" viewBox="0 0 360 250" role="img" aria-label="${warm ? 'Warm water / Air hangat' : 'Cold water / Air dingin'}: 100 mL">
        ${warm ? '<g class="exp-steam" fill="none" stroke="#d5a780" stroke-width="4" stroke-linecap="round"><path d="M132 53q-15-12 0-24t0-23"/><path d="M178 48q-15-12 0-24t0-23"/><path d="M222 53q-15-12 0-24t0-23"/></g>' : ''}
        <path d="M78 66 96 222Q180 247 264 222L282 66" fill="#edfaff" fill-opacity=".7" stroke="#729bc4" stroke-width="5"/>
        <path d="M84 113 99 219Q180 241 261 219L276 113Z" fill="#b4e4f7" fill-opacity=".85"/>
        <ellipse cx="180" cy="113" rx="96" ry="14" fill="#d8f5ff"/>
        <g class="exp-spoon" fill="#d0dce9" stroke="#729bc4" stroke-width="3"><path d="m202 29-15 145h-10l13-145q7-9 12 0Z"/><ellipse cx="181" cy="182" rx="13" ry="22"/></g>
        <g class="exp-particles"></g>
        <ellipse cx="180" cy="66" rx="102" ry="17" fill="none" stroke="#729bc4" stroke-width="5"/>
        <path d="m99 87 7 70" stroke="white" stroke-width="7" stroke-linecap="round"/>
        <path d="M241 114h26M244 143h20M247 172h15" stroke="#729bc4" stroke-width="3"/>
        <text x="180" y="151" text-anchor="middle" fill="#335c83" font-size="22" font-weight="bold">100 mL</text>
      </svg>
      <p class="exp-glass-status">Ready / Siap</p>`;
    const particles = Array.from({ length: 24 }, (_, i) => {
      const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      particle.setAttribute('fill', '#fff'); particle.setAttribute('stroke', '#82a9c9'); particle.setAttribute('stroke-width', '.7');
      card.querySelector('.exp-particles').append(particle);
      return { node: particle, x: 115 + (i * 37 % 130), y: 202 + (i * 7 % 17), delay: (i % 6) * .08 };
    });
    return { card, particles, duration: warm ? 20 : 45, clock: card.querySelector('output'), spoon: card.querySelector('.exp-spoon'), status: card.querySelector('.exp-glass-status') };
  });
  let phase = 'empty', elapsed = 0, speed = 4, last = null, frame = null;
  const results = $('.exp-results');
  function render() {
    cards.forEach(({ particles, duration, clock, spoon, status }) => {
      const t = Math.min(elapsed, duration);
      const progress = phase === 'running' || phase === 'done' ? t / duration : 0;
      clock.textContent = `00:${String(Math.floor(phase === 'running' || phase === 'done' ? t : 0)).padStart(2, '0')}`;
      spoon.setAttribute('transform', phase === 'running' && t < duration ? `translate(${Math.sin(elapsed * 5) * 20} 0)` : 'translate(0 0)');
      particles.forEach(({ node, x, y, delay }, i) => {
        const falling = phase === 'adding' ? Math.max(0, Math.min(1, (elapsed - delay) / .55)) : 1;
        const dispersed = progress > 0 ? Math.min(1, progress * 4) : 0;
        node.setAttribute('cx', x + Math.sin(elapsed * 3 + i) * 10 * dispersed);
        node.setAttribute('cy', phase === 'adding' ? 8 + (y - 8) * falling : y - (20 + i % 7 * 9) * dispersed);
        node.setAttribute('r', phase === 'empty' ? 0 : 4.5 * (1 - progress));
        node.setAttribute('opacity', phase === 'adding' && elapsed < delay ? 0 : 1);
      });
      status.textContent = phase === 'empty' ? 'Ready / Siap' : phase === 'adding' ? 'Adding sugar / Menambahkan gula' : phase === 'ready' ? 'Sugar added / Gula ditambahkan' : progress === 1 ? 'Dissolved / Sudah larut' : 'Stirring / Sedang diaduk';
    });
  }
  function active() { return !root.hidden && !document.hidden && (phase === 'adding' || phase === 'running'); }
  function tick(now) {
    frame = null;
    if (!active()) { last = null; return; }
    if (last !== null) elapsed += (now - last) / 1000 * (phase === 'adding' ? 1 : speed);
    last = now;
    if (phase === 'adding' && elapsed >= 1) {
      phase = 'ready'; elapsed = 0; $('[data-action="start"]').disabled = false;
      $('.exp-status').textContent = 'Now start & stir! / Sekarang mulai & aduk!';
    } else if (phase === 'running' && elapsed >= 45) {
      phase = 'done'; elapsed = 45; results.hidden = false; $('.exp-wait').hidden = true;
      $('.exp-status').textContent = 'Compare the times, then choose an answer. / Bandingkan waktunya, lalu pilih jawaban.';
    }
    render();
    if (active()) frame = requestAnimationFrame(tick);
  }
  function resume() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null; last = null;
    if (active()) frame = requestAnimationFrame(tick);
  }
  function reset() {
    phase = 'empty'; elapsed = 0; resume();
    $('[data-action="add"]').disabled = false; $('[data-action="start"]').disabled = true;
    results.hidden = true; $('.exp-wait').hidden = false; $('.exp-conclusion').hidden = true;
    $('.exp-feedback').textContent = ''; $('.exp-feedback').className = 'exp-feedback';
    root.querySelectorAll('[data-answer]').forEach(b => b.setAttribute('aria-pressed', 'false'));
    $('.exp-status').textContent = 'Add equal sugar portions to begin. / Tambahkan gula dengan takaran sama untuk memulai.';
    render();
  }
  $('[data-action="add"]').addEventListener('click', () => {
    if (phase !== 'empty') return;
    phase = 'adding'; elapsed = 0; $('[data-action="add"]').disabled = true;
    render(); resume();
  });
  $('[data-action="start"]').addEventListener('click', () => {
    if (phase !== 'ready') return;
    phase = 'running'; elapsed = 0; $('[data-action="start"]').disabled = true;
    $('.exp-status').textContent = 'Observe both glasses. / Amati kedua gelas.';
    resume();
  });
  $('[data-action="reset"]').addEventListener('click', reset);
  $('[data-action="speed"]').addEventListener('click', (event) => {
    speed = speed === 4 ? 1 : 4;
    event.currentTarget.innerHTML = `${speed}×<span>Playback / Pemutaran</span>`;
    event.currentTarget.setAttribute('aria-pressed', String(speed === 4));
  });
  root.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    if (phase !== 'done') return;
    const correct = button.dataset.answer === 'warm';
    root.querySelectorAll('[data-answer]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    $('.exp-feedback').textContent = correct ? '✓ Excellent! / Hebat! ★' : '✕ Try Again! / Coba Lagi!';
    $('.exp-feedback').className = `exp-feedback ${correct ? 'exp-success' : 'exp-retry'}`;
    $('.exp-conclusion').hidden = !correct;
  }));
  document.addEventListener('experimentvisibility', resume);
  document.addEventListener('visibilitychange', resume);
  const stage = document.querySelector('.stage');
  function fit() {
    const scale = Math.min(stage.clientWidth / 1600, stage.clientHeight / 900);
    root.style.width = `${1600 * scale}px`; root.style.height = `${900 * scale}px`;
    $('.exp-canvas').style.transform = `scale(${scale})`;
  }
  new ResizeObserver(fit).observe(stage); fit(); reset();
})();
