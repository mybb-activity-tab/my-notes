// ==== PERPLEXITY AUTOPILOT — скачивает после любых выбранных сообщений ====
const PROMPTS = [
  `Привет! Это отрывок главы в .txt файле. Я тебе сейчас буду присылать инструкции (4 итерации!) но вот общие правила.
1. Ты получаешь текст автора. Разбиваешь его на куски по 500-600 слов, разбираешь не сразу весь текст, а по эти 600 слов в одном сообщении. 
2. Ты меняешь ТОЛЬКО проблемные фрагменты. 
3. Ты возвращаешь готовый текст (отрывок по 600 слов). Без предисловий «Вот исправленный вариант». Без объяснений.
4. Если текст уже идеален по всем пунктам — возвращай его БЕЗ единой правки и без комментариев. Ни одной запятой. Это важно: модель не должна «шевелиться», когда не надо.
5. Ты НЕ МЕНЯЕШЬ структуру абзацев и разбивку на новые. 
6. После итерации #4 ты приводишь сводку всего что было изменено (изначальный текст в .txt против того что ты прислал).
Готов к первой задаче?
Ты начинаешь следующий отрывок только получив от меня согласие
`,
  "Привет! Расскажи про себя",
  "А теперь подробно про ИИ в 2026 году",
  "Что насчёт квантовых компьютеров?",
  "А как насчёт нейросетей в медицине?",
  "Спасибо, пока!"
];

// Укажи индексы (считаем с 0), после которых нужно скачать .md
// Например: [1, 3] → скачает после 2-го и 4-го сообщения
const DOWNLOAD_AFTER_THESE = [1, 3]; // ← меняй как хочешь

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
  ['input', 'keyup', 'change'].forEach(ev => field.dispatchEvent(new Event(ev, { bubbles: true })));
  await sleep(1000);
}

async function send() {
  const btn = sendBtn();
  if (btn) btn.click();
  else console.error("Кнопка отправки не активна");
  console.log(`Отправлено [${currentIndex + 1}/${PROMPTS.length}]: "${PROMPTS[currentIndex]}"`);
}

async function waitForAnswer() {
  console.log("Жду ответ...");
  while (stopBtn()) await sleep(1000);
  await sleep(5000);
}

function downloadLastAsMarkdown() {
  const blocks = document.querySelectorAll('div[id^="markdown-content-"]');
  if (blocks.length === 0) return;
  const last = blocks[blocks.length - 1];
  const text = last.innerText.trim();

  const timestamp = new Date().toISOString().slice(0,19).replace(/:/g, '-');
  const query = PROMPTS[currentIndex - 1] || "неизвестно";

  const md = `# ${new Date().toLocaleString('ru-RU')}\n\n**Запрос:** ${query}\n\n${text}\n\n---\n`;

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Perplexity_${timestamp}_msg${currentIndex}.md`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log(`СКАЧАН .md после сообщения ${currentIndex}`);
}

async function run() {
  if (currentIndex >= PROMPTS.length) {
    console.log("Всё отправлено и скачано!");
    alert("Готово! Автопилот завершён.");
    return;
  }

  await typeText(PROMPTS[currentIndex]);
  await send();
  currentIndex++;

  setTimeout(async () => {
    await waitForAnswer();

    // Скачиваем, если текущий индекс (уже +1) есть в списке
    if (DOWNLOAD_AFTER_THESE.includes(currentIndex - 1)) {
      downloadLastAsMarkdown();
    }

    run();
  }, 3000);
}

// ЗАПУСК
console.clear();
console.log("%cPerplexity Autopilot — скачивает после выбранных сообщений", "font-size:20px;color:#8b5cf6;font-weight:bold");
run();
