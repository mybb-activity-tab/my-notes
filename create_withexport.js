// ==== PERPLEXITY AUTOPILOT — скачивает после любых выбранных сообщений ====
const PROMPTS = [
  `один`
  `второй`
];

// Укажи индексы (считаем с 0), после которых нужно скачать .md 
const DOWNLOAD_AFTER_THESE = [7,8]; // ← меняй как хочешь
let currentIndex = 0;

const inputField = () => document.querySelector('[contenteditable="true"][data-lexical-editor="true"]');
const sendBtn = () => document.querySelector('button[data-testid="submit-button"]:not([disabled])');
const stopBtn = () => document.querySelector('button[data-testid="stop-generating-response-button"]');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function typeText(text) {
  const field = inputField();
  if (!field) return console.error("Поле ввода не найдено");
  field.focus(); field.innerHTML = '';
  document.execCommand('insertText', false, text);
  ['input', 'keyup', 'change'].forEach(ev => field.dispatchEvent(new Event(ev, {bubbles: true})));
  await sleep(800);
}

async function send() {
  const btn = sendBtn();
  if (btn) btn.click();
  console.log(`Отправлено ${currentIndex + 1}/${PROMPTS.length}`);
}

function getLastModelAnswerText() {
  const blocks = document.querySelectorAll('div[id^="markdown-content-"]');
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (!blocks[i].closest('.group\\/query')) {
      return blocks[i].innerText.trim();
    }
  }
  return null;
}

async function downloadClean() {
  await sleep(3000);

  const text = getLastModelAnswerText();
  if (!text) return console.error("Ответ не найден!");

  let firstLine = text.split('\n')[0].trim();
  if (firstLine.length > 100) firstLine = firstLine.slice(0, 97) + '...';

  const fileName = firstLine
    .replace(/[\\\/:*?"<>|]/g, '')
    .replace(/\s+/g, '_')
    .replace(/^[\._-]+/, '') || `answer_${currentIndex}`;

  const blob = new Blob([text], {type: 'text/markdown;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName + '.md';
  a.click();
  URL.revokeObjectURL(url);

  console.log(`Скачано → ${fileName}.md`);
}

async function waitForAnswer() {
  console.log("Жду окончания генерации...");
  while (stopBtn()) await sleep(1000);
  await sleep(4500);
}

async function run() {
  if (currentIndex >= PROMPTS.length) {
    console.log("Всё! Автопилот завершён.");
    alert("Готово! Все чистые ответы скачаны.");
    return;
  }

  await typeText(PROMPTS[currentIndex]);
  await send();
  currentIndex++;

  setTimeout(async () => {
    await waitForAnswer();
    if (DOWNLOAD_AFTER_THESE.includes(currentIndex - 1)) {
      downloadClean();
    }
    run();
  }, 2000);
}

// ЗАПУСК
console.clear();
console.log("%cPERPLEXITY AUTOPILOT 2025 — работает, ура", "font-size:20px;color:#8b5cf6;font-weight:bold");
run();
