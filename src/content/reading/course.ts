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

const AtoM = readingStarter.alphabet.slice(0, 13);
const NtoZ = readingStarter.alphabet.slice(13);

export const readingLessons: ReadingLesson[] = [
  {
    id: 'alphabet-a-m', order: 1, title: 'Alphabet A–M', titleRu: 'Буквы A–M',
    descriptionRu: 'Первые 13 букв: название, пример звука и знакомое слово.', durationMin: 7, icon: 'ABC', alphabet: AtoM,
    exercises: [
      { id: 'am-1', instructionRu: 'Послушай и выбери букву.', prompt: 'Какая это буква?', speakText: 'B', options: [{ id: 'a', text: 'D' }, { id: 'b', text: 'B' }, { id: 'c', text: 'P' }], answer: 'b', explanationRu: 'Это буква B — “би”.' },
      { id: 'am-2', instructionRu: 'Выбери слово на букву C.', prompt: 'C → ?', options: [{ id: 'a', text: 'cat', emoji: '🐱', visual: 'cat' }, { id: 'b', text: 'dog', emoji: '🐶', visual: 'dog' }, { id: 'c', text: 'fish', emoji: '🐟' }], answer: 'a', explanationRu: 'Cat начинается с буквы C.' },
      { id: 'am-3', instructionRu: 'Найди маленькую букву.', prompt: 'Большая H — маленькая…', options: [{ id: 'a', text: 'n' }, { id: 'b', text: 'h' }, { id: 'c', text: 'k' }], answer: 'b', explanationRu: 'Пара: H h.' },
      { id: 'am-4', instructionRu: 'Послушай слово и выбери первую букву.', prompt: 'Первая буква слова', speakText: 'milk', options: [{ id: 'a', text: 'M' }, { id: 'b', text: 'N' }, { id: 'c', text: 'L' }], answer: 'a', explanationRu: 'Milk начинается с M.' },
      { id: 'am-5', kind: 'word-builder', instructionRu: 'Собери слово из букв.', prompt: '🐱 кот', tiles: ['c', 'a', 't'], answer: 'cat', explanationRu: 'Получилось cat: c + a + t.' },
    ],
  },
  {
    id: 'alphabet-n-z', order: 2, title: 'Alphabet N–Z', titleRu: 'Буквы N–Z',
    descriptionRu: 'Вторая половина алфавита и повторение пар больших и маленьких букв.', durationMin: 7, icon: 'N–Z', alphabet: NtoZ,
    exercises: [
      { id: 'nz-1', instructionRu: 'Выбери слово на букву S.', prompt: 'S → ?', options: [{ id: 'a', text: 'sun', emoji: '☀️', visual: 'sun' }, { id: 'b', text: 'pen', emoji: '🖊️', visual: 'pen' }, { id: 'c', text: 'van', emoji: '🚐' }], answer: 'a', explanationRu: 'Sun начинается с S.' },
      { id: 'nz-2', instructionRu: 'Послушай и выбери букву.', prompt: 'Какая это буква?', speakText: 'Q', options: [{ id: 'a', text: 'Q' }, { id: 'b', text: 'G' }, { id: 'c', text: 'J' }], answer: 'a', explanationRu: 'Q называется “кью”.' },
      { id: 'nz-3', instructionRu: 'Найди маленькую букву.', prompt: 'Большая R — маленькая…', options: [{ id: 'a', text: 'p' }, { id: 'b', text: 'r' }, { id: 'c', text: 'v' }], answer: 'b', explanationRu: 'Пара: R r.' },
      { id: 'nz-4', instructionRu: 'Послушай слово и выбери первую букву.', prompt: 'Первая буква слова', speakText: 'zebra', options: [{ id: 'a', text: 'S' }, { id: 'b', text: 'Z' }, { id: 'c', text: 'X' }], answer: 'b', explanationRu: 'Zebra начинается с Z.' },
      { id: 'nz-5', kind: 'word-builder', instructionRu: 'Собери слово из букв.', prompt: '☀️ солнце', tiles: ['s', 'u', 'n'], answer: 'sun', explanationRu: 'Sun: s + u + n.' },
    ],
  },
  {
    id: 'short-vowels', order: 3, title: 'Short Vowels', titleRu: 'Короткие гласные',
    descriptionRu: 'Слушаем короткие a, e, i, o, u и узнаём их в простых словах.', durationMin: 8, icon: 'a e i', patterns: readingStarter.shortVowels,
    exercises: [
      { id: 'v-1', instructionRu: 'Какой звук тренируем?', prompt: 'c a t', speakText: 'cat', options: [{ id: 'a', text: 'a [æ]' }, { id: 'b', text: 'e [e]' }, { id: 'c', text: 'i [ɪ]' }], answer: 'a', explanationRu: 'В cat буква a даёт короткий звук [æ].' },
      { id: 'v-2', instructionRu: 'Послушай и выбери картинку.', prompt: 'Что ты слышишь?', speakText: 'pen', options: [{ id: 'a', text: 'pen', emoji: '🖊️', visual: 'pen' }, { id: 'b', text: 'pig', emoji: '🐷', visual: 'pig' }, { id: 'c', text: 'dog', emoji: '🐶', visual: 'dog' }], answer: 'a', explanationRu: 'Прозвучало pen.' },
      { id: 'v-3', instructionRu: 'Послушай и выбери слово.', prompt: 'Что ты слышишь?', speakText: 'pig', options: [{ id: 'a', text: 'peg' }, { id: 'b', text: 'pig' }, { id: 'c', text: 'pug' }], answer: 'b', explanationRu: 'Pig содержит короткую i.' },
      { id: 'v-4', instructionRu: 'Найди одинаковый звук.', prompt: 'dog — ?', options: [{ id: 'a', text: 'box' }, { id: 'b', text: 'bed' }, { id: 'c', text: 'sun' }], answer: 'a', explanationRu: 'В dog и box похожий короткий звук o.' },
      { id: 'v-5', kind: 'word-builder', instructionRu: 'Собери услышанное слово.', prompt: 'Слушай и собери', speakText: 'pig', tiles: ['p', 'i', 'g'], answer: 'pig', explanationRu: 'Pig: p + i + g.' },
    ],
  },
  {
    id: 'letter-pairs', order: 4, title: 'Letter Pairs', titleRu: 'Буквы работают вместе',
    descriptionRu: 'Узнаём sh, ch, th, ee, oo, ar и or как знакомые шаблоны чтения.', durationMin: 9, icon: 'sh ch', patterns: readingStarter.combinations,
    exercises: [
      { id: 'p-1', instructionRu: 'Выбери сочетание в слове.', prompt: 'ship', speakText: 'ship', options: [{ id: 'a', text: 'sh' }, { id: 'b', text: 'ch' }, { id: 'c', text: 'th' }], answer: 'a', explanationRu: 'Ship начинается с sh.' },
      { id: 'p-2', instructionRu: 'Послушай и выбери картинку.', prompt: 'Что прозвучало?', speakText: 'chair', options: [{ id: 'a', text: 'chair', emoji: '🪑', visual: 'chair' }, { id: 'b', text: 'ship', emoji: '🚢', visual: 'ship' }, { id: 'c', text: 'tree', emoji: '🌳', visual: 'tree' }], answer: 'a', explanationRu: 'Прозвучало chair.' },
      { id: 'p-3', instructionRu: 'Послушай слово.', prompt: 'Какое сочетание слышишь?', speakText: 'tree', options: [{ id: 'a', text: 'ee' }, { id: 'b', text: 'oo' }, { id: 'c', text: 'ar' }], answer: 'a', explanationRu: 'В tree сочетание ee.' },
      { id: 'p-4', instructionRu: 'Выбери слово с ar.', prompt: 'Где есть ar?', options: [{ id: 'a', text: 'car', emoji: '🚗', visual: 'car' }, { id: 'b', text: 'book', emoji: '📘', visual: 'book' }, { id: 'c', text: 'ship', emoji: '🚢', visual: 'ship' }], answer: 'a', explanationRu: 'В car есть ar.' },
      { id: 'p-5', kind: 'word-builder', instructionRu: 'Собери слово с sh.', prompt: '🚢 корабль', tiles: ['sh', 'i', 'p'], answer: 'ship', explanationRu: 'Ship: sh + i + p.' },
    ],
  },
  {
    id: 'first-reading', order: 5, title: 'First Reading', titleRu: 'Первое чтение',
    descriptionRu: 'Соединяем знакомые буквы и звуки и читаем короткие слова и фразы.', durationMin: 8, icon: '📖',
    patterns: [...readingStarter.shortVowels.slice(0, 3), ...readingStarter.combinations.slice(0, 2)],
    exercises: [
      { id: 'r-1', instructionRu: 'Прочитай и выбери картинку.', prompt: 'cat', options: [{ id: 'a', text: 'cat', emoji: '🐱', visual: 'cat' }, { id: 'b', text: 'dog', emoji: '🐶', visual: 'dog' }, { id: 'c', text: 'pig', emoji: '🐷', visual: 'pig' }], answer: 'a', explanationRu: 'Cat — кот.' },
      { id: 'r-2', instructionRu: 'Прочитай и выбери правильное слово.', prompt: '🐟', options: [{ id: 'a', text: 'fish' }, { id: 'b', text: 'ship' }, { id: 'c', text: 'chair' }], answer: 'a', explanationRu: '🐟 — fish.' },
      { id: 'r-3', instructionRu: 'Послушай и выбери фразу.', prompt: 'Что прозвучало?', speakText: 'big cat', options: [{ id: 'a', text: 'big cat' }, { id: 'b', text: 'red dog' }, { id: 'c', text: 'small pig' }], answer: 'a', explanationRu: 'Big cat — большой кот.' },
      { id: 'r-4', kind: 'word-builder', instructionRu: 'Собери слово по картинке.', prompt: '📘 книга', tiles: ['b', 'oo', 'k'], answer: 'book', explanationRu: 'Book: b + oo + k.' },
      { id: 'r-5', instructionRu: 'Прочитай короткое предложение.', prompt: 'This is a dog.', options: [{ id: 'a', text: 'Это собака.' }, { id: 'b', text: 'Это кошка.' }, { id: 'c', text: 'Это книга.' }], answer: 'a', explanationRu: 'This is a dog. — Это собака.' },
      { id: 'r-6', instructionRu: 'Послушай и найди предложение.', prompt: 'Что прозвучало?', speakText: 'This is a cat.', options: [{ id: 'a', text: 'This is a cat.' }, { id: 'b', text: 'This is a dog.' }, { id: 'c', text: 'This is a book.' }], answer: 'a', explanationRu: 'Прозвучало: This is a cat.' },
    ],
  },
];

export function getReadingLesson(id: string) {
  return readingLessons.find((lesson) => lesson.id === id);
}
