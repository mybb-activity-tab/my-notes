// ==== GROK 2025 — 100% рабочий, как старый ChatGPT ====
const PROMPTS = [
  "Привет, как дела?",
  "Расскажи шутку",
  "Ещё одну",
  "А теперь что-то про смысл жизни",
  "Дальше"
];

const CHECK_INTERVAL = 1400;
const EXTRA_WAIT_AFTER_DALSHE = 3000;

let currentIndex = 0;
let isRunning = false;

console.clear();
console.log("%cGrok 2025 Sequence-Automation — работает как часы", "font-size:18px;color:#00ff00");

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// === СЕЛЕКТОРЫ GROK 2025 (Tiptap) ===
const textarea = () => document.querySelector('.tiptap.ProseMirror[contenteditable="true"]');
const sendBtn = () => document.querySelector('button[type="submit"]:not([disabled])');
const stopBtn = () => 
  document.querySelector('button[aria-label="Stop generating"]') ||
  document.querySelector('svg path[d*="M4 9.2v5.6"]')?.closest('button');

async function sendNext() {
  if (isRunning) return;
  isRunning = true;

  if (currentIndex >= PROMPTS.length) {
    console.log("Все промпты отправлены. Конец.");
    isRunning = false;
    return;
  }

  // Ждём, пока Grok закончит думать
  while (stopBtn()) {
    console.log("Grok генерирует… жду");
    await sleep(CHECK_INTERVAL);
  }

  await sleep(900);

  const prompt = PROMPTS[currentIndex].trim();
  if (prompt.toLowerCase() === "дальше") await sleep(EXTRA_WAIT_AFTER_DALSHE);

  const el = textarea();
  if (!el) {
    console.error("Поле ввода не найдено!");
    isRunning = false;
    return;
  }

  // === КЛЮЧЕВОЙ ТРЮК: как в старом ChatGPT ===
  el.innerHTML = '<p></p>';                    // очищаем
  el.focus();
  const p = el.querySelector('p') || el;
  p.textContent = prompt;

  // Диспатчим те же события, что и в старом коде
  ['input', 'keydown', 'keyup', 'change'].forEach(ev => 
    el.dispatchEvent(new Event(ev, { bubbles: true }))
  );

  await sleep(200);

  // Кликаем кнопку отправки
  const btn = sendBtn();
  if (btn && !btn.disabled) {
    btn.click();
    console.log(`Отправлено ${currentIndex + 1}/${PROMPTS.length}: "${prompt}"`);
  } else {
    console.warn("Кнопка неактивна — жду ещё");
    await sleep(1000);
    isRunning = false;
    sendNext();
    return;
  }

  currentIndex++;
  isRunning = false;

  if (currentIndex < PROMPTS.length) {
    setTimeout(sendNext, CHECK_INTERVAL);
  } else {
    console.log("Финал! Всё отправлено.");
  }
}

// === СТАРТ ===
sendNext();
