// ==== НАСТРОЙКИ ====
const PROMPTS = [
  "Расскажи шутку",
  "И еще одну",
  "И просто что-то хорошее",
  "Дальше"
];

const CHECK_INTERVAL = 1400;
const EXTRA_WAIT_AFTER_DALSHE = 3000;
// ==================

let currentIndex = 0;
let isRunning = false;   // ← теперь только один процесс одновременно

console.clear();
console.log("%c🤖 Sequence-automation запущен", "font-size: 18px; color: #00ff00");

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

const textarea = () => document.querySelector('#prompt-textarea');
const sendBtn  = () => document.querySelector('button[data-testid="send-button"], button#composer-submit-button:not([aria-label*="Stop"])');
const stopBtn  = () => document.querySelector('button[data-testid="stop-button"], button[aria-label*="Stop"]');

async function sendNext() {
  // Защита от одновременного запуска
  if (isRunning) return;
  isRunning = true;

  // Полный стоп, если всё уже отправлено
  if (currentIndex >= PROMPTS.length) {
    console.log("Все промпты отправлены. Полный стоп навсегда.");
    isRunning = false;
    return;
  }

  // Ждём окончания генерации
  while (stopBtn()) {
    await sleep(CHECK_INTERVAL);
  }

  await sleep(900);   // даём странице «отдышаться»

  const prompt = PROMPTS[currentIndex].trim();
  if (prompt.toLowerCase() === "дальше") await sleep(EXTRA_WAIT_AFTER_DALSHE);

  const el = textarea();
  if (!el) { isRunning = false; return; }

  el.innerHTML = '<p></p>';
  el.focus();
  const p = el.querySelector('p') || el;
  p.textContent = prompt;
  ['input', 'keydown', 'keyup'].forEach(ev => 
    el.dispatchEvent(new Event(ev, { bubbles: true }))
  );
  await sleep(150);

  try { sendBtn()?.click(); } catch(e) {}

  console.log(`Отправлено ${currentIndex + 1}/${PROMPTS.length}: "${prompt}"`);
  currentIndex++;

  isRunning = false;

  // ←←← Самое важное: запускаем следующий только после полного завершения текущего
  if (currentIndex < PROMPTS.length) {
    setTimeout(sendNext, CHECK_INTERVAL);   // не setInterval, а setTimeout!
  } else {
    console.log("Это был последний промпт. Всё, конец.");
  }
}

// Старт
sendNext();
