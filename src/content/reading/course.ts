import { readingStarter } from './starter';
import type { AlphabetItem, PhonicsPattern, ReadingExercise } from './types';

export type ReadingLesson = {
  id: string;
  order: number;
  title: string;
  titleRu: string;
  descriptionRu: string;
  durationMin: number;
  icon: string;
  alphabet?: AlphabetItem[];
  patterns?: PhonicsPattern[];
  exercises: ReadingExercise[];
};

const ABCD = readingStarter.alphabet.slice(0, 4);
const EFGH = readingStarter.alphabet.slice(4, 8);
const IJKLM = readingStarter.alphabet.slice(8, 13);
const NOPQR = readingStarter.alphabet.slice(13, 18);
const STUVWX = readingStarter.alphabet.slice(18, 24);
const YZ = readingStarter.alphabet.slice(24);

export const readingLessons: ReadingLesson[] = [
  {
    id: 'letters-a-d', order: 1, title: 'Letters A–D', titleRu: 'Буквы A–D',
    descriptionRu: 'A a, B b, C c, D d: название буквы, звук и опорное слово.', durationMin: 6, icon: 'A–D', alphabet: ABCD,
    exercises: [
      { id: 'ad-1', instructionRu: 'Послушай и выбери букву.', prompt: 'Какая это буква?', speakText: 'B', options: [{ id: 'a', text: 'D' }, { id: 'b', text: 'B' }, { id: 'c', text: 'P' }], answer: 'b', explanationRu: 'Это буква B — «би».' },
      { id: 'ad-2', instructionRu: 'Выбери слово на букву C.', prompt: 'C → ?', options: [{ id: 'a', text: 'cat', emoji: '🐱', visual: 'cat' }, { id: 'b', text: 'dog', emoji: '🐶', visual: 'dog' }, { id: 'c', text: 'bed', emoji: '🛏️' }], answer: 'a', explanationRu: 'Cat начинается с C.' },
      { id: 'ad-3', instructionRu: 'Собери слово из букв.', prompt: '🐱 кот', kind: 'word-builder', tiles: ['c', 'a', 't'], answer: 'cat', explanationRu: 'Получилось cat.' },
    ],
  },
  {
    id: 'letters-e-h', order: 2, title: 'Letters E–H', titleRu: 'Буквы E–H',
    descriptionRu: 'E e, F f, G g, H h: учимся узнавать буквы глазами и на слух.', durationMin: 6, icon: 'E–H', alphabet: EFGH,
    exercises: [
      { id: 'eh-1', instructionRu: 'Найди маленькую букву.', prompt: 'Большая H — маленькая…', options: [{ id: 'a', text: 'n' }, { id: 'b', text: 'h' }, { id: 'c', text: 'k' }], answer: 'b', explanationRu: 'Пара: H h.' },
      { id: 'eh-2', instructionRu: 'Что начинается с F?', prompt: 'F → ?', options: [{ id: 'a', text: 'flag', emoji: '🚩' }, { id: 'b', text: 'egg', emoji: '🥚' }, { id: 'c', text: 'horse', emoji: '🐴' }], answer: 'a', explanationRu: 'Flag начинается с F.' },
      { id: 'eh-3', instructionRu: 'Послушай и выбери слово.', prompt: 'Что прозвучало?', speakText: 'horse', options: [{ id: 'a', text: 'horse' }, { id: 'b', text: 'glass' }, { id: 'c', text: 'egg' }], answer: 'a', explanationRu: 'Прозвучало horse.' },
    ],
  },
  {
    id: 'letters-i-m', order: 3, title: 'Letters I–M', titleRu: 'Буквы I–M',
    descriptionRu: 'I i, J j, K k, L l, M m и короткие слова для чтения.', durationMin: 7, icon: 'I–M', alphabet: IJKLM,
    exercises: [
      { id: 'im-1', instructionRu: 'Послушай и выбери первую букву.', prompt: 'Первая буква слова', speakText: 'mouse', options: [{ id: 'a', text: 'M' }, { id: 'b', text: 'N' }, { id: 'c', text: 'L' }], answer: 'a', explanationRu: 'Mouse начинается с M.' },
      { id: 'im-2', instructionRu: 'Что начинается с K?', prompt: 'K → ?', options: [{ id: 'a', text: 'kangaroo', emoji: '🦘' }, { id: 'b', text: 'lamp', emoji: '💡' }, { id: 'c', text: 'jug', emoji: '🏺' }], answer: 'a', explanationRu: 'Kangaroo начинается с K.' },
      { id: 'im-3', instructionRu: 'Выбери слово со звуком [ɪ].', prompt: '[ɪ]', options: [{ id: 'a', text: 'ink' }, { id: 'b', text: 'lamp' }, { id: 'c', text: 'mouse' }], answer: 'a', explanationRu: 'В ink слышится короткий [ɪ].' },
    ],
  },
  {
    id: 'letters-n-r', order: 4, title: 'Letters N–R', titleRu: 'Буквы N–R',
    descriptionRu: 'N n, O o, P p, Q q, R r: связываем букву, звук, слово и картинку.', durationMin: 7, icon: 'N–R', alphabet: NOPQR,
    exercises: [
      { id: 'nr-1', instructionRu: 'Что начинается с Q?', prompt: 'Q → ?', options: [{ id: 'a', text: 'queen', emoji: '👑' }, { id: 'b', text: 'rabbit', emoji: '🐰' }, { id: 'c', text: 'orange', emoji: '🍊' }], answer: 'a', explanationRu: 'Queen начинается с Q.' },
      { id: 'nr-2', instructionRu: 'Послушай слово и выбери букву.', prompt: 'Первая буква слова', speakText: 'rabbit', options: [{ id: 'a', text: 'P' }, { id: 'b', text: 'R' }, { id: 'c', text: 'N' }], answer: 'b', explanationRu: 'Rabbit начинается с R.' },
      { id: 'nr-3', instructionRu: 'Найди маленькую букву.', prompt: 'Большая P — маленькая…', options: [{ id: 'a', text: 'q' }, { id: 'b', text: 'p' }, { id: 'c', text: 'r' }], answer: 'b', explanationRu: 'Пара: P p.' },
    ],
  },
  {
    id: 'letters-s-x', order: 5, title: 'Letters S–X', titleRu: 'Буквы S–X',
    descriptionRu: 'S s, T t, U u, V v, W w, X x и знакомые слова для первого чтения.', durationMin: 7, icon: 'S–X', alphabet: STUVWX,
    exercises: [
      { id: 'sx-1', instructionRu: 'Что начинается с S?', prompt: 'S → ?', options: [{ id: 'a', text: 'snake', emoji: '🐍' }, { id: 'b', text: 'tree', emoji: '🌳', visual: 'tree' }, { id: 'c', text: 'window', emoji: '🪟' }], answer: 'a', explanationRu: 'Snake начинается с S.' },
      { id: 'sx-2', instructionRu: 'Какое слово заканчивается буквой X?', prompt: '… x', options: [{ id: 'a', text: 'box', emoji: '📦' }, { id: 'b', text: 'vest', emoji: '🦺' }, { id: 'c', text: 'tree', emoji: '🌳' }], answer: 'a', explanationRu: 'Box заканчивается буквой x.' },
      { id: 'sx-3', instructionRu: 'Выбери слово на U.', prompt: 'U → ?', options: [{ id: 'a', text: 'umbrella', emoji: '☂️' }, { id: 'b', text: 'window', emoji: '🪟' }, { id: 'c', text: 'snake', emoji: '🐍' }], answer: 'a', explanationRu: 'Umbrella начинается с U.' },
    ],
  },
  {
    id: 'letters-y-z', order: 6, title: 'Letters Y–Z', titleRu: 'Буквы Y–Z + повторение',
    descriptionRu: 'Y y, Z z и проверка всего алфавита перед переходом к чтению.', durationMin: 7, icon: 'Y Z', alphabet: YZ,
    exercises: [
      { id: 'yz-1', instructionRu: 'Послушай и выбери букву.', prompt: 'Какая это буква?', speakText: 'Z', options: [{ id: 'a', text: 'Y' }, { id: 'b', text: 'Z' }, { id: 'c', text: 'V' }], answer: 'b', explanationRu: 'Это буква Z — «зед».' },
      { id: 'yz-2', instructionRu: 'Что начинается с Y?', prompt: 'Y → ?', options: [{ id: 'a', text: 'yacht', emoji: '⛵' }, { id: 'b', text: 'zip', emoji: '🤐' }, { id: 'c', text: 'queen', emoji: '👑' }], answer: 'a', explanationRu: 'Yacht начинается с Y.' },
      { id: 'yz-3', instructionRu: 'Послушай слово и выбери первую букву.', prompt: 'Первая буква слова', speakText: 'zip', options: [{ id: 'a', text: 'S' }, { id: 'b', text: 'Z' }, { id: 'c', text: 'X' }], answer: 'b', explanationRu: 'Zip начинается с Z.' },
    ],
  },
  {
    id: 'short-vowels', order: 7, title: 'Short Vowels', titleRu: 'Короткие гласные',
    descriptionRu: 'После знакомства с буквами учимся слышать a, e, i, o, u внутри коротких слов.', durationMin: 8, icon: 'a e i', patterns: readingStarter.shortVowels,
    exercises: [
      { id: 'v-1', instructionRu: 'Какой звук тренируем?', prompt: 'c a t', speakText: 'cat', options: [{ id: 'a', text: 'a [æ]' }, { id: 'b', text: 'e [e]' }, { id: 'c', text: 'i [ɪ]' }], answer: 'a', explanationRu: 'В cat буква a даёт короткий звук [æ].' },
      { id: 'v-2', instructionRu: 'Послушай и выбери картинку.', prompt: 'Что ты слышишь?', speakText: 'pen', options: [{ id: 'a', text: 'pen', emoji: '🖊️', visual: 'pen' }, { id: 'b', text: 'pig', emoji: '🐷', visual: 'pig' }, { id: 'c', text: 'dog', emoji: '🐶', visual: 'dog' }], answer: 'a', explanationRu: 'Прозвучало pen.' },
      { id: 'v-3', instructionRu: 'Найди одинаковый гласный звук.', prompt: 'dog — ?', options: [{ id: 'a', text: 'box' }, { id: 'b', text: 'bed' }, { id: 'c', text: 'sun' }], answer: 'a', explanationRu: 'В dog и box слышится похожий короткий o.' },
      { id: 'v-4', kind: 'word-builder', instructionRu: 'Собери услышанное слово.', prompt: 'Слушай и собери', speakText: 'pig', tiles: ['p', 'i', 'g'], answer: 'pig', explanationRu: 'Pig: p + i + g.' },
    ],
  },
  {
    id: 'letter-pairs', order: 8, title: 'Letter Pairs', titleRu: 'Буквы работают вместе',
    descriptionRu: 'Дорабатываем школьный материал: sh, ch, th, ee, oo, ar, or.', durationMin: 9, icon: 'sh ch', patterns: readingStarter.combinations,
    exercises: [
      { id: 'p-1', instructionRu: 'Выбери сочетание в слове.', prompt: 'ship', speakText: 'ship', options: [{ id: 'a', text: 'sh' }, { id: 'b', text: 'ch' }, { id: 'c', text: 'th' }], answer: 'a', explanationRu: 'Ship начинается с sh.' },
      { id: 'p-2', instructionRu: 'Послушай и выбери картинку.', prompt: 'Что прозвучало?', speakText: 'chair', options: [{ id: 'a', text: 'chair', emoji: '🪑', visual: 'chair' }, { id: 'b', text: 'ship', emoji: '🚢', visual: 'ship' }, { id: 'c', text: 'tree', emoji: '🌳', visual: 'tree' }], answer: 'a', explanationRu: 'Прозвучало chair.' },
      { id: 'p-3', instructionRu: 'Какое сочетание слышишь?', prompt: 'tree', speakText: 'tree', options: [{ id: 'a', text: 'ee' }, { id: 'b', text: 'oo' }, { id: 'c', text: 'ar' }], answer: 'a', explanationRu: 'В tree сочетание ee.' },
      { id: 'p-4', kind: 'word-builder', instructionRu: 'Собери слово с sh.', prompt: '🚢 корабль', tiles: ['sh', 'i', 'p'], answer: 'ship', explanationRu: 'Ship: sh + i + p.' },
    ],
  },
  {
    id: 'first-reading', order: 9, title: 'First Reading', titleRu: 'Первое чтение',
    descriptionRu: 'Соединяем буквы и звуки, читаем короткие слова и простые предложения.', durationMin: 8, icon: '📖',
    patterns: [...readingStarter.shortVowels.slice(0, 3), ...readingStarter.combinations.slice(0, 2)],
    exercises: [
      { id: 'r-1', instructionRu: 'Прочитай и выбери картинку.', prompt: 'cat', options: [{ id: 'a', text: 'cat', emoji: '🐱', visual: 'cat' }, { id: 'b', text: 'dog', emoji: '🐶', visual: 'dog' }, { id: 'c', text: 'pig', emoji: '🐷', visual: 'pig' }], answer: 'a', explanationRu: 'Cat — кот.' },
      { id: 'r-2', instructionRu: 'Прочитай и выбери правильное слово.', prompt: '🐟', options: [{ id: 'a', text: 'fish' }, { id: 'b', text: 'ship' }, { id: 'c', text: 'chair' }], answer: 'a', explanationRu: '🐟 — fish.' },
      { id: 'r-3', instructionRu: 'Послушай и выбери фразу.', prompt: 'Что прозвучало?', speakText: 'big cat', options: [{ id: 'a', text: 'big cat' }, { id: 'b', text: 'red dog' }, { id: 'c', text: 'small pig' }], answer: 'a', explanationRu: 'Big cat — большой кот.' },
      { id: 'r-4', kind: 'word-builder', instructionRu: 'Собери слово по картинке.', prompt: '📘 книга', tiles: ['b', 'oo', 'k'], answer: 'book', explanationRu: 'Book: b + oo + k.' },
      { id: 'r-5', instructionRu: 'Прочитай короткое предложение.', prompt: 'This is a dog.', options: [{ id: 'a', text: 'Это собака.' }, { id: 'b', text: 'Это кошка.' }, { id: 'c', text: 'Это книга.' }], answer: 'a', explanationRu: 'This is a dog. — Это собака.' },
    ],
  },
];

export function getReadingLesson(id: string) {
  return readingLessons.find((lesson) => lesson.id === id);
}
