// ==== GEMINI SEQUENCE-AUTOMATION v6.2 — мгновенная вставка + пробелы + человечная пауза ====
const PROMPTS = [
  "Привет, как дела?",
  "А теперь расскажи шутку",
  "Ещё одну",
  "Дальше"
];

const CHECK_INTERVAL = 1500;
const EXTRA_WAIT_AFTER_DALSHE = 3000;

// Настройки маскировки под человека
const ADD_TRAILING_SPACES = true;           // добавлять ли лишние пробелы в конец
const MIN_SPACES = 3;                            // минимум пробелов
const MAX_SPACES = 8;                               // максимум (случайно)
const HUMAN_THINKING_MS = () => 800 + Math.random() * 2200;  // 0.8–3 сек «подумал и отправил»

let currentIndex = 0;
let isRunning = false;

console.clear();
console.log("%cGemini Sequence-Automation v6.2 — ультра-человечный режим", "font-size:18px;color:#0f9d58");

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
const editor = () => document.querySelector('.ql-editor');
const sendBtn = () => document.querySelector('button.send-button:not([aria-disabled="true"])');
const stopBtn = () => document.querySelector('button[aria-label="Stop generating"]') || document.querySelector('mat-icon[fonticon="stop"]')?.closest('button');

async function pasteLikeHuman(text) {
  const el = editor();
  if (!el) return false;

  el.focus();

  const current = el.textContent.trimEnd(); // убираем старые пробелы с конца, если были
  const separator = current ? " " : "";
  const cleanText = current + separator + text;

  // Вставляем чистый текст мгновенно
  el.textContent = cleanText;

  // Добавляем случайное количество пробелов в конец (очень по-человечески!)
  if (ADD_TRAILING_SPACES) {
    const spacesCount = MIN_SPACES + Math.floor(Math.random() * (MAX_SPACES - MIN_SPACES + 1));
    el.textContent += " ".repeat(spacesCount);
  }

  // Один input-ивент — Quill всё увидит
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));

  console.log(`Вставлено + ${ADD_TRAILING_SPACES ? "пробелы" : "без пробелов"}: "${text}"`);
  return true;
}

async function sendNext() {
  if (isRunning) return;
  isRunning = true;

  if (currentIndex >= PROMPTS.length) {
    console.log("Всё, промпты кончились. Молодец!");
    isRunning = false;
    return;
  }

  // Ждём окончания генерации
  while (stopBtn()) {
    await sleep(CHECK_INTERVAL);
  }
  await sleep(1000);

  const prompt = PROMPTS[currentIndex].trim();
  if (prompt.toLowerCase() === "дальше") await sleep(EXTRA_WAIT_AFTER_DALSHE);

  await pasteLikeHuman(prompt);

  // Имитируем, что человек «подумал» перед отправкой
  const thinkingTime = HUMAN_THINKING_MS();
  console.log(`Думаю как человек… ${thinkingTime.toFixed(0)} мс`);
  await sleep(thinkingTime);

  // Отправляем
  const btn = sendBtn();
  if (btn) {
    btn.click();
    console.log(`Отправлено после "раздумья": "${prompt}"`);
  } else {
    const el = editor();
    el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    console.log(`Отправлено Enter'ом после паузы: "${prompt}"`);
  }

  currentIndex++;
  isRunning = false;

  if (currentIndex < PROMPTS.length) {
    setTimeout(sendNext, CHECK_INTERVAL);
  } else {
    console.log("Всё отправлено! Ты теперь неуловим");
  }
}

// === СТАРТ ===
sendNext();
