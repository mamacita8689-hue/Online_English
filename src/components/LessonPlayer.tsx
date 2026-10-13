'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Exercise, Lesson } from '@/content/types';
import { saveLessonProgress, saveMistake } from '@/lib/storage';

type Props = {
  unitId: string;
  unitTitle: string;
  unitDescription: string;
  lesson: Lesson;
};

function normalizeText(value: string) {
  return value.trim().toLowerCase().replace(/[.!?]/g, '').replace(/\s+/g, ' ');
}

function isCorrectAnswer(exercise: Exercise, answer: string) {
  if (Array.isArray(exercise.answer)) return normalizeText(answer) === normalizeText(exercise.answer.join(' '));
  if (exercise.options?.length) return answer === exercise.answer;
  return normalizeText(answer) === normalizeText(exercise.answer);
}

function readableAnswer(exercise: Exercise) {
  if (Array.isArray(exercise.answer)) return exercise.answer.join(' ');
  if (exercise.options?.length) return exercise.options.find((option) => option.id === exercise.answer)?.text ?? exercise.answer;
  return exercise.answer;
}

export default function LessonPlayer({ unitId, unitTitle, unitDescription, lesson }: Props) {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const exercise = lesson.exercises[exerciseIndex];
  const correct = checked ? isCorrectAnswer(exercise, answer) : false;
  const totalPoints = useMemo(() => lesson.exercises.reduce((sum, item) => sum + item.points, 0), [lesson.exercises]);

  function speak(text: string) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  }

  function selectedAnswerText() {
    if (!exercise.options?.length) return answer;
    return exercise.options.find((option) => option.id === answer)?.text ?? answer;
  }

  function checkAnswer() {
    if (!answer.trim()) return;
    const result = isCorrectAnswer(exercise, answer);
    if (result) {
      setScore((current) => current + exercise.points);
    } else {
      saveMistake({
        unitId,
        lessonId: lesson.id,
        exerciseId: exercise.id,
        prompt: exercise.prompt,
        wrongAnswer: selectedAnswerText(),
        correctAnswer: readableAnswer(exercise),
        explanationRu: exercise.explanationRu,
      });
    }
    setChecked(true);
  }

  function nextExercise() {
    if (exerciseIndex === lesson.exercises.length - 1) {
      const percent = Math.round((score / totalPoints) * 100);
      saveLessonProgress(unitId, lesson.id, percent);
      setFinished(true);
      return;
    }
    setExerciseIndex((current) => current + 1);
    setAnswer('');
    setChecked(false);
  }

  function restart() {
    setExerciseIndex(0);
    setAnswer('');
    setChecked(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percent = Math.round((score / totalPoints) * 100);
    return (
      <main className="app-shell">
        <section className="panel result-card">
          <div className="result-emoji">{percent >= 80 ? '🌟' : percent >= 50 ? '👏' : '💪'}</div>
          <p className="eyebrow">Урок завершён</p>
          <h1>{percent >= 80 ? 'Отличная работа!' : 'Хорошая тренировка!'}</h1>
          <p className="result-score">{score} из {totalPoints} баллов · {percent}%</p>
          <p className="muted">Результат сохранён на этом устройстве. Ошибки можно повторить отдельно.</p>
          <div className="result-actions">
            <Link className="secondary-button" href="/">К темам</Link>
            <Link className="secondary-button" href="/mistakes">Мои ошибки</Link>
            <button className="primary-button" onClick={restart}>Пройти ещё раз</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <nav className="lesson-nav"><Link href="/">← Все темы</Link><Link href="/mistakes">🧠 Мои ошибки</Link></nav>
      <section className="hero-card">
        <div>
          <p className="eyebrow">Английский · 2 класс</p>
          <h1>{unitTitle}</h1>
          <p className="hero-subtitle">{unitDescription}</p>
        </div>
        <div className="hero-badge">📘</div>
      </section>

      <section className="panel lesson-intro">
        <div><p className="eyebrow">Урок</p><h2>{lesson.titleRu}</h2><p>{lesson.goalRu}</p></div>
        <div className="progress-box"><span>Задания</span><strong>{lesson.exercises.length}</strong></div>
      </section>

      <section className="panel">
        <p className="eyebrow">Новые слова</p><h2>Послушай и запомни</h2>
        <div className="word-grid">
          {lesson.vocabulary.map((word) => (
            <button className="word-card" key={word.id} onClick={() => speak(word.english)}>
              <span className="speaker">🔊</span><strong>{word.english}</strong><span>{word.russian}</span>{word.example ? <small>{word.example}</small> : null}
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="eyebrow">Разберёмся</p><h2>Простые правила</h2>
        <div className="theory-list">
          {lesson.theory.map((block) => (
            <article className="theory-card" key={block.id}>
              <h3>{block.title}</h3><p>{block.explanationRu}</p>
              <div className="examples">
                {block.examples.map((example) => <button key={example.english} onClick={() => speak(example.english)}><strong>{example.english}</strong><span>{example.russian}</span></button>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel exercise-card">
        <div className="exercise-topline"><span>Тренировка</span><span>{exerciseIndex + 1} / {lesson.exercises.length}</span></div>
        <div className="progress-track"><div style={{ width: `${((exerciseIndex + 1) / lesson.exercises.length) * 100}%` }} /></div>
        <p className="instruction">{exercise.instructionRu}</p><h2 className="prompt">{exercise.prompt}</h2>

        {exercise.options?.length ? (
          <div className="options">{exercise.options.map((option) => <button key={option.id} className={`option-button ${answer === option.id ? 'selected' : ''}`} onClick={() => !checked && setAnswer(option.id)} disabled={checked}>{option.text}</button>)}</div>
        ) : (
          <input className="answer-input" value={answer} disabled={checked} onChange={(event) => setAnswer(event.target.value)} placeholder={exercise.type === 'sentence-builder' ? 'Напиши предложение целиком' : 'Введи ответ'} onKeyDown={(event) => { if (event.key === 'Enter' && !checked) checkAnswer(); }} />
        )}

        {checked ? <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}><strong>{correct ? '✅ Верно!' : '💡 Разберём ошибку.'}</strong><p>{exercise.explanationRu}</p></div> : null}
        <div className="exercise-actions">
          {!checked ? <button className="primary-button" disabled={!answer.trim()} onClick={checkAnswer}>Проверить</button> : <button className="primary-button" onClick={nextExercise}>{exerciseIndex === lesson.exercises.length - 1 ? 'Показать результат' : 'Следующее задание'}</button>}
        </div>
      </section>
    </main>
  );
}
