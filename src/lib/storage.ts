export type LessonProgress = {
  unitId: string;
  lessonId: string;
  bestPercent: number;
  completed: boolean;
  updatedAt: string;
};

export type MistakeRecord = {
  id: string;
  unitId: string;
  lessonId: string;
  exerciseId: string;
  prompt: string;
  wrongAnswer: string;
  correctAnswer: string;
  explanationRu: string;
  attempts: number;
  updatedAt: string;
};

type ProgressMap = Record<string, LessonProgress>;

const PROGRESS_KEY = 'online-english:progress';
const MISTAKES_KEY = 'online-english:mistakes';

function canUseStorage() {
  return typeof window !== 'undefined' && 'localStorage' in window;
}

export function getProgress(): ProgressMap {
  if (!canUseStorage()) return {};
  try {
    return JSON.parse(window.localStorage.getItem(PROGRESS_KEY) ?? '{}') as ProgressMap;
  } catch {
    return {};
  }
}

export function saveLessonProgress(unitId: string, lessonId: string, percent: number) {
  if (!canUseStorage()) return;
  const progress = getProgress();
  const key = `${unitId}:${lessonId}`;
  const previous = progress[key];

  progress[key] = {
    unitId,
    lessonId,
    bestPercent: Math.max(previous?.bestPercent ?? 0, percent),
    completed: (previous?.completed ?? false) || percent >= 80,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function getMistakes(): MistakeRecord[] {
  if (!canUseStorage()) return [];
  try {
    return JSON.parse(window.localStorage.getItem(MISTAKES_KEY) ?? '[]') as MistakeRecord[];
  } catch {
    return [];
  }
}

export function saveMistake(input: Omit<MistakeRecord, 'id' | 'attempts' | 'updatedAt'>) {
  if (!canUseStorage()) return;
  const mistakes = getMistakes();
  const id = `${input.unitId}:${input.lessonId}:${input.exerciseId}`;
  const current = mistakes.find((item) => item.id === id);
  const next: MistakeRecord = {
    ...input,
    id,
    attempts: (current?.attempts ?? 0) + 1,
    updatedAt: new Date().toISOString(),
  };

  const updated = [next, ...mistakes.filter((item) => item.id !== id)].slice(0, 50);
  window.localStorage.setItem(MISTAKES_KEY, JSON.stringify(updated));
}

export function clearMistakes() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(MISTAKES_KEY);
}
