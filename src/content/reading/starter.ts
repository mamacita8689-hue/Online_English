import type { ReadingStarterContent } from './types';

export const readingStarter: ReadingStarterContent = {
  alphabet: [
    { upper: 'A', lower: 'a', name: 'эй', sound: '[æ]', word: 'apple', translation: 'яблоко', emoji: '🍎', visual: 'apple' },
    { upper: 'B', lower: 'b', name: 'би', sound: '[b]', word: 'ball', translation: 'мяч', emoji: '⚽' },
    { upper: 'C', lower: 'c', name: 'си', sound: '[k]', word: 'cat', translation: 'кот', emoji: '🐱', visual: 'cat' },
    { upper: 'D', lower: 'd', name: 'ди', sound: '[d]', word: 'dog', translation: 'собака', emoji: '🐶', visual: 'dog' },
    { upper: 'E', lower: 'e', name: 'и', sound: '[e]', word: 'egg', translation: 'яйцо', emoji: '🥚' },
    { upper: 'F', lower: 'f', name: 'эф', sound: '[f]', word: 'fish', translation: 'рыба', emoji: '🐟' },
    { upper: 'G', lower: 'g', name: 'джи', sound: '[g]', word: 'green', translation: 'зелёный', emoji: '🟢' },
    { upper: 'H', lower: 'h', name: 'эйч', sound: '[h]', word: 'hat', translation: 'шляпа', emoji: '🎩' },
    { upper: 'I', lower: 'i', name: 'ай', sound: '[ɪ]', word: 'pig', translation: 'поросёнок', emoji: '🐷', visual: 'pig' },
    { upper: 'J', lower: 'j', name: 'джей', sound: '[dʒ]', word: 'jam', translation: 'джем', emoji: '🍓' },
    { upper: 'K', lower: 'k', name: 'кей', sound: '[k]', word: 'kite', translation: 'воздушный змей', emoji: '🪁' },
    { upper: 'L', lower: 'l', name: 'эл', sound: '[l]', word: 'lion', translation: 'лев', emoji: '🦁' },
    { upper: 'M', lower: 'm', name: 'эм', sound: '[m]', word: 'milk', translation: 'молоко', emoji: '🥛' },
    { upper: 'N', lower: 'n', name: 'эн', sound: '[n]', word: 'nose', translation: 'нос', emoji: '👃' },
    { upper: 'O', lower: 'o', name: 'оу', sound: '[ɒ]', word: 'dog', translation: 'собака', emoji: '🐶', visual: 'dog' },
    { upper: 'P', lower: 'p', name: 'пи', sound: '[p]', word: 'pen', translation: 'ручка', emoji: '🖊️', visual: 'pen' },
    { upper: 'Q', lower: 'q', name: 'кью', sound: '[kw]', word: 'queen', translation: 'королева', emoji: '👑' },
    { upper: 'R', lower: 'r', name: 'ар', sound: '[r]', word: 'red', translation: 'красный', emoji: '🔴' },
    { upper: 'S', lower: 's', name: 'эс', sound: '[s]', word: 'sun', translation: 'солнце', emoji: '☀️', visual: 'sun' },
    { upper: 'T', lower: 't', name: 'ти', sound: '[t]', word: 'ten', translation: 'десять', emoji: '🔟' },
    { upper: 'U', lower: 'u', name: 'ю', sound: '[ʌ]', word: 'sun', translation: 'солнце', emoji: '☀️', visual: 'sun' },
    { upper: 'V', lower: 'v', name: 'ви', sound: '[v]', word: 'van', translation: 'фургон', emoji: '🚐' },
    { upper: 'W', lower: 'w', name: 'дабл-ю', sound: '[w]', word: 'window', translation: 'окно', emoji: '🪟' },
    { upper: 'X', lower: 'x', name: 'экс', sound: '[ks]', word: 'box', translation: 'коробка', emoji: '📦' },
    { upper: 'Y', lower: 'y', name: 'уай', sound: '[j]', word: 'yellow', translation: 'жёлтый', emoji: '🟡' },
    { upper: 'Z', lower: 'z', name: 'зед', sound: '[z]', word: 'zebra', translation: 'зебра', emoji: '🦓' },
  ],
  shortVowels: [
    {
      id: 'short-a', label: 'a', sound: '[æ]', explanationRu: 'В коротких словах буква a часто звучит примерно как широкий звук «э-а».',
      examples: [
        { word: 'cat', translation: 'кот', highlight: 'a', emoji: '🐱', visual: 'cat' },
        { word: 'bag', translation: 'сумка', highlight: 'a', emoji: '🎒' },
        { word: 'hat', translation: 'шляпа', highlight: 'a', emoji: '🎩' },
      ],
    },
    {
      id: 'short-e', label: 'e', sound: '[e]', explanationRu: 'В коротких словах e часто даёт короткий звук, похожий на русское «э».',
      examples: [
        { word: 'pen', translation: 'ручка', highlight: 'e', emoji: '🖊️', visual: 'pen' },
        { word: 'ten', translation: 'десять', highlight: 'e', emoji: '🔟' },
        { word: 'bed', translation: 'кровать', highlight: 'e', emoji: '🛏️' },
      ],
    },
    {
      id: 'short-i', label: 'i', sound: '[ɪ]', explanationRu: 'Короткая i звучит мягко и кратко. Слушай слово целиком, не пытайся читать её как русскую «и».',
      examples: [
        { word: 'pig', translation: 'поросёнок', highlight: 'i', emoji: '🐷', visual: 'pig' },
        { word: 'big', translation: 'большой', highlight: 'i', emoji: '🐘' },
        { word: 'six', translation: 'шесть', highlight: 'i', emoji: '6️⃣' },
      ],
    },
    {
      id: 'short-o', label: 'o', sound: '[ɒ]', explanationRu: 'В словах вроде dog и box буква o звучит коротко. Лучше запоминать звук на примерах.',
      examples: [
        { word: 'dog', translation: 'собака', highlight: 'o', emoji: '🐶', visual: 'dog' },
        { word: 'box', translation: 'коробка', highlight: 'o', emoji: '📦' },
        { word: 'hot', translation: 'горячий', highlight: 'o', emoji: '🔥' },
      ],
    },
    {
      id: 'short-u', label: 'u', sound: '[ʌ]', explanationRu: 'В коротких словах u часто звучит как короткий нейтральный звук, например в sun.',
      examples: [
        { word: 'sun', translation: 'солнце', highlight: 'u', emoji: '☀️', visual: 'sun' },
        { word: 'bus', translation: 'автобус', highlight: 'u', emoji: '🚌' },
        { word: 'cup', translation: 'чашка', highlight: 'u', emoji: '☕' },
      ],
    },
  ],
  combinations: [
    {
      id: 'sh', label: 'sh', sound: '[ʃ]', explanationRu: 'Две буквы sh вместе часто дают звук «ш». Смотри на них как на одну команду.',
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
      id: 'th', label: 'th', sound: '[θ] / [ð]', explanationRu: 'У th два частых звука. Язык слегка касается зубов. Сначала важно научиться слышать их.',
      examples: [
        { word: 'three', translation: 'три', highlight: 'th', emoji: '3️⃣' },
        { word: 'this', translation: 'это', highlight: 'th', emoji: '👉' },
      ],
    },
    {
      id: 'ee', label: 'ee', sound: '[iː]', explanationRu: 'Две буквы ee часто дают длинный звук «ии».',
      examples: [
        { word: 'tree', translation: 'дерево', highlight: 'ee', emoji: '🌳', visual: 'tree' },
        { word: 'green', translation: 'зелёный', highlight: 'ee', emoji: '🟢' },
      ],
    },
    {
      id: 'oo', label: 'oo', sound: '[ʊ] / [uː]', explanationRu: 'У oo бывают разные звуки. На старте запоминаем слово вместе со звучанием.',
      examples: [
        { word: 'book', translation: 'книга', highlight: 'oo', emoji: '📘', visual: 'book' },
        { word: 'moon', translation: 'луна', highlight: 'oo', emoji: '🌙' },
      ],
    },
    {
      id: 'ar', label: 'ar', sound: '[ɑː]', explanationRu: 'Сочетание ar часто слышится как длинный звук в словах car и star.',
      examples: [
        { word: 'car', translation: 'машина', highlight: 'ar', emoji: '🚗', visual: 'car' },
        { word: 'star', translation: 'звезда', highlight: 'ar', emoji: '⭐', visual: 'star' },
      ],
    },
    {
      id: 'or', label: 'or', sound: '[ɔː]', explanationRu: 'Сочетание or часто встречается в коротких знакомых словах.',
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
      options: [{ id: 'a', text: 'cat', emoji: '🐱' }, { id: 'b', text: 'pen', emoji: '🖊️' }, { id: 'c', text: 'sun', emoji: '☀️' }], answer: 'a',
      explanationRu: 'В слове cat буква a даёт короткий звук [æ].',
    },
    {
      id: 'starter-03', instructionRu: 'Какое сочетание слышится в начале слова?', prompt: 'ship', speakText: 'ship',
      options: [{ id: 'a', text: 'sh' }, { id: 'b', text: 'ch' }, { id: 'c', text: 'th' }], answer: 'a',
      explanationRu: 'ship начинается с sh — это звук [ʃ], похожий на «ш».',
    },
    {
      id: 'starter-04', instructionRu: 'Выбери слово с ch.', prompt: 'Найди ch',
      options: [{ id: 'a', text: 'chair', emoji: '🪑' }, { id: 'b', text: 'ship', emoji: '🚢' }, { id: 'c', text: 'tree', emoji: '🌳' }], answer: 'a',
      explanationRu: 'chair начинается с букв ch.',
    },
    {
      id: 'starter-05', instructionRu: 'Послушай слово и выбери картинку.', prompt: 'Что ты услышал?', speakText: 'book',
      options: [{ id: 'a', text: 'book', emoji: '📘' }, { id: 'b', text: 'car', emoji: '🚗' }, { id: 'c', text: 'star', emoji: '⭐' }], answer: 'a',
      explanationRu: 'book — книга. В этом слове есть сочетание oo.',
    },
    {
      id: 'starter-06', instructionRu: 'Выбери слово с сочетанием ar.', prompt: 'ar',
      options: [{ id: 'a', text: 'car', emoji: '🚗' }, { id: 'b', text: 'fish', emoji: '🐟' }, { id: 'c', text: 'pen', emoji: '🖊️' }], answer: 'a',
      explanationRu: 'В слове car буквы ar стоят вместе.',
    },
  ],
};
