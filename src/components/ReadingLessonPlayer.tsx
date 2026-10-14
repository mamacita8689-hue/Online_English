'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ReadingLesson } from '@/content/reading/course';
import type { PhonicsExample } from '@/content/reading/types';
import { saveLessonProgress, saveMistake } from '@/lib/storage';
import { speakEnglish } from '@/lib/speech';
import WordPicture from './WordPicture';

function HighlightWord({ example }: { example: PhonicsExample }) {
  const index = example.word.toLowerCase().indexOf(example.highlight.toLowerCase());
  if (index < 0) return <>{example.word}</>;
  return <>{example.word.slice(0, index)}<mark>{example.word.slice(index, index + example.highlight.length)}</mark>{example.word.slice(index + example.highlight.length)}</>;
}

export default function ReadingLessonPlayer({ lesson }: { lesson: ReadingLesson }) {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const exercise = lesson.exercises[exerciseIndex];
  const correct = checked && answer === exercise.answer;

  function selectedAnswerText() {
    if (exercise.kind === 'word-builder') return answer;
    return exercise.options?.find((option) => option.id === answer)?.text ?? answer;
  }

  function correctAnswerText() {
    if (exercise.kind === 'word-builder') return exercise.answer;
    return exercise.options?.find((option) => option.id === exercise.answer)?.text ?? exercise.answer;
  }

  function checkAnswer() {
    if (!answer) return;
    const isCorrect = answer === exercise.answer;
    if (isCorrect) {
      setScore((value) => value + 1);
    } else {
      saveMistake({
        unitId: 'reading-course',
        lessonId: lesson.id,
        exerciseId: exercise.id,
        prompt: exercise.prompt,
        wrongAnswer: selectedAnswerText(),
        correctAnswer: correctAnswerText(),
        explanationRu: exercise.explanationRu,
      });
    }
    setChecked(true);
  }

  function nextExercise() {
    if (exerciseIndex === lesson.exercises.length - 1) {
      const finalScore = score + (correct ? 0 : answer === exercise.answer ? 1 : 0);
      const percent = Math.round((finalScore / lesson.exercises.length) * 100);
      saveLessonProgress('reading-course', lesson.id, percent);
      setScore(finalScore);
      setFinished(true);
      return;
    }
    setExerciseIndex((value) => value + 1);
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

  function addTile(tile: string) {
    if (checked) return;
    setAnswer((value) => value + tile);
  }

  if (finished) {
    const percent = Math.round((score / lesson.exercises.length) * 100);
    return (
      <main className="app-shell reading-shell">
        <nav className="lesson-nav"><Link href="/reading">← К урокам чтения</Link></nav>
        <section className="panel result-card">
          <div className="result-emoji">{percent >= 80 ? '🌟' : '👏'}</div>
          <p className="eyebrow">Шаг {lesson.order} завершён</p>
          <h1>{lesson.titleRu}</h1>
          <p className="result-score">{score} из {lesson.exercises.length} · {percent}%</p>
          <p className="muted">Лучший результат сохранён на этом устройстве.</p>
          <div className="result-actions">
            <Link className="secondary-button" href="/reading">К урокам</Link>
            <button className="primary-button" onClick={restart}>Повторить</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell reading-shell">
      <nav className="lesson-nav"><Link href="/reading">← Все уроки чтения</Link><Link href="/mistakes">🧠 Мои ошибки</Link></nav>

      <section className="hero-card reading-lesson-hero">
        <div>
          <p className="eyebrow">Шаг {lesson.order} · {lesson.durationMin} минут</p>
          <h1>{lesson.titleRu}</h1>
          <p className="hero-subtitle">{lesson.descriptionRu}</p>
        </div>
        <div className="reading-lesson-hero-icon">{lesson.icon}</div>
      </section>

      {lesson.alphabet ? (
        <section className="panel">
          <p className="eyebrow">Смотри и слушай</p>
          <h2>Буквы этого урока</h2>
          <p className="section-copy">Нажми на карточку: услышишь название буквы и слово-пример.</p>
          <div className="alphabet-grid lesson-alphabet-grid">
            {lesson.alphabet.map((item) => (
              <button className="letter-card" key={item.upper} onClick={() => void speakEnglish(`${item.upper}. ${item.word}`)}>
                <div className="letter-top"><span className="letter-pair">{item.upper}<small>{item.lower}</small></span><span className="letter-emoji">{item.emoji}</span></div>
                <strong>{item.word}</strong><span>{item.translation}</span>
                <div className="letter-meta"><span>название: {item.name}</span><span>пример звука: {item.sound}</span></div>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {lesson.patterns ? (
        <section className="panel">
          <p className="eyebrow">Слушай и замечай</p>
          <h2>Звуковые шаблоны</h2>
          <div className="phonics-list">
            {lesson.patterns.map((pattern) => (
              <article className="phonics-card" key={pattern.id}>
                <div className="phonics-head"><div className="sound-badge">{pattern.label}</div><div><p className="sound-line">Звук <strong>{pattern.sound}</strong></p><p>{pattern.explanationRu}</p></div></div>
                <div className="phonics-examples">
                  {pattern.examples.map((example) => (
                    <button className="visual-word-card" key={example.word} onClick={() => void speakEnglish(example.word)}>
                      <WordPicture visual={example.visual} emoji={example.emoji} label={example.word} />
                      <span className="visual-word"><HighlightWord example={example} /></span>
                      <span className="visual-translation">{example.translation}</span>
                      <span className="listen-chip">🔊 Послушать</span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="panel exercise-card reading-lesson-practice">
        <div className="exercise-topline"><span>Проверь себя</span><span>{exerciseIndex + 1} / {lesson.exercises.length}</span></div>
        <div className="progress-track"><div style={{ width: `${((exerciseIndex + 1) / lesson.exercises.length) * 100}%` }} /></div>
        <div className="practice-prompt-row">
          <div><p className="instruction">{exercise.instructionRu}</p><h2 className="prompt">{exercise.prompt}</h2></div>
          {exercise.speakText ? <button className="listen-button" onClick={() => void speakEnglish(exercise.speakText!)}>🔊 <span>Послушать</span></button> : null}
        </div>

        {exercise.kind === 'word-builder' ? (
          <div className="word-builder">
            <div className="built-word" aria-label="Собранное слово">{answer || <span>_ _ _</span>}</div>
            <div className="letter-tiles">
              {exercise.tiles?.map((tile, index) => <button key={`${tile}-${index}`} disabled={checked} onClick={() => addTile(tile)}>{tile}</button>)}
            </div>
            {!checked ? <button className="text-button builder-clear" disabled={!answer} onClick={() => setAnswer('')}>Очистить</button> : null}
          </div>
        ) : (
          <div className="visual-options">
            {exercise.options?.map((option) => (
              <button key={option.id} className={`visual-option ${answer === option.id ? 'selected' : ''}`} onClick={() => !checked && setAnswer(option.id)} disabled={checked}>
                {option.visual ? <WordPicture visual={option.visual} emoji={option.emoji ?? '•'} label={option.text} /> : option.emoji ? <span>{option.emoji}</span> : null}
                <strong>{option.text}</strong>
              </button>
            ))}
          </div>
        )}

        {checked ? <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}><strong>{correct ? '✅ Верно!' : '💡 Разберём.'}</strong><p>{exercise.explanationRu}</p></div> : null}
        <div className="exercise-actions">{!checked ? <button className="primary-button" disabled={!answer} onClick={checkAnswer}>Проверить</button> : <button className="primary-button" onClick={nextExercise}>{exerciseIndex === lesson.exercises.length - 1 ? 'Завершить урок' : 'Следующее'}</button>}</div>
      </section>
    </main>
  );
}
