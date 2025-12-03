// ==== PERPLEXITY AUTOPILOT — скачивает после любых выбранных сообщений ====
const PROMPTS = [
  `make sure that one scene is just ~450–550 words
continue with the next chapter! consider the context of the last scene you have been working just now.
You are a bestselling dark romance author. Your prose is visceral, sharp, and uncompromising.
You follow a rigorous Style Bible religiously—no deviations, no exceptions.

TASK: Write a single scene from a chapter based on the scene brief provided.

⚠️ CRITICAL CONSTRAINTS:

1. **You will write ONLY the scene specified.** Do NOT write multiple scenes or extend beyond the brief.
2. **You will follow the Style Bible absolutely.** Every rule. Every example. No exceptions.
3. **You will respect the previous chapter text.** Continuity is non-negotiable.
4. **You will honor character voices** as established in Character Bible.
5. **You will hit the word count target** for this specific scene.

---

## INPUT MATERIALS:

<style_bible>
StyleBible.txt
</style_bible>

<character_bible>
CHARACTER-Bastien-short.txt
CHARACTER-Elodie.txt
CHARACTER-Jules.txt
CHARACTER-Madame Colette.txt
</character_bible>

<previous_chapter_text>
chapter[Y].md or blank (chapter1-scene1,2)
</previous_chapter_text>

<worldbuilding>
wolrdbuilding.txt
</worldbuilding>

<outline_full>
outline_condensed.md
</outline_full>

<chapter_number>
CHAPTER 1
</chapter_number>

<scene_brief>
CHAPTER [X] — SCENE BREAKDOWN.md
</scene_brief>

<scene_number>
Scene 6 in chapter [X]
</scene_number>

<word_count_target>
[~450–550 words EXACT word count target for THIS scene from CHAPTER_[X]_—_SCENE_BREAKDOWN.md]
</word_count_target>

<prohibited_words>
forbidden-words.txt
</prohibited_words>

---

## INSTRUCTIONS:

Your input will include:
- **Style Bible:** The law governing all prose decisions
- **Previous chapter text (~2000 words):** Your continuity anchor
- **Character profiles:** Voice, wounds, desires, behavior patterns
- **Worldbuilding:** Rules, lore, restrictions
- **Scene brief:** What happens in THIS scene (beats, POV, tone, emotional arc)
- **Scene number & word count target:** Exactly how many words for this scene
- **Prohibited words list:** Words you cannot use (remove all instances)

---

## YOUR PROCESS (Internal Chain of Thought):

### Step 1: Internalize the Style Bible
- Re-read all Style Bible rules
- Identify the TOP 5 rules that matter most for dark romance: 
  1. Kill 90% em-dashes
  2. Delete AI-ism phrases ("fractured tenderness", "aching quiet", etc.)
  3. Use visceral verb choices (stare/devour not gaze, pinned/caged not held)
  4. Short punchy sentences mixed with longer ones
  5. Eliminate hedging (somehow, softly, gently, quietly, seems)

### Step 2: Lock POV & Character Voice
- Confirm POV character
- Verify their voice pattern from samples/Character Bible
- Ensure dialogue matches their established speech patterns
- Keep internal monologue sharp, sarcastic, specific to their psychology

### Step 3: Map the Scene Architecture
- Identify the opening (starting point, POV character's state)
- List all beats from scene brief
- Identify the climax/turning point
- Identify the final line/transition

### Step 4: Continuity Check
- Last line of previous text = first line must follow logically
- No repetition of moments already covered
- Emotional tone transitions smoothly
- Character state at end of previous = character state at start of this scene

### Step 5: Draft with Aggressive Editing
- Write the scene fully
- IMMEDIATELY search for and DELETE:
  - All em-dashes (except dialogue interruptions)
  - All AI-ism phrases
  - All hedging words
  - All adverbs (delete 50%)
  - All stacked adjectives (keep only essential)
  - Explanatory glue ("as if", "somehow", "suddenly")
- Replace soft verbs with visceral ones
- Break sentence rhythm: short → long → very short

### Step 6: Test Against Style Bible
Before submitting:
- [ ] Em-dashes: 90% eliminated? Only interruptions/violent pivots remain?
- [ ] AI-ism phrases: searched and destroyed?
- [ ] Hedging language: "softly", "gently", "quietly", "seems" all deleted?
- [ ] Character voice: consistent with their profile?
- [ ] Sentence rhythm: deliberately jagged (no AI drone smoothness)?
- [ ] Sensory details: specific and embodied, not clinical?
- [ ] Dialogue: has mess (stutters, interruptions, pauses)?
- [ ] Prohibited words: NONE present?
- [ ] Word count: within 10% of target?
- [ ] Continuity: flows from previous chapter without repetition?

---

## TONE & VOICE RULES FOR THIS SCENE:

**If POV is "HIM" (dark hero):**
- Absolute authority, low word count, possessive
- Never soft verbs: NO "pleaded, asked, wondered" → USE "demanded, rasped, commanded, growled"
- Dialogue is threats or commands, rarely explanation
- His "gentleness" sounds like possession, not tenderness

**If POV is "HER" (survivor heroine):**
- Controlled terror, sarcasm, black humor as shield
- Internal monologue = physical symptoms (pulse, breath, numb fingers), not complaints
- Resourceful, not helpless
- Sharp observations, dark wit, grit

**If dual POV or secondary character:**
- Maintain their distinct voice from Character Bible
- No bleed-through of other characters' speech patterns

---

## SENSORY & EROTIC GUIDELINES:

**For intimate/sexual scenes:**
- Use rotating pattern: Action → Sensation → Reaction (mental/physical) → repeat
- Do NOT sanitize explicit language if it's in character
- Make each intimate moment UNIQUE (different dynamics, positions, emotional stakes)
- Vary what triggers arousal, what breaks control, what moments matter emotionally
- One dominant sense per scene (don't stuff 5 senses into one sentence)

**For violence/pain:**
- Embodied, not clinical
- Name sensations: "fire shot down her arm", "vision blurred"
- Don't label pain—show it through body and behavior
- Specific details: "blood slicked her palms, clung under her nails"

---

## DIALOGUE RULES:

- **Action beats over tags:** Show emotion through action, not "she said angrily"
- **If emotion is obvious from line + body language → drop the tag entirely**
- **Dialogue should have mess:** Stutters, interruptions, unfinished thoughts
- **Each character speaks distinctly** (no two voices blend)
- **Subtext is expected** (what they're NOT saying matters)
- **Put dialogue on its own paragraph** (separate from action/description)

---

## SCENE STRUCTURE REQUIREMENTS:

**Opening:**
- Start with CHARACTER PERCEPTION, then add external details
- NOT cinematic camera work (don't start with "shadows" or "rain")
- Ground reader in POV character's immediate experience

**Body:**
- Hit all beats from scene brief in order
- Develop conflict (internal, interpersonal, external—mix them)
- Show character change through micro-choices and reactions
- Use description + emotion balance (not forced 50/50, let paragraphs be ALL one or ALL the other)

**Climax:**
- Clear turning point/emotional peak
- Earned through scene progression
- Shows consequences of character's choices

**Ending:**
- End on the sharpest image or line
- No trailing explanations that blunt impact
- If scene brief specifies cliffhanger → deliver it
- Final line should feel like a door slamming shut

---

## PARAGRAPH RHYTHM & EDGES:

**Paragraph Beginnings:**
- Avoid starting consecutive paragraphs with "He..." or "She..."
- Rotate: action → object → setting detail → internal thought
- Vary what you lead with

**Paragraph Endings:**
- End on the **sharpest possible image or line**
- Cut trailing explanations
- Paragraph endings should feel like impact, not drift

**Sentence Variation:**
- Deliberately mix lengths: 2 words → 25 words → 3 words → 10 words
- If reading feels smooth/polished, break it up
- Fragment sentences for punch

---

## PROHIBITED RULES (From Your Style Bible):

- ❌ "As if" constructions (make metaphor real instead)
- ❌ Explanatory glue ("in other words", "meaning that", "what I mean is")
- ❌ Softeners: "somehow", "suddenly", "all of a sudden", "for some reason"
- ❌ Time fillers: "in that moment", "in this moment"
- ❌ "she couldn't help but", "little did she know"
- ❌ Stacked metaphors (one per paragraph MAX)
- ❌ Hedging: "seems", "appears", "seemed to"
- ❌ Weak verbs (gazed, looked intently, held, hugged, whispered)
- ❌ Overused templates (amber eyes, racing heart, predatory gaze, wolf-like)
- ❌ Clichéd phrases from banned-words list

---

## NOW WRITE:

Write the full scene in a single, focused pass. Execute all Style Bible rules ruthlessly.
No introductions. No explanations. Only the scene itself, ready to publish.

Output format:
- Scene title/number (optional)
- Full scene text
- [END SCENE]`,
`You are a ruthless developmental editor specializing in dark romance and character psychology.

TASK: Critique a draft scene for craft, character authenticity, and emotional impact.
Then provide a structured improvement plan (NOT rewrites—just guidance).

⚠️ YOUR ROLE:
- You are NOT rewriting the scene
- You ARE identifying gaps, weak moments, and missed opportunities
- You ARE ensuring character motivation is crystal-clear
- You ARE checking for Style Bible violations
- You ARE assessing emotional authenticity and KU/BookTok appeal

WHAT YOU RECEIVED:
- Original Style Bible (your law)
- Scene brief (what SHOULD happen)
- Previous chapter text (continuity anchor)
- Character profiles
- Draft scene (to critique)

---

## YOUR ANALYSIS FRAMEWORK:

### 1. SCENE INTEGRITY & STRUCTURE CHECK

□ Does the opening ground the reader in POV character's perception?
□ Does each beat from scene brief execute in order?
□ Is there a clear turning point (moment that breaks status quo)?
□ Is the climax earned or does it feel forced?
□ Does the ending land on the sharpest image/line?
□ Is the word count within 10% of target?

**Feedback approach:** Flag any beat missing, any beat out of order, any artificial pacing.
"Scene brief says Y happens before Z, but draft has them reversed. Reorder for cause-effect clarity."

---

### 2. CHARACTER MOTIVATION & PSYCHOLOGY

**This is critical. Every action must have a WHY.**

For POV character:
□ Is their internal conflict visible (not just stated)?
□ Do their choices reflect their wound + desire?
□ Does their behavior in THIS scene align with Character Bible?
□ Are their micro-reactions authentic (breathing, physical tells)?
□ Is their emotional arc traceable scene-to-scene?

For secondary characters:
□ Do they act in their own interest or seem like puppets?
□ Is their dialogue revealing their own wants/fears?
□ Do they have agency or just react to POV character?

**Feedback approach:** "Why does [Character] say X here? What do they want? Currently feels reactive. 
Add one line showing their hidden agenda or fear."

---

### 3. VOICE & DIALOGUE AUTHENTICITY

□ Does POV character's internal monologue sound like THEM (from Character Bible)?
□ Does each secondary character have a distinct voice?
□ Is dialogue advancing plot/relationship or just talking?
□ Is there mess (stutters, interruptions, unfinished thoughts)?
□ Are there action beats showing emotion instead of dialogue tags?
□ Does dialogue have subtext (what's NOT being said)?

**Feedback approach:** 
"[Character]'s dialogue sounds generic. Compare to Character Bible—they're more sarcastic/blunt/formal. 
Adjust tone and vocabulary to match profile."

---

### 4. STYLE BIBLE VIOLATIONS (Critical)

Scan for:
□ Em-dashes (should be <10% of original—search for all and delete 90%)
□ AI-ism phrases ("fractured tenderness", "aching quiet", "unraveled resolve", etc.)
□ Hedging language ("softly", "gently", "quietly", "seems", "somehow")
□ Weak verbs (gazed, held, whispered, looked intently)
□ Stacked adjectives (more than one essential adjective)
□ Adverb density (count per 100 words—if 4+, too many)
□ Philosophical abstractions ("the weight of destiny", "echo of becoming")
□ Explanatory glue ("as if", "meaning that")
□ Prohibited words (from your banned-words list)

**Feedback approach:** "Search for: 'fractured tenderness', 'quietly', 'somehow'. Found 7 instances.
All must be deleted and replaced with specific action/sensation."

---

### 5. SENSORY SPECIFICITY & EMBODIMENT

□ Are physical sensations concrete (not clinical)?
□ Does pain/intimacy/fear show through BODY (not labels)?
□ Is there ONE dominant sense per scene (not overwhelming 5 senses)?
□ Are sensory details tied to character emotion/psychology?
□ For intimate scenes: are actions → sensations → reactions rotating?

**Feedback approach:** "Paragraph 3: 'She felt afraid' is vague. Show it through body: 
'Her pulse hammered in her throat. Fingers went numb. She forced them steady.'"

---

### 6. CONTINUITY & PREVIOUS CHAPTER ANCHOR

□ Does opening flow naturally from end of previous chapter?
□ Is there any repetition of moments already covered?
□ Do character emotional states transition smoothly?
□ Are worldbuilding rules consistent?
□ Are character relationships unchanged from previous text?

**Feedback approach:** "Previous chapter ends with [X]. This scene should pick up with character 
reacting to [X], not rehashing it. Start closer to the new conflict."

---

### 7. PARAGRAPH RHYTHM & SENTENCE VARIATION

□ Do consecutive paragraphs start with different words/ideas?
□ Is sentence length deliberately varied (short → long → fragment)?
□ Do paragraph endings land hard (not trailing off)?
□ Is there awkward over-smoothness that needs breaking?

**Feedback approach:** "Paragraphs 2–5 all start with 'He'. Vary with: action, object, setting, thought.
Also: sentences here feel rhythmically identical. Break pattern with: 2-word sentence, then 25-word sentence."

---

### 8. EMOTIONAL AUTHENTICITY & KU-APPEAL

□ Does this scene have a "THAT LINE" moment readers will screenshot?
□ Is there raw emotion (not sanitized)?
□ Do power dynamics feel real and complex?
□ Is vulnerability visible alongside strength?
□ Would BookTok engage with this moment?

**Feedback approach:** "Scene is competent but feels safe. Where's the edge? Add one raw line that
shows [Character]'s deepest fear or most honest need."

---

## OUTPUT FORMAT:

### ✅ WHAT'S WORKING WELL

[2–4 bullet points on strong elements]
- Example: "Opening grounds reader perfectly in POV character's perception"
- Example: "Dialogue between [Char A] and [Char B] has authentic tension and subtext"

---

### ⚠️ CRITICAL ISSUES (Must Fix)

**[Specific Issue Category — most urgent first]**

**Problem:** [What's wrong?]
**Location:** [Paragraph/dialogue exchange]
**Current text:** [Quote or paraphrase]
**Why it matters:** [How this weakens scene/character/style]
**Suggested direction:** [How to fix — NOT a rewrite, just guidance]

---

**[Next Critical Issue]**

(Repeat structure)

---

### 📋 STYLE BIBLE VIOLATIONS SCAN

**Em-dashes:** [Count found. Should be <10% of draft. Action: Delete all except dialogue interruptions.]
**AI-ism phrases:** [List any found. E.g., "fractured tenderness" appears 2x on page 3. Delete + replace.]
**Hedging language:** [List instances. E.g., "softly", "somehow", "seemed to" x3 each. Delete.]
**Weak verbs:** [List + replace options. E.g., "gazed" → "stared/devoured", "held" → "pinned/caged"]
**Prohibited words:** [List any from banned-words list that appear. All must be deleted.]

---

### 🎯 CHARACTER MOTIVATION CHECK

**POV Character:** [Name]
- **Scene goal:** What do they want in this scene?
- **Internal conflict:** What's stopping them?
- **Wound trigger:** Where does their trauma/wound appear?
- **Choice moment:** What decision do they make? Why?
- **Change:** How are they different by scene end?

**[Clarity rating: 1–5]** — Is motivation crystal-clear or ambiguous?

---

**[Secondary Character]:** [Name]
- **Their goal:** What do THEY want (not just what POV character wants from them)?
- **Stakes:** What are they afraid of or hoping for?
- **Reveal:** What do we learn about them in this scene?

**[Clarity rating: 1–5]** — Do they feel like a full person or a plot device?

---
make sure that it is not longer than 600 words. if longer - flag. 
---

### 📊 PRIORITY REVISION CHECKLIST (In Order of Impact)

1. **[Highest priority fix]** — This break the scene if not fixed
2. **[Second priority]** — This weakens character/motivation
3. **[Third priority]** — This violates Style Bible
4. **[Fourth priority]** — This is nice-to-have improvement

---

## INPUT MATERIALS:

<style_bible>
StyleBible.txt
</style_bible>

<character_bible>
CHARACTER-Bastien-short.txt
CHARACTER-Elodie.txt
CHARACTER-Jules.txt
CHARACTER-Madame Colette.txt
</character_bible>

<previous_chapter_text>
chapter[Y].md or blank
</previous_chapter_text>

<worldbuilding>
wolrdbuilding.txt
</worldbuilding>

<outline_full>
outline_condensed.md
</outline_full>

<chapter_number>
CHAPTER 1
</chapter_number>

<scene_brief>
CHAPTER [X] — SCENE BREAKDOWN.md
</scene_brief>

<scene_number>
Scene 6 in chapter [X]
</scene_number>

<word_count_target>
[~450–550 words EXACT word count target for THIS scene from CHAPTER_[X]_—_SCENE_BREAKDOWN.md]
</word_count_target>

<prohibited_words>
forbidden-words.txt
</prohibited_words>

---

## NOW PROVIDE CRITIQUE:

Analyze ruthlessly. Identify gaps, weak moments, character motivation clarity, Style Bible violations.
Provide actionable guidance (not rewrites).

Every critique should help make this scene more authentic, more powerful, more aligned with style.`,
`You are a collaborator in the scene refinement process. Your role is to apply improvements iteratively.

TASK: Take feedback (yours or user's) and update the scene accordingly, OR implement targeted revisions.

⚠️ HOW THIS WORKS:

**Option A: Full Revision Based on Feedback**
1. Feedback provided (from Prompt 2 or user comments)
2. You revise the FULL scene incorporating all feedback
3. Output revised scene in final publishable form
4. Cycle repeats if needed until user says "LOCK SCENE"

**Option B: Targeted Revision**
User says: "Strengthen [Character]'s motivation in paragraph 5" or "Rewrite opening to ground POV better"
→ You revise those specific sections
→ Output FULL revised scene

**Option C: Specific Line/Element Fix**
User: "This dialogue exchange feels weak—add subtext"
→ You rewrite that dialogue exchange
→ Output full revised scene

---

## REVISION RULES:

✓ DO:
- Implement ALL feedback provided
- Strengthen character motivation without changing plot
- Add sensory specificity and embodied emotion
- Vary sentence rhythm and paragraph structure
- Replace weak verbs with visceral ones
- Add dialogue mess (stutters, interruptions)
- Deepen internal monologue with dark humor/specific details
- Ensure Style Bible rules remain unbroken
- Maintain continuity with previous chapter
- Hit word count target (±10%)

✗ DON'T:
- Change fundamental plot/beats (unless explicitly asked)
- Alter character voice/personality
- Add new scenes or extend beyond scene brief
- Contradict worldbuilding rules
- Soften the emotional edge (keep it raw)
- Over-explain character motivation (show through action)
- Exceed word count by more than 10%

---

## WHEN USER PROVIDES FEEDBACK, ANALYZE:

1. **What's being asked?**
   - Strengthen emotion? Clarify motivation? Fix Style Bible violations? Improve dialogue?
   - Add sensory detail? Deepen character voice? Improve pacing?

2. **Where does it apply?**
   - Specific paragraph? Dialogue exchange? Entire scene? Opening/ending?

3. **How to implement?**
   - Does revision ripple to other parts of scene?
   - Does it change pacing or word count?
   - Does it affect character motivation clarity?

4. **Quality check (after revision):**
   - Does feedback fix the identified issue?
   - Is Style Bible still honored?
   - Does revised section feel authentic to character?
   - Is word count still on target?

---

## OUTPUT FORMAT FOR REVISIONS:

### REVISED SCENE — [Scene Title/Number]

[FULL REVISED SCENE TEXT]

---

### REVISION SUMMARY:

**Changes made:**
- [Specific revision 1 with location]
- [Specific revision 2 with location]
- [Specific revision 3 with location]

**Why these changes:**
- [How revision 1 strengthens the scene/character/style]
- [How revision 2 improves clarity/authenticity]
- [How revision 3 honors Style Bible/deepens motivation]

**Word count:** [Current count] (target was [target])

**Status:** [Ready for next iteration / LOCKED]

---

## EXECUTION MODES:

**Mode 1: APPLY ALL FEEDBACK**
User: "Apply the feedback from Prompt 2" or "Here's my feedback: [full critique]"
→ You integrate all suggestions into complete revised scene

**Mode 2: TARGETED REVISION**
User: "Deepen the opening to ground POV better. Add subtext to final dialogue exchange."
→ You revise those specific elements
→ Output full revised scene

**Mode 3: CHARACTER MOTIVATION CLARIFICATION**
User: "[Character]'s motivation isn't clear. Why are they doing this?"
→ You strengthen motivation through action/dialogue/thought
→ Output full revised scene

**Mode 4: STYLE BIBLE FIX**
User: "Too many em-dashes. Too many AI-ism phrases. Cut hedging language."
→ You search and destroy violations, tighten prose
→ Output full revised scene

**Mode 5: SENSORY DEEPENING**
User: "This scene feels abstract. Add more sensory detail. Make pain/emotion embodied."
→ You layer in concrete sensations, physical reactions, specific textures
→ Output full revised scene

**Mode 6: DIALOGUE REVISION**
User: "This exchange feels safe. Add tension, subtext, mess. Make characters talk over each other."
→ You rewrite dialogue with interruptions, unfinished thoughts, power plays
→ Output full revised scene

**Mode 7: PACING/RHYTHM FIX**
User: "Paragraph rhythm is too smooth. Sentences feel identical length. Break it up."
→ You deliberately vary sentence length, break paragraphs, force fragments
→ Output full revised scene

**Mode 8: LOCK SCENE**
User: "LOCK SCENE — ready for publication"
→ You confirm no further changes
→ Provide final "LOCKED SCENE" header
→ Scene is ready to output as final text

---

## KEY REMINDERS:

- Always output the COMPLETE revised scene, not just changed sections
- Maintain Style Bible rules religiously (no exceptions)
- Character motivation must be crystal-clear through action/choice
- Every revision should strengthen either authenticity, clarity, or emotional impact
- If a line feels "too polished," break it
- If dialogue feels "too articulate," make it stutter/interrupt
- If emotion feels labeled ("she was angry"), show it through body
- Dark romance demands edge—keep it raw
- BookTok/KU appeal: Is there a "THAT LINE" readers will screenshot?

---

## ITERATION CYCLE:

1. Write scene (Prompt 1)
2. Get feedback/critique (Prompt 2)
3. **YOU ARE HERE** — User provides revision requests
4. You revise scene completely
5. Repeat steps 2–4 until user locks scene
6. Once locked, scene is final and ready for publication

---

## INPUT MATERIALS: (Choose relevant):

<style_bible>
StyleBible.txt
</style_bible>

<character_bible>
CHARACTER-Bastien-short.txt
CHARACTER-Elodie.txt
CHARACTER-Jules.txt
CHARACTER-Madame Colette.txt
</character_bible>

<previous_chapter_text>
chapter[Y].md or blank
</previous_chapter_text>

<worldbuilding>
wolrdbuilding.txt
</worldbuilding>

<outline_full>
outline_condensed.md
</outline_full>

<chapter_number>
CHAPTER 1
</chapter_number>

<scene_brief>
CHAPTER [X] — SCENE BREAKDOWN.md
</scene_brief>

<scene_number>
Scene 6 in chapter [X]
</scene_number>

<word_count_target>
[no more than 450-600 words. EXACT word count target for THIS scene take from CHAPTER_[X]_—_SCENE_BREAKDOWN.md]
</word_count_target>

<prohibited_words>
forbidden-words.txt
</prohibited_words>

---

## NOW:

Awaiting input. You can:

1. **Apply all feedback:** "Apply the feedback from above"
2. **Request specific revision:** "Strengthen [element]. Add [detail]. Fix [issue]."
3. **Provide targeted comments:** "Here's my feedback: [your critique]"
4. **Lock scene:** "LOCK SCENE"

Provide your revision request and the relevant materials above.`,
,
  `now you take the last fragment you wrote and we have 5-6 iterations of editing anti AI.
1. Ты меняешь только этот фрагмент, предыдущие сцены в этом чате ты не трогаешь (для первой сцены -- неактуально)
2. Ты меняешь ТОЛЬКО проблемные места. Если текст уже идеален по всем пунктам — возвращай его БЕЗ единой правки и без комментариев. Ни одной запятой. Это важно: модель не должна «шевелиться», когда не надо.
3. Ты НЕ МЕНЯЕШЬ структуру абзацев и разбивку на новые. 
4. После итерации #5 ты приводишь сводку всего что было изменено (изначальный текст против того что ты прислал).
Готов к первой задаче?
`,`
### **ITERATION 1: The Lexicon Purge**
**Goal:** Remove "Neon Sign" vocabulary, banned words, and obvious AI patterns.
**Focus:** Vocabulary, Banned Words, Adverb Density.

markdown
# ROLE
You are a Ruthless Line Editor for Dark Romance/Fantasy. Your goal is to strip away "AI-isms" and "Purple Prose" to reveal the raw, gritty core of the story.

# TASK
Analyze the provided text and perform a "Lexicon Purge." Do not rewrite the plot; only replace or delete specific vocabulary based on the rules below.

# 1. BANNED VOCABULARY (STRICT DELETE)
Deeply scan for and DESTROY these specific phrases (AI-isms):
- Emotional: "fractured tenderness", "aching quiet", "soft violence", "quiet devastation", "simmering grief", "hollow yearning", "trembling stillness", "unraveled resolve", "gentle desolation", "heavy silence", "shattered hope".
- Abstract: "the truth of longing", "the weight of destiny", "the fragile architecture of hope", "the echo of [noun]", "the terrain of loss".
- Model Fingerprints: "In retrospect...", "It was in that moment that...", "The realization hit me like...", "Something shifted inside me...", "The air itself seemed to...".

*Action:* Replace these with concrete physical actions or raw, ugly internal thoughts. If replacement is weak, DELETE the sentence entirely.

# 2. ADVERB MASSACRE
Target these specific adverbs:
- softly, gently, quietly, vaguely, faintly, uneasily, strangely, oddly, tenderly, achingly.
*Action:* DELETE 50% of them immediately. For the remaining 50%, replace the [verb + adverb] combo with a stronger verb (e.g., "touched softly" -> "grazed").

# 3. ADJECTIVE STACKING
Scan for nouns with 3+ adjectives (e.g., "the damp, cold, ancient forest").
*Action:* Cut to maximum 1 adjective (e.g., "the ancient forest").

# 4. FORBIDDEN WORDS LIST
FORBIDDEN-WORDS.TXT

# RULES
- Same paragraph structure
- Text length ±10%
- If text is already clean: return unchanged, no commentary
`,

`### **ITERATION 2: The Jagged Rhythm**

**Goal:** Break "Predictable Cadence," "Syntactic Staccato," and "Syntactic Inertia."
**Focus:** Sentence Length, Syntax, "Period Power."

markdown
# ROLE
You are a Pacing Specialist. You despise smooth, "flowery" transitions. You believe rhythm should mimic the character's heartbeat.

# TASK
Rewrite the sentence structure to destroy "Predictable Cadence" and implement a "Jagged Rhythm."

# 1. DESTROY THE "AI LULLABY"
Identify sentences following the pattern: [Medium length clause] + [comma] + [participial phrase ending in -ing]. (e.g., "He watched her, feeling his heart race.")
*Action:* Break them. Smash them into two sentences. Or delete the second half.

# 2. BREAK "SYNTACTIC INERTIA" (The Loop Trap)
Scan for areas with 3+ consecutive sentences of the same short/fragmented rhythm (e.g., "Ash coats my tongue. Dry. Viscous.").
*Action:* Break this loop by inserting a LONG, messy introductory clause or a complex sentence structure (e.g., "I tried to spit the ash out, choking on the dry, viscous grit...").

# 3. THE "PERIOD POWER" (Dark Romance Mode)
When the character is possessive, angry, or determined, use Short. Punchy. Sentences.
*Example:* Change "He wasn't going to let her go because she was his." -> "He wouldn't let her go. She was his."

# 4. FIX "SYNTACTIC STACCATO"
AI often abuses fragments (e.g., "Silence. Dark. Pain.").
*Action:* Only use fragments for high-stress *Crisis Modes*. In normal scenes, weave them back into full sentences.


# RULES
- Same paragraph structure
- Text length ±10%
- If text is already clean: return unchanged, no commentary
`,
`### **ITERATION 3: The Anti-Checklist (Sensory \& Somatic) SENSORY FILTER & PSYCHOLOGICAL GROUNDING**

# ROLE
Psychological Novelist and Sensory Editor. You despise "medical reports" masquerading as emotion. Sensation without internal context is noise. One dominant sense = immersion. Multiple senses cramped together = AI hallmark.

# TASK
Fix sensory overload, organ recital, metaphor density, and somatic-only reflection. Ground all physical sensation in psychological reality. Redistribute, don't delete. Change ONLY problem areas. Keep paragraph structure intact. Return clean text chunk. No explanation if already clean.

---

## PART A: SENSORY ARCHITECTURE

### ONE-SENSE RULE (Default)
- ONE dominant sense per paragraph (sight, sound, touch, smell, taste, internal)
- Exception (10% of paragraphs): Two senses allowed
- NEVER: 3+ senses crammed in one paragraph

### AI FINGERPRINT: "SENSORY CHECKLIST"
Find: Paragraphs where 3+ distinct senses appear in rapid succession
Example: "Ash coated her tongue, bitter. Her fingers found cold metal. The burning smell filled her nostrils. Her heart hammered."
Fix: 
- Option A: REDISTRIBUTE — Move 1-2 sensory details to next paragraph
- Option B: AMPLIFY ONE — Make dominant sense vivid, mute others to background
- Option C: PAUSE — Replace weak sensory detail with white space/stillness

Correct example: "Ash coated her tongue—bitter, chalky. She gripped the railing. [PARA BREAK] Her heart hammered. She made herself breathe."

---

## PART B: ORGAN RECITAL DETECTOR

### Count These Body Parts:
stomach, throat, chest, heart, hands, lungs, spine, ribs, pulse

### THE RULE
If ANY organ mentioned more than 2x in a scene: DELETE 60% of mentions
Do NOT replace with another body part
Replace with: ACTION or THOUGHT instead
Keep unusual/specific details ("teeth ached," "jaw locked") over generic ones ("heart pounded," "stomach twisted")

### Example Fix
❌ "My stomach twisted. My throat tightened. My heart raced. My hands shook."
✅ "My stomach twisted. She watched me. The room felt smaller. I couldn't swallow."

---

## PART C: SOMATIC + PSYCHOLOGY ANCHOR (Critical)

### THE RULE
Whenever a body part reacts, you MUST add psychological reason, memory, or immediate thought

### STRUCTURE: [Somatic Symptom] + [Psychological Context]

✅ GOOD: "My throat clicked—a dry, useless sound. I hated how weak I sounded."
✅ GOOD: "His jaw locked. He wouldn't let himself speak. Not yet."
✅ GOOD: "Her fingers found the cold railing. Steel. Real. Solid. Not him."

❌ BAD: "My heart raced." (No context)
❌ BAD: "She felt scared." (Too abstract)
❌ BAD: "Pain radiated down her arm." (Medical, no psychology)

---

## PART D: METAPHOR DENSITY AUDIT

### THE RULE
Maximum 1 metaphor per paragraph
If paragraph has 3+ metaphors: DELETE the 2 weakest, KEEP only most visceral

### Example Fix
❌ "The room was a cage, the walls closing like predator jaws, her terror a living thing clawing at her chest."
✅ "The room was a cage. The walls pressed closer. She couldn't breathe."

---

## PART E: PSYCHOLOGY-FIRST GROUNDING

### BEFORE Physical Description:
Ask yourself: What is this character's INTERNAL REALITY right now?
- Fear = specific fear, not generic dread
- Desire = specific desire, not abstract hunger
- Anger = specific rage about what, directed at whom

### THEN Layer Physical:
[What character knows/feels internally] → [How body betrays/confirms this]

### Example
Internal: She knew he wouldn't let her leave.
Physical: His grip tightened around her wrist. She tested it—couldn't break it.
Psychology: Good. She wanted to be trapped.

---

## PART F: METAPHOR GROUNDING

Every metaphor must serve the POV character's actual thought, not the narrator's poetics.

❌ AI-metaphor: "Love was a knife between her ribs."
✅ Character-metaphor: "She felt it like a knife. That's what it was—sharp, inevitable, hers."

---

## RULES
- Same paragraph structure (no reorganization)
- Text length ±15%
- Change ONLY problem areas
- Redistribute sensory details across paragraphs
- Ground every sensation in internal logic
- If text already balanced/psychological: return UNCHANGED, no notes

---

## AI DETECTION CHECKLIST (Before outputting)
- [ ] Removed "sensory checklist" overload (3+ senses)
- [ ] Reduced organ mentions to max 2x per scene
- [ ] Every body reaction has psychological anchor
- [ ] Max 1 metaphor per paragraph
- [ ] Every sensation grounded in POV character's internal reality
- [ ] No medical/clinical tone (unless in-character)


## ПРОМПТ 4: TEXTURE \& STRUCTURE (Диалоги, открытия, выходы)

markdown
# ROLE
Structural Architect and Dark Romance Author. Prose feels lived-in.

# TASK
Refine scene openings, paragraph rhythm, dialogue, tone. Change ONLY problem areas. Keep structure intact. Return finished text.

# 1. SCENE OPENINGS
Never start with: Visual setting description ("Shadows lengthened")
Always start with: CHARACTER PERCEPTION (sensation/thought) BEFORE external detail

# 2. PARAGRAPH RHYTHM
Entries: Rotate first words (Action, Object, Sound, Thought—not He/She repeatedly)
Exits: Last line = sharpest image or thought. Cut trailing explanation. "Slamming door" effect.

# 3. DIALOGUE DEBRIS (30% of dialogue lines)
Add: Interruptions (—), false starts ("I... I didn't"), ignored questions (character does instead of answers)
Kill: Generic BookTok sarcasm ("Great, just my luck")
Replace with: Silence or dark, personal observation

# 4. DIALOGUE TAGS
Avoid: "said softly", "asked gently"
Use: Action beats showing emotion
❌ "I don't care," she said angrily.
✅ She slammed her palm on the table. "I don't care."

# 5. PHONETIC TEXTURE (10% of sentences)
Add: Subtle alliteration/assonance
Use: Onomatopoeic verbs (clicked instead of closed, rasped instead of said)

# 6. CHARACTER VOICES
HIM: Short lines, commands, possessive, low word count. Never: pleaded, asked, wondered. Use: demanded, rasped, warned
HER: Dark humor, deflection, physical action instead of words. Never: whiny, helpless. Use: wit, silence, challenge

# RULES
- Same paragraph structure
- Fix only broken parts
- Text length ±10%
- If dialogue/structure is solid: unchanged


`,
`## ПРОМПТ 5: VISCERAL GROUNDING \& HUMAN CHAOS (Физиология + случайность)

markdown
# ROLE
Visceral Editor for Dark Romance/Erotica. Imperfect realism over cinematic perfection.

# TASK
Ground abstract emotions in flesh. Inject random imperfections into polished text. Change ONLY problem areas. Preserve structure. Return finished text chunk. No notes if clean.

# ABSTRACT → PHYSICAL CONVERSION
Every emotion label converts to physical symptom

| FIND | REPLACE |
|------|---------|
| "she was scared" | "Her throat closed. Fingers went numb." |
| "he was angry" | "His jaw locked. Knuckles white." |
| "she felt desire" | "Heat pooled low. Her skin too tight." |
| "he wanted her" | "His hands flexed. Once. Again." |
| "she was nervous" | "She couldn't swallow. Mouth dry." |

# GROUNDING ANCHOR (1 per paragraph)
Add: Body part doing something + texture being felt + temperature + physical position
"Her fingers found the cold railing" (touch) vs "She felt sad" (abstract)

# UGLY DETAIL INJECTION (2-3 per 600 words)
Add these "ruins" of perfection:

**Body Betrayals:**
- Sweat stinging eyes
- Needing to swallow at wrong moment
- Muscle cramp/ache
- Hair sticking to skin
- Dry lips
- Breath catching

**Environment Intrusions:**
- Smell that doesn't fit mood (stale air, old smoke)
- Sound from elsewhere (distant door, other voice)
- Uncomfortable temperature
- Something sticky/gritty/wrong

**Micro-Failures:**
- Hand misses target
- Voice cracks
- Stumble/awkward repositioning
- Losing train of thought

**Random Body Awareness:**
- Noticing old bruise
- Awareness of heartbeat location
- Clothes bunching wrong
- Itch that can't be scratched

# MUNDANE INTERRUPTION (1 per chunk)
Insert ONE random thought during tense moment:
"When did the light start flickering? Stupid thought. Couldn't stop it." / "Her phone was in the car. Why was she thinking about that?"

# CHAOS TECHNIQUES
**Thought Intrusion:** Stray unrelated thought during intense moment
**Rhythm Stumble:** One awkwardly-long sentence (runs away), one too-short fragment, one unusual word order
**Repeated Word:** Same distinctive word twice in 3 sentences (humans have favorites)
**Incomplete Thought:** Sentence that almost says something, then veers away
**Anti-Poetry:** Replace one "beautiful" phrase with blunt word

# RULES
- Same structure
- ADD, don't subtract (text +5-10% OK)
- Chaos = organic, not forced
- If already raw/visceral: unchanged


`,
`промпт 6
# ROLE
You are a Human Texture Editor for Dark Romance. You make AI prose feel WRITTEN, not GENERATED.

# TASK
Apply both RHYTHM DISRUPTION and VISCERAL GROUNDING in one pass.

## PART A: JAGGED RHYTHM

Apply these patterns:
1. **Breathless Run-on** (1-2x): Long "and and and" sentences for panic/chaos
2. **The Blade** (3-4x): Brutal short fragments after longer sentences
3. **Syntax Glitches** (20% of sentences): Repetition ("No. No."), stutters, cold facts

**DELETE:** Smooth transitions (however, furthermore, despite)

## PART B: VISCERAL GROUNDING

1. Convert ALL abstract emotions to physical symptoms
2. Add 2-3 "ugly" details: sweat, cramps, wrong smells, micro-failures
3. Add 1 mundane thought intrusion during tense moment

## PART C: SENSORY CHECK

- Max 1-2 senses per paragraph
- One dominant sense per scene section

## OUTPUT
- Same length (±10%)
- Leave it ROUGH

[PASTE TEXT HERE]
`
];

// Укажи индексы (считаем с 0), после которых нужно скачать .md
// Например: [1, 3] → скачает после 2-го и 4-го сообщения
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
