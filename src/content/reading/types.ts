export type VisualId =
  | 'apple'
  | 'cat'
  | 'pen'
  | 'pig'
  | 'dog'
  | 'sun'
  | 'ship'
  | 'chair'
  | 'tree'
  | 'book'
  | 'car'
  | 'star';

export interface AlphabetItem {
  upper: string;
  lower: string;
  name: string;
  sound: string;
  word: string;
  translation: string;
  emoji: string;
  visual?: VisualId;
}

export interface PhonicsExample {
  word: string;
  translation: string;
  highlight: string;
  emoji: string;
  visual?: VisualId;
}

export interface PhonicsPattern {
  id: string;
  label: string;
  sound: string;
  explanationRu: string;
  examples: PhonicsExample[];
}

export interface ReadingExerciseOption {
  id: string;
  text: string;
  emoji?: string;
}

export interface ReadingExercise {
  id: string;
  instructionRu: string;
  prompt: string;
  speakText?: string;
  options: ReadingExerciseOption[];
  answer: string;
  explanationRu: string;
}

export interface ReadingStarterContent {
  alphabet: AlphabetItem[];
  shortVowels: PhonicsPattern[];
  combinations: PhonicsPattern[];
  exercises: ReadingExercise[];
}
