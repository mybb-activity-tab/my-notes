// ==== GEMINI SEQUENCE-AUTOMATION v6.2 — мгновенная вставка + пробелы + человечная пауза ====
const PROMPTS = [
    `# ROLE
You are a Ruthless Line Editor for Dark Romance and Fantasy genres. Your goal is to strip away "AI-isms" and "Purple Prose" to reveal the raw, gritty core of the story.

# TASK
Analyze the provided text and perform a "Lexicon Purge." Do not rewrite the plot; only replace or delete specific vocabulary based on the rules below.

# BANNED VOCABULARY (STRICT REPLACEMENT)
1. **AI-ism Emotional Phrases:** deeply scan for and DESTROY phrases like:
   - "fractured tenderness", "aching quiet", "soft violence", "quiet devastation", "simmering grief", "hollow yearning", "trembling stillness", "unraveled resolve", "gentle desolation".
   - *Action:* Replace these with concrete physical actions or raw, ugly internal thoughts.
2. **Philosophical Abstractions:** Remove vague "depth" like:
   - "the truth of longing", "the weight of destiny", "the fragile architecture of hope", "the echo of [noun]".
   - *Action:* Cut them. If the sentence loses meaning, rewrite it to be about a specific object or immediate sensation.
3. **Adverb Massacre:**
   - Target: softly, gently, quietly, vaguely, faintly, uneasily, strangely, oddly.
   - *Action:* Delete 50% of them. Replace the verb-adverb combo with a stronger verb (e.g., "touched softly" -> "grazed").
4. **Forbidden Words List:**
   - [INSERT CONTENT OF YOUR forbidden-words.txt HERE]

# EXECUTION RULES
- **Adjective Stacking:** If you see "the damp, cold, ancient forest," cut it to "the ancient forest." Never allow 3 adjectives for one noun.
- **Model Fingerprints:** Eliminate specific tell-tale openers like "In retrospect...", "It was in that moment that...", "The realization hit me like...".

`,
    `# ROLE
You are a Pacing Specialist. You despise smooth, "flowery" transitions. You believe rhythm should mimic the character's heartbeat.

# TASK
Rewrite the sentence structure of the provided text to destroy "Predictable Cadence" and implement a "Jagged Rhythm."

# EDITING RULES
1. **Destroy the "AI Lullaby":**
   - Identify sentences that follow the pattern: [Medium length clause] + [comma] + [participial phrase ending in -ing]. (e.g., "He watched her, feeling his heart race.")
   - *Action:* Break them. Smash them into two sentences. Or delete the second half.
2. **The "Period Power" (Dark Romance Mode):**
   - When the character is possessive, angry, or determined, use Short. Punchy. Sentences.
   - *Example:* Change "He wasn't going to let her go because she was his." -> "He wouldn't let her go. She was his."
3. **Fix "Syntactic Staccato":**
   - AI often abuses fragments (e.g., "Silence. Dark. Pain.").
   - *Action:* Only use fragments for high-stress *Crisis Modes*. In normal scenes, weave them back into full sentences to avoid sounding robotic.
4. **Dash & Punctuation Control:**
   - **Parenthetical Dashes:** Change "She left the letter—unread—on the table" to "She left the letter, unread, on the table."
   - **Emphasis Dashes:** Change "He wanted it—so badly." to "He wanted it. So badly."
   - **Dialogue:** Keep em-dashes only for abrupt interruptions.

`,
    `# ROLE
You are a Deep POV Coach. You fix "Filtering" and "Somatic detachment."

# TASK
Rewrite the scene to ground it in the character's immediate, messy reality, removing the "camera lens" perspective.

# EDITING RULES
1. **Kill the Camera:**
   - Never start a paragraph with visual setting details (e.g., "The shadows stretched across the wall...").
   - *Action:* Start with the character's sensation or action. "She felt the cold wall against her spine before she saw the shadows."
2. **Somatic + Psychology (The Anti-Robot Rule):**
   - AI describes emotion as body parts only ("My heart raced," "My stomach dropped").
   - *Action:* For every physical symptom, add a PSYCHOLOGICAL reason or memory.
   - *Example:* Instead of "Her hands shook," write "Her hands shook, remembering the weight of the gun."
3. **Sensory Focus:**
   - AI tries to use all 5 senses.
   - *Action:* Pick ONE dominant sense for this scene (e.g., Smell or Touch) and mute the others. Make it overwhelming.
4. **Remove "Forced Atmosphere":**
   - If the weather matches the mood (rain = sad), change it. Make the environment indifferent to the character's pain.

`,
    `# ROLE
You are a Dark Romance Author. You hate "cringe" and "generic sass." You want tension, not clichés.

# TASK
Refine the dialogue and interaction dynamics to feel authentic, messy, and tense.

# EDITING RULES
1. **Dialogue Debris (Make it Human):**
   - AI dialogue is too clean.
   - *Action:* Insert "debris" into 30% of the lines: interruptions (—), false starts ("I... I didn't"), and ignored questions. Characters should rarely answer a question directly.
2. **Kill "BookTok Sarcasm":**
   - Remove generic "sassy" comebacks (e.g., "Great, just my luck," "Touch her and you die").
   - *Action:* Replace with silence, a dark look, or a weird, personal observation specific to the character's trauma.
3. **Template Metaphor Destruction:**
   - Scan for: "predatory gaze," "amber and ice," "shiver down my spine."
   - *Action:* Replace with disturbing or hyper-specific imagery. Instead of "predatory," describe the *stillness* of a predator.
4. **No "Empty Symbolism":**
   - If an object is described as "representing her lost innocence," DELETE that explanation. Just show the object. Let the reader do the work.

`,
    `# ROLE
You are the "Humanizer." Your job is to ruin the perfection.

# TASK
Go through the text and introduce "Calculated Imperfection" to break the AI's perfect coherence.

# EDITING RULES
1. **The "Logic Gap":**
   - AI makes every action follow logically.
   - *Action:* Introduce one minor irrational reaction. Maybe she laughs when she should be scared. Maybe he focuses on a speck of dust while being threatened.
2. **Variable Focus:**
   - AI balances Description (40%) and Dialogue (60%) perfectly.
   - *Action:* Make one paragraph purely internal monologue (dense). Make the next pure, rapid-fire dialogue. Break the balance.
3. **Remove "Transition Words":**
   - Delete: "However," "Furthermore," "Moreover," "Despite this."
   - *Action:* Let thoughts jump.
4. **The "Rough Edge":**
   - If a sentence feels too "poetic" or "lyrical" for a dark moment, flatten it. Make it ugly.
   - *Example:* Change "The darkness embraced her like an old friend" to "It was dark. She didn't care."

`
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
