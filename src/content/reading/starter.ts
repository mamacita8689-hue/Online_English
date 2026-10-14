import type { ReadingStarterContent } from './types';

export const readingStarter: ReadingStarterContent = {
  // Буквы и опорные слова идут в той же последовательности, что и My Letters! в Spotlight 2.
  // Упражнения приложения оригинальные: учебник используется как ориентир по темам, а не копируется.
  alphabet: [
    { upper: 'A', lower: 'a', name: 'эй', sound: '[æ]', word: 'ant', translation: 'муравей', emoji: '🐜' },
    { upper: 'B', lower: 'b', name: 'би', sound: '[b]', word: 'bed', translation: 'кровать', emoji: '🛏️' },
    { upper: 'C', lower: 'c', name: 'си', sound: '[k]', word: 'cat', translation: 'кот', emoji: '🐱', visual: 'cat' },
    { upper: 'D', lower: 'd', name: 'ди', sound: '[d]', word: 'dog', translation: 'собака', emoji: '🐶', visual: 'dog' },
    { upper: 'E', lower: 'e', name: 'и', sound: '[e]', word: 'egg', translation: 'яйцо', emoji: '🥚' },
    { upper: 'F', lower: 'f', name: 'эф', sound: '[f]', word: 'flag', translation: 'флаг', emoji: '🚩' },
    { upper: 'G', lower: 'g', name: 'джи', sound: '[g]', word: 'glass', translation: 'стакан', emoji: '🥛' },
    { upper: 'H', lower: 'h', name: 'эйч', sound: '[h]', word: 'horse', translation: 'лошадь', emoji: '🐴' },
    { upper: 'I', lower: 'i', name: 'ай', sound: '[ɪ]', word: 'ink', translation: 'чернила', emoji: '🖋️' },
    { upper: 'J', lower: 'j', name: 'джей', sound: '[dʒ]', word: 'jug', translation: 'кувшин', emoji: '🏺' },
    { upper: 'K', lower: 'k', name: 'кей', sound: '[k]', word: 'kangaroo', translation: 'кенгуру', emoji: '🦘' },
    { upper: 'L', lower: 'l', name: 'эл', sound: '[l]', word: 'lamp', translation: 'лампа', emoji: '💡' },
    { upper: 'M', lower: 'm', name: 'эм', sound: '[m]', word: 'mouse', translation: 'мышь', emoji: '🐭' },
    { upper: 'N', lower: 'n', name: 'эн', sound: '[n]', word: 'nest', translation: 'гнездо', emoji: '🪺' },
    { upper: 'O', lower: 'o', name: 'оу', sound: '[ɒ]', word: 'orange', translation: 'апельсин', emoji: '🍊' },
    { upper: 'P', lower: 'p', name: 'пи', sound: '[p]', word: 'pin', translation: 'булавка', emoji: '📌' },
    { upper: 'Q', lower: 'q', name: 'кью', sound: '[kw]', word: 'queen', translation: 'королева', emoji: '👑' },
    { upper: 'R', lower: 'r', name: 'ар', sound: '[r]', word: 'rabbit', translation: 'кролик', emoji: '🐰' },
    { upper: 'S', lower: 's', name: 'эс', sound: '[s]', word: 'snake', translation: 'змея', emoji: '🐍' },
    { upper: 'T', lower: 't', name: 'ти', sound: '[t]', word: 'tree', translation: 'дерево', emoji: '🌳', visual: 'tree' },
    { upper: 'U', lower: 'u', name: 'ю', sound: '[ʌ]', word: 'umbrella', translation: 'зонт', emoji: '☂️' },
    { upper: 'V', lower: 'v', name: 'ви', sound: '[v]', word: 'vest', translation: 'жилет', emoji: '🦺' },
    { upper: 'W', lower: 'w', name: 'дабл-ю', sound: '[w]', word: 'window', translation: 'окно', emoji: '🪟' },
    { upper: 'X', lower: 'x', name: 'экс', sound: '[ks]', word: 'box', translation: 'коробка', emoji: '📦' },
    { upper: 'Y', lower: 'y', name: 'уай', sound: '[j]', word: 'yacht', translation: 'яхта', emoji: '⛵' },
    { upper: 'Z', lower: 'z', name: 'зед', sound: '[z]', word: 'zip', translation: 'молния', emoji: '🤐' },
  ],
  shortVowels: [
    {
      id: 'short-a', label: 'a', sound: '[æ]',
      explanationRu: 'В коротких словах a часто даёт широкий короткий звук [æ]. Сначала учимся узнавать его на слух.',
      examples: [
        { word: 'cat', translation: 'кот', highlight: 'a', emoji: '🐱', visual: 'cat' },
        { word: 'ant', translation: 'муравей', highlight: 'a', emoji: '🐜' },
        { word: 'flag', translation: 'флаг', highlight: 'a', emoji: '🚩' },
      ],
    },
    {
      id: 'short-e', label: 'e', sound: '[e]',
      explanationRu: 'Короткая e звучит похоже на русское «э», но произносится короче.',
      examples: [
        { word: 'bed', translation: 'кровать', highlight: 'e', emoji: '🛏️' },
        { word: 'egg', translation: 'яйцо', highlight: 'e', emoji: '🥚' },
        { word: 'pen', translation: 'ручка', highlight: 'e', emoji: '🖊️', visual: 'pen' },
      ],
    },
    {
      id: 'short-i', label: 'i', sound: '[ɪ]',
      explanationRu: 'Короткая i звучит быстро и мягко. Важно слушать слово целиком, а не читать её как русскую «и».',
      examples: [
        { word: 'ink', translation: 'чернила', highlight: 'i', emoji: '🖋️' },
        { word: 'pin', translation: 'булавка', highlight: 'i', emoji: '📌' },
        { word: 'pig', translation: 'поросёнок', highlight: 'i', emoji: '🐷', visual: 'pig' },
      ],
    },
    {
      id: 'short-o', label: 'o', sound: '[ɒ]',
      explanationRu: 'В простых словах o часто звучит коротко, как в dog и box.',
      examples: [
        { word: 'dog', translation: 'собака', highlight: 'o', emoji: '🐶', visual: 'dog' },
        { word: 'box', translation: 'коробка', highlight: 'o', emoji: '📦' },
        { word: 'hot', translation: 'горячий', highlight: 'o', emoji: '🔥' },
      ],
    },
    {
      id: 'short-u', label: 'u', sound: '[ʌ]',
      explanationRu: 'В некоторых коротких словах u даёт звук [ʌ]. Сравни его с началом слова umbrella.',
      examples: [
        { word: 'umbrella', translation: 'зонт', highlight: 'u', emoji: '☂️' },
        { word: 'sun', translation: 'солнце', highlight: 'u', emoji: '☀️', visual: 'sun' },
        { word: 'cup', translation: 'чашка', highlight: 'u', emoji: '☕' },
      ],
    },
  ],
  combinations: [
    {
      id: 'sh', label: 'sh', sound: '[ʃ]', explanationRu: 'Две буквы sh вместе часто дают звук «ш».',
      examples: [
        { word: 'ship', translation: 'корабль', highlight: 'sh', emoji: '🚢', visual: 'ship' },
        { word: 'fish', translation: 'рыба', highlight: 'sh', emoji: '🐟' },
      ],
    },
    {
      id: 'ch', label: 'ch', sound: '[tʃ]', explanationRu: 'Сочетание ch часто звучит как «ч».',
      examples: [
        { word: 'chair', translation: 'стул', highlight: 'ch', emoji: '🪑', visual: 'chair' },
        { word: 'chick', translation: 'цыплёнок', highlight: 'ch', emoji: '🐥' },
      ],
    },
    {
      id: 'th', label: 'th', sound: '[θ] / [ð]', explanationRu: 'У th два частых звука. Сначала достаточно научиться узнавать сочетание и слышать его.',
      examples: [
        { word: 'three', translation: 'три', highlight: 'th', emoji: '3️⃣' },
        { word: 'this', translation: 'это', highlight: 'th', emoji: '👉' },
      ],
    },
    {
      id: 'ee', label: 'ee', sound: '[iː]', explanationRu: 'Две буквы ee часто дают длинный звук [iː].',
      examples: [
        { word: 'tree', translation: 'дерево', highlight: 'ee', emoji: '🌳', visual: 'tree' },
        { word: 'green', translation: 'зелёный', highlight: 'ee', emoji: '🟢' },
      ],
    },
    {
      id: 'oo', label: 'oo', sound: '[ʊ] / [uː]', explanationRu: 'У oo бывают разные звуки. На старте запоминаем звучание вместе со словом.',
      examples: [
        { word: 'book', translation: 'книга', highlight: 'oo', emoji: '📘', visual: 'book' },
        { word: 'moon', translation: 'луна', highlight: 'oo', emoji: '🌙' },
      ],
    },
    {
      id: 'ar', label: 'ar', sound: '[ɑː]', explanationRu: 'Сочетание ar удобно узнавать целиком в словах car и star.',
      examples: [
        { word: 'car', translation: 'машина', highlight: 'ar', emoji: '🚗', visual: 'car' },
        { word: 'star', translation: 'звезда', highlight: 'ar', emoji: '⭐', visual: 'star' },
      ],
    },
    {
      id: 'or', label: 'or', sound: '[ɔː]', explanationRu: 'Сочетание or встречается в знакомом слове horse и других простых словах.',
      examples: [
        { word: 'horse', translation: 'лошадь', highlight: 'or', emoji: '🐴' },
        { word: 'short', translation: 'короткий', highlight: 'or', emoji: '📏' },
      ],
    },
  ],
  exercises: [
    {
      id: 'starter-01', instructionRu: 'Послушай и выбери букву.', prompt: 'Какая буква звучит?', speakText: 'A',
      options: [{ id: 'a', text: 'A a' }, { id: 'b', text: 'E e' }, { id: 'c', text: 'I i' }], answer: 'a',
      explanationRu: 'Это буква A. Её название — «эй».',
    },
    {
      id: 'starter-02', instructionRu: 'Выбери слово со звуком [æ].', prompt: '[æ]',
      options: [{ id: 'a', text: 'cat', emoji: '🐱' }, { id: 'b', text: 'bed', emoji: '🛏️' }, { id: 'c', text: 'sun', emoji: '☀️' }], answer: 'a',
      explanationRu: 'В слове cat буква a даёт короткий звук [æ].',
    },
    {
      id: 'starter-03', instructionRu: 'Какое сочетание слышится в начале слова?', prompt: 'ship', speakText: 'ship',
      options: [{ id: 'a', text: 'sh' }, { id: 'b', text: 'ch' }, { id: 'c', text: 'th' }], answer: 'a',
      explanationRu: 'Ship начинается с sh — это звук [ʃ].',
    },
  ],
};
