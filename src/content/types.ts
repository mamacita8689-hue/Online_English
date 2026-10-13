export type ExerciseType =
  | 'multiple-choice'
  | 'match'
  | 'missing-word'
  | 'sentence-builder'
  | 'translation';

export interface VocabularyItem {
  id: string;
  english: string;
  russian: string;
  example?: string;
  audio?: string;
  image?: string;
}

export interface TheoryBlock {
  id: string;
  title: string;
  explanationRu: string;
  examples: Array<{
    english: string;
    russian: string;
  }>;
}

export interface ExerciseOption {
  id: string;
  text: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  instructionRu: string;
  options?: ExerciseOption[];
  answer: string | string[];
  explanationRu: string;
  points: number;
}

export interface Lesson {
  id: string;
  title: string;
  titleRu: string;
  goalRu: string;
  vocabulary: VocabularyItem[];
  theory: TheoryBlock[];
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  order: number;
  title: string;
  titleRu: string;
  descriptionRu: string;
  lessons: Lesson[];
}