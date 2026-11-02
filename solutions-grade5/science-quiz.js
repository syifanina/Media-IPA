// Slide 8: the exact bilingual question bank supplied for this presentation.
(() => {
  const questions = [
  {
    "en": "Which substance can dissolve in water?",
    "id": "Zat manakah yang dapat larut dalam air?",
    "options": [
      "Sand / Pasir",
      "Sugar / Gula",
      "Stone / Batu",
      "Plastic / Plastik"
    ],
    "answer": 1
  },
  {
    "en": "What does \"soluble\" mean?",
    "id": "Apa arti \"soluble\"?",
    "options": [
      "Cannot dissolve / Tidak dapat larut",
      "Can dissolve / Dapat larut",
      "Can float / Dapat mengapung",
      "Can sink / Dapat tenggelam"
    ],
    "answer": 1
  },
  {
    "en": "Which substance is insoluble in water?",
    "id": "Zat manakah yang tidak larut dalam air?",
    "options": [
      "Salt / Garam",
      "Sugar / Gula",
      "Sand / Pasir",
      "Baking soda / Soda kue"
    ],
    "answer": 2
  },
  {
    "en": "What happens when sugar is mixed with enough water and stirred?",
    "id": "Apa yang terjadi ketika gula dicampur dengan air yang cukup dan diaduk?",
    "options": [
      "It dissolves / Gula larut",
      "It becomes sand / Gula menjadi pasir",
      "It becomes stone / Gula menjadi batu",
      "It turns into oil / Gula berubah menjadi minyak"
    ],
    "answer": 0
  },
  {
    "en": "What do we call sugar mixed and completely dissolved in water?",
    "id": "Apa sebutan untuk gula yang tercampur dan larut sempurna dalam air?",
    "options": [
      "Solid / Padatan",
      "Solution / Larutan",
      "Gas / Gas",
      "Ice / Es"
    ],
    "answer": 1
  },
  {
    "en": "Which substance is the solvent in salt water?",
    "id": "Zat manakah yang merupakan pelarut dalam air garam?",
    "options": [
      "Salt / Garam",
      "Sugar / Gula",
      "Water / Air",
      "Sand / Pasir"
    ],
    "answer": 2
  },
  {
    "en": "What happens to sand when mixed with water and left to stand?",
    "id": "Apa yang terjadi pada pasir ketika dicampur dengan air lalu didiamkan?",
    "options": [
      "It dissolves / Pasir larut",
      "It becomes sugar / Pasir menjadi gula",
      "It disappears / Pasir menghilang",
      "It settles at the bottom / Pasir mengendap di dasar"
    ],
    "answer": 3
  },
  {
    "en": "Which mixture forms a solution when the solid dissolves completely?",
    "id": "Campuran manakah yang membentuk larutan ketika zat padatnya larut sempurna?",
    "options": [
      "Sand + Water / Pasir + Air",
      "Stones + Water / Batu + Air",
      "Salt + Water / Garam + Air",
      "Plastic + Water / Plastik + Air"
    ],
    "answer": 2
  },
  {
    "en": "What can make sugar dissolve faster in water?",
    "id": "Apa yang dapat membuat gula lebih cepat larut dalam air?",
    "options": [
      "Stirring / Mengaduk",
      "Leaving it still / Membiarkannya diam",
      "Adding sand / Menambahkan pasir",
      "Adding stones / Menambahkan batu"
    ],
    "answer": 0
  },
  {
    "en": "In which water does sugar usually dissolve faster?",
    "id": "Dalam air manakah gula biasanya lebih cepat larut?",
    "options": [
      "Cold water / Air dingin",
      "Ice water / Air es",
      "Warm water / Air hangat",
      "Chilled water / Air yang didinginkan"
    ],
    "answer": 2
  },
  {
    "en": "Which action helps sugar dissolve faster in tea?",
    "id": "Tindakan manakah yang membantu gula lebih cepat larut dalam teh?",
    "options": [
      "Covering the cup / Menutup gelas",
      "Stirring with a spoon / Mengaduk dengan sendok",
      "Leaving the cup still / Membiarkan gelas diam",
      "Adding ice cubes / Menambahkan es batu"
    ],
    "answer": 1
  },
  {
    "en": "Which sugar usually dissolves faster when equal amounts are used?",
    "id": "Gula manakah yang biasanya lebih cepat larut jika jumlahnya sama?",
    "options": [
      "Large sugar cube / Gula batu besar",
      "Small sugar cube / Gula batu kecil",
      "Granulated sugar / Gula pasir",
      "Large sugar crystals / Kristal gula besar"
    ],
    "answer": 2
  },
  {
    "en": "What happens to the dissolving speed of sugar when the water temperature increases?",
    "id": "Apa yang terjadi pada kecepatan pelarutan gula ketika suhu air meningkat?",
    "options": [
      "It usually becomes faster / Biasanya menjadi lebih cepat",
      "It always stops / Selalu berhenti",
      "It becomes slower / Menjadi lebih lambat",
      "Sugar becomes insoluble / Gula menjadi tidak larut"
    ],
    "answer": 0
  },
  {
    "en": "Which of these affects how fast sugar dissolves?",
    "id": "Manakah yang memengaruhi kecepatan gula larut?",
    "options": [
      "Colour of the glass / Warna gelas",
      "Shape of the table / Bentuk meja",
      "Colour of the spoon / Warna sendok",
      "Water temperature / Suhu air"
    ],
    "answer": 3
  },
  {
    "en": "A student wants to dissolve sugar quickly. What should the student do?",
    "id": "Seorang siswa ingin melarutkan gula dengan cepat. Apa yang sebaiknya dilakukan?",
    "options": [
      "Use cold water without stirring / Menggunakan air dingin tanpa mengaduk",
      "Use warm water and stir / Menggunakan air hangat dan mengaduk",
      "Add sand to the water / Menambahkan pasir ke air",
      "Use ice water and leave it still / Menggunakan air es dan membiarkannya diam"
    ],
    "answer": 1
  }
];
  const root = document.querySelector('#science-quiz-slide');
  root.innerHTML = `<div class="sq-canvas"><div class="sq-board">
    <header class="sq-header"><p>GRADE 5 SCIENCE / SAINS KELAS 5</p><h1>SCIENCE QUIZ TIME!</h1><p>WAKTUNYA KUIS SAINS!</p></header>
    <section class="sq-welcome">
      <div class="sq-beakers" aria-hidden="true"><svg viewBox="0 0 400 140"><g stroke="#739cc5" stroke-width="5" stroke-linejoin="round"><path d="M44 20h100l-12 100q-38 12-76 0Z" fill="#e8f7ff"/><path d="m51 65 7 53q36 11 72 0l7-53Z" fill="#b4e4f7"/><path d="M268 10h48v42l48 64q5 16-12 16H232q-17 0-12-16l48-64Z" fill="#e8f7ff"/><path d="m249 83-24 33q-5 11 8 11h118q12 0 7-11l-24-33Z" fill="#b9ead4"/></g><g fill="white"><circle cx="83" cy="91" r="6"/><circle cx="110" cy="105" r="4"/><circle cx="280" cy="104" r="6"/><circle cx="317" cy="113" r="4"/></g><path d="m195 35 8 21 22 8-22 8-8 22-8-22-22-8 22-8Z" fill="#f6d66a"/></svg></div>
      <h2>SOLUBLE & INSOLUBLE SUBSTANCES<span>ZAT YANG LARUT & TIDAK LARUT</span></h2>
      <h3>WHAT MAKES SUBSTANCES DISSOLVE FASTER?<span>APA YANG MEMBUAT ZAT LEBIH CEPAT LARUT?</span></h3>
      <p class="sq-rules">15 Questions / 15 Soal <b>•</b> 10 points each / 10 poin per soal</p>
      <button class="sq-primary" data-start type="button">START QUIZ / MULAI KUIS →</button>
    </section>
    <section class="sq-play" hidden>
      <div class="sq-meta"><span class="sq-progress"></span><span class="sq-score"></span></div>
      <progress class="sq-progressbar" max="15" value="0" aria-label="Quiz progress / Kemajuan kuis"></progress>
      <div class="sq-question" tabindex="-1"><h2></h2><p lang="id"></p></div>
      <div class="sq-options"></div>
      <div class="sq-bottom"><p class="sq-feedback" role="status" aria-live="polite"></p><button class="sq-primary" data-next type="button" disabled>NEXT QUESTION / SOAL BERIKUTNYA →</button></div>
      <div class="sq-stars" aria-hidden="true" hidden>✦ ★ ✧ ★ ✦</div>
    </section>
    <section class="sq-finish" hidden>
      <div class="sq-trophy" aria-hidden="true">★</div><h2>QUIZ COMPLETED! / KUIS SELESAI!</h2>
      <h3 class="sq-message"></h3><p class="sq-total-correct"></p><p class="sq-total-score"></p>
      <progress class="sq-resultbar" max="150" value="0" aria-label="Total score / Total skor"></progress>
      <button class="sq-primary" data-replay type="button">PLAY AGAIN / MAIN LAGI ↻</button>
    </section>
    <p class="sq-footnote">Think, choose, discover! / Pikirkan, pilih, temukan!</p>
  </div></div>`;
  root.querySelector('.sq-canvas').prepend(document.querySelector('.quiz-decor').cloneNode(true));
  const $ = selector => root.querySelector(selector);
  let index = 0, correctCount = 0, locked = false;
  function renderQuestion() {
    locked = false;
    const question = questions[index];
    $('.sq-progress').textContent = `Question ${index + 1} of 15 / Soal ${index + 1} dari 15`;
    $('.sq-score').textContent = `Score / Skor: ${correctCount * 10} / 150`;
    $('.sq-progressbar').value = index;
    $('.sq-question h2').textContent = question.en;
    $('.sq-question p').textContent = question.id;
    $('.sq-feedback').textContent = '';
    $('.sq-feedback').className = 'sq-feedback';
    $('.sq-stars').hidden = true;
    $('[data-next]').disabled = true;
    $('[data-next]').textContent = index === 14 ? 'SEE RESULTS / LIHAT HASIL →' : 'NEXT QUESTION / SOAL BERIKUTNYA →';
    $('.sq-options').replaceChildren();
    question.options.forEach((option, choice) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'sq-option';
      const [en, id] = option.split(' / ');
      const letter = document.createElement('b'); letter.textContent = 'ABCD'[choice];
      const copy = document.createElement('span'); copy.textContent = en;
      const translation = document.createElement('small'); translation.lang = 'id'; translation.textContent = id;
      copy.append(translation); button.append(letter, copy);
      button.addEventListener('click', () => answer(choice));
      $('.sq-options').append(button);
    });
    $('.sq-question').focus({ preventScroll: true });
  }
  function answer(choice) {
    if (locked) return;
    locked = true;
    const correct = choice === questions[index].answer;
    if (correct) correctCount += 1;
    const buttons = $('.sq-options').querySelectorAll('button');
    buttons.forEach((button, i) => {
      button.disabled = true;
      if (i === questions[index].answer) button.classList.add('sq-correct');
      else if (i === choice) button.classList.add('sq-wrong');
      if (i === choice) button.setAttribute('aria-pressed', 'true');
    });
    const key = questions[index].answer;
    $('.sq-feedback').textContent = correct ? '✓ Correct! / Benar! +10' : `✕ Not quite! / Belum tepat! ✓ ${'ABCD'[key]}: ${questions[index].options[key]}`;
    $('.sq-feedback').className = `sq-feedback ${correct ? 'sq-positive' : 'sq-negative'}`;
    $('.sq-score').textContent = `Score / Skor: ${correctCount * 10} / 150`;
    $('.sq-progressbar').value = index + 1;
    $('.sq-stars').hidden = !correct;
    $('[data-next]').disabled = false;
    $('[data-next]').focus({ preventScroll: true });
  }
  function start() {
    index = 0; correctCount = 0; locked = false;
    $('.sq-welcome').hidden = true; $('.sq-finish').hidden = true; $('.sq-play').hidden = false;
    $('.sq-resultbar').value = 0;
    renderQuestion();
  }
  function finish() {
    $('.sq-play').hidden = true; $('.sq-finish').hidden = false;
    $('.sq-total-correct').textContent = `Correct answers / Jawaban benar: ${correctCount} / 15`;
    $('.sq-total-score').textContent = `Total score / Total skor: ${correctCount * 10} / 150`;
    $('.sq-resultbar').value = correctCount * 10;
    $('.sq-message').textContent = correctCount >= 13 ? 'AMAZING SCIENTIST! / ILMUWAN HEBAT!' : correctCount >= 10 ? 'GREAT JOB! / KERJA BAGUS!' : correctCount >= 7 ? 'GOOD TRY! / USAHA YANG BAGUS!' : 'KEEP PRACTICING! / TERUS BERLATIH!';
    $('[data-replay]').focus({ preventScroll: true });
  }
  $('[data-start]').addEventListener('click', start);
  $('[data-replay]').addEventListener('click', start);
  $('[data-next]').addEventListener('click', () => {
    if (!locked) return;
    if (index === 14) finish();
    else { index += 1; renderQuestion(); }
  });
  // Native buttons support Enter/Space; A–D also select an answer on this slide.
  root.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey || $('.sq-play').hidden) return;
    const choice = 'abcd'.indexOf(event.key.toLowerCase());
    if (choice >= 0 && event.key.length === 1) { event.preventDefault(); answer(choice); }
  });
  const stage = document.querySelector('.stage');
  function fit() {
    const scale = Math.min(stage.clientWidth / 1600, stage.clientHeight / 900);
    root.style.width = `${1600 * scale}px`; root.style.height = `${900 * scale}px`;
    $('.sq-canvas').style.transform = `scale(${scale})`;
  }
  new ResizeObserver(fit).observe(stage); fit();
})();
