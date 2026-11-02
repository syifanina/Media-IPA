// Tambahkan nama file di sini saat slide berikutnya sudah tersedia.
const slides = [
    'slides/slide-1.png',
    'slides/slide-2.png',
    'slides/slide-3.png',
    { type: 'youtube', id: 'rkRZrmoJ2C0' },
    { type: 'quiz' },
    'slides/slide-6.png',
    { type: 'experiment' },
    { type: 'science-quiz' },
];

const slide = document.querySelector('#slide');
const videoSlide = document.querySelector('#video-slide');
const video = document.querySelector('#video');
const quizSlide = document.querySelector('#quiz-slide');
const counter = document.querySelector('#counter');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const fullscreen = document.querySelector('#fullscreen');
const error = document.querySelector('#error');
const stage = document.querySelector('.stage');
let current = 0;

const dots = slides.map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Buka slide ${index + 1}`);
    button.addEventListener('click', () => showSlide(index));
    document.querySelector('#dots').append(button);
    return button;
});

function showSlide(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    error.hidden = true;
    const item = slides[current];
    const isVideo = item.type === 'youtube';
    const isQuiz = item.type === 'quiz';
    const isExperiment = item.type === 'experiment';
    document.querySelector('#experiment-slide').hidden = !isExperiment;
    document.dispatchEvent(new CustomEvent('experimentvisibility', { detail: isExperiment }));
    const isScienceQuiz = item.type === 'science-quiz';
    document.querySelector('#science-quiz-slide').hidden = !isScienceQuiz;
    slide.hidden = isVideo || isQuiz || isExperiment || isScienceQuiz;
    quizSlide.hidden = !isQuiz;
    videoSlide.hidden = !isVideo;
    if (isVideo) {
        const url = `https://www.youtube.com/embed/${item.id}?rel=0`;
        if (video.getAttribute('src') !== url) video.src = url;
    } else {
        // Unload the player so audio stops when leaving the video slide.
        video.removeAttribute('src');
        if (!isQuiz && !isExperiment && !isScienceQuiz) {
            slide.src = item;
            slide.alt = `Slide ${current + 1}`;
        }
    }
    counter.textContent = `${current + 1} / ${slides.length}`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    dots.forEach((button, index) => button.setAttribute('aria-current', String(index === current)));
}

slide.addEventListener('error', () => { error.hidden = slide.hidden; });
slide.addEventListener('load', () => { error.hidden = true; });
previous.addEventListener('click', () => showSlide(current - 1));
next.addEventListener('click', () => showSlide(current + 1));

async function toggleFullscreen() {
    try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
    } catch {
        fullscreen.textContent = 'Fullscreen tidak tersedia';
    }
}
fullscreen.hidden = !document.fullscreenEnabled;
fullscreen.addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? 'Keluar layar penuh ⛶' : 'Layar penuh ⛶';
});
document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest('button, a') && (event.key === ' ' || event.key === 'Enter')) return;
    switch (event.key) {
        case 'ArrowRight': case 'PageDown': case ' ': showSlide(current + 1); break;
        case 'ArrowLeft': case 'PageUp': showSlide(current - 1); break;
        case 'Home': showSlide(0); break;
        case 'End': showSlide(slides.length - 1); break;
        case 'f': case 'F': if (document.fullscreenEnabled) toggleFullscreen(); break;
        default: return;
    }
    event.preventDefault();
});

let touchStart = null;
stage.addEventListener('touchstart', (event) => {
    touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
}, { passive: true });
stage.addEventListener('touchend', (event) => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showSlide(current + (dx < 0 ? 1 : -1));
    touchStart = null;
}, { passive: true });
stage.addEventListener('touchcancel', () => { touchStart = null; });

// A fixed 16:9 canvas keeps all five questions visible at every screen size.
function fitQuiz() {
    const scale = Math.min(stage.clientWidth / 1600, stage.clientHeight / 900);
    quizSlide.style.width = `${1600 * scale}px`;
    quizSlide.style.height = `${900 * scale}px`;
    quizSlide.querySelector('.quiz-canvas').style.transform = `scale(${scale})`;
}
new ResizeObserver(fitQuiz).observe(stage);
fitQuiz();

const questions = [
    ['Sugar is soluble in water.', 'Gula dapat larut dalam air.', true],
    ['Sand dissolves completely when mixed with water.', 'Pasir larut sepenuhnya ketika dicampur dengan air.', false],
    ['Salt can dissolve in water and form a solution.', 'Garam dapat larut dalam air dan membentuk larutan.', true],
    ['When sugar dissolves, it disappears completely and no longer exists.', 'Ketika gula larut, gula menghilang sepenuhnya dan tidak ada lagi.', false],
    ['Sand can be separated from water using filtration.', 'Pasir dapat dipisahkan dari air menggunakan penyaringan.', true],
];
const quizGrid = document.querySelector('#quiz-questions');
questions.forEach(([english, indonesian, answer], index) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.innerHTML = `<div class="question-copy"><span class="question-number">${index + 1}</span><h3>${english}</h3><p lang="id">${indonesian}</p></div><div class="answer-row"><button type="button" aria-pressed="false">TRUE / BENAR</button><button type="button" aria-pressed="false">FALSE / SALAH</button></div><p class="quiz-feedback" role="status" aria-live="polite"></p>`;
    const buttons = card.querySelectorAll('button');
    buttons.forEach((button, option) => {
        button.setAttribute('aria-label', `Question / Soal ${index + 1}: ${button.textContent}`);
        button.addEventListener('click', () => {
            const correct = (option === 0) === answer;
            buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
            card.dataset.result = correct ? 'correct' : 'incorrect';
            card.querySelector('.quiz-feedback').textContent = correct ? '✓ Correct! / Benar!' : '✕ Try Again! / Coba Lagi!';
        });
    });
    quizGrid.append(card);
});

function glassIllustration(kind) {
    const particles = kind === 'sand'
        ? '<path d="M34 112Q49 98 64 110T112 110L109 125Q70 137 37 125Z" fill="#edce82"/><g fill="#bf9a52"><circle cx="48" cy="118" r="2"/><circle cx="74" cy="114" r="2"/><circle cx="94" cy="122" r="2"/></g>'
        : '<g fill="white"><circle cx="50" cy="88" r="3"/><circle cx="87" cy="102" r="3"/><circle cx="67" cy="119" r="3"/><circle cx="100" cy="82" r="3"/><circle cx="71" cy="75" r="3"/></g><path d="m65 12 12 3-3 12-12-3Z" fill="white" stroke="#7fa6cc" stroke-width="2"/><path d="M70 33v16m-6-6 6 6 6-6" fill="none" stroke="#7fa6cc" stroke-width="3"/>';
    return `<svg viewBox="0 0 145 150" aria-hidden="true"><path d="m26 58 10 67q36 17 74 0l10-67" fill="#e9f7ff" stroke="#7fa6cc" stroke-width="4"/><path d="m31 78 7 44q36 13 70 0l7-44Z" fill="#b4e4f7"/><ellipse cx="73" cy="78" rx="42" ry="8" fill="#ccefff"/>${particles}<ellipse cx="73" cy="57" rx="47" ry="10" fill="none" stroke="#7fa6cc" stroke-width="4"/><path d="m40 86 3 20" stroke="white" stroke-width="5" stroke-linecap="round"/></svg>`;
}
const illustrations = document.createElement('aside');
illustrations.className = 'quiz-illustrations';
illustrations.setAttribute('aria-label', 'Science illustrations / Ilustrasi sains');
illustrations.innerHTML = [['sugar', 'Sugar dissolving', 'Gula melarut'], ['sand', 'Sand settling', 'Pasir mengendap'], ['salt', 'Salt dissolving', 'Garam melarut']].map(([kind, en, id]) => `<figure>${glassIllustration(kind)}<figcaption>${en}<span lang="id">${id}</span></figcaption></figure>`).join('');
quizGrid.append(illustrations);
document.querySelector('#reset-quiz').addEventListener('click', () => {
    quizGrid.querySelectorAll('.question-card').forEach((card) => {
        delete card.dataset.result;
        card.querySelector('.quiz-feedback').textContent = '';
        card.querySelectorAll('button').forEach((button) => button.setAttribute('aria-pressed', 'false'));
    });
});

showSlide(0);
slides.filter((item) => typeof item === 'string').forEach((src) => { const image = new Image(); image.src = src; });
