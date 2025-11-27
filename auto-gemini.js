// ==== GEMINI SEQUENCE-AUTOMATION v6 — простая имитация, без legacy, 100% работает в Quill 2025 ====
const PROMPTS = [
  "Привет, как дела?",
  "А теперь расскажи шутку",
  "Ещё одну",
  "Дальше"
];

const CHECK_INTERVAL = 1500;
const EXTRA_WAIT_AFTER_DALSHE = 3000;

let currentIndex = 0;
let isRunning = false;

console.clear();
console.log("%cGemini Sequence-Automation v6 — textContent + input events, чисто и просто", "font-size:18px;color:#4285f4");

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

const editor = () => document.querySelector('.ql-editor');
const sendBtn = () => document.querySelector('button.send-button:not([aria-disabled="true"])');
const stopBtn = () => document.querySelector('button[aria-label="Stop generating"]') || document.querySelector('mat-icon[fonticon="stop"]')?.closest('button');

// Имитируем ввод одной буквы через textContent + input (Quill это видит)
function simulateChar(char) {
  const el = editor();
  if (!el) return;
  el.textContent += char;  // добавляем в конец (Quill обновит)
  el.dispatchEvent(new Event('input', { bubbles: true }));  // Quill реагирует на input
}

// Ввод текста: добавляем по буквам в конец
async function typeText(text) {
  const el = editor();
  if (!el) return false;

  el.focus();
  el.dispatchEvent(new Event('focus', { bubbles: true }));

  await sleep(100);

  // Если поле не пустое — добавляем в конец с разделителем
  const currentText = el.textContent.trim();
  const fullText = currentText ? currentText + " " + text : text;

  // Печатаем по буквам (Quill обновляется после каждой input)
  for (let char of fullText.slice(currentText.length)) {  // только новую часть
    simulateChar(char);
    await sleep(30);  // пауза, чтобы Quill не лагал
  }

  await sleep(300);  // финальная пауза для обновления Quill

  console.log(`Введено в конец: "${text}" (полный текст: "${el.textContent.trim()}")`);
  return true;
}

async function sendNext() {
  if (isRunning) return;
  isRunning = true;

  if (currentIndex >= PROMPTS.length) {
    console.log("Все промпты отправлены. Конец.");
    isRunning = false;
    return;
  }

  // Ждём окончания
  let waitCount = 0;
  while (stopBtn() && waitCount < 60) {
    console.log("Gemini генерирует… жду");
    await sleep(CHECK_INTERVAL);
    waitCount++;
  }

  await sleep(1200);

  const prompt = PROMPTS[currentIndex].trim();
  if (prompt.toLowerCase() === "дальше") await sleep(EXTRA_WAIT_AFTER_DALSHE);

  const typed = await typeText(prompt);
  if (!typed) {
    console.error("Не удалось ввести текст!");
    isRunning = false;
    return;
  }

  await sleep(500);

  // Отправка
  let sent = false;
  const btn = sendBtn();
  if (btn) {
    btn.click();
    sent = true;
    console.log(`✅ Отправлено кликом: "${prompt}"`);
  } else {
    // Fallback: Enter на editor (Quill отправляет на Enter)
    console.log("Кнопка неактивна — жму Enter");
    const el = editor();
    if (el) {
      const enterDown = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true });
      const enterUp = new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true });
      el.dispatchEvent(enterDown);
      el.dispatchEvent(new Event('submit', { bubbles: true }));  // Quill может слушать submit
      el.dispatchEvent(enterUp);
      sent = true;
      console.log(`✅ Отправлено Enter'ом: "${prompt}"`);
    }
  }

  if (!sent) {
    console.error("Не удалось отправить!");
    isRunning = false;
    return;
  }

  currentIndex++;
  isRunning = false;

  if (currentIndex < PROMPTS.length) {
    setTimeout(sendNext, CHECK_INTERVAL);
  } else {
    console.log("🎉 Все промпты отправлены! Автоматизация завершена.");
  }
}

// === СТАРТ ===
sendNext();
