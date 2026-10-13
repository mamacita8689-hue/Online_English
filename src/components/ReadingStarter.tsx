'use client';

import Link from 'next/link';
import { useState } from 'react';
import { readingStarter } from '@/content/reading/starter';
import type { PhonicsExample, PhonicsPattern } from '@/content/reading/types';
import { saveLessonProgress, saveMistake } from '@/lib/storage';
import WordPicture from './WordPicture';

function speak(text: string, rate = 0.78) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function HighlightWord({ example }: { example: PhonicsExample }) {
  const index = example.word.toLowerCase().indexOf(example.highlight.toLowerCase());
  if (index < 0) return <>{example.word}</>;
  return <>{example.word.slice(0, index)}<mark>{example.word.slice(index, index + example.highlight.length)}</mark>{example.word.slice(index + example.highlight.length)}</>;
}

function PatternCard({ pattern }: { pattern: PhonicsPattern }) {
  return (
    <article className="phonics-card">
      <div className="phonics-head">
        <div className="sound-badge">{pattern.label}</div>
        <div><p className="sound-line">Звук <strong>{pattern.sound}</strong></p><p>{pattern.explanationRu}</p></div>
      </div>
      <div className="phonics-examples">
        {pattern.examples.map((example) => (
          <button className="visual-word-card" key={example.word} onClick={() => speak(example.word)}>
            <WordPicture visual={example.visual} emoji={example.emoji} label={example.word} />
            <span className="visual-word"><HighlightWord example={example} /></span>
            <span className="visual-translation">{example.translation}</span>
            <span className="listen-chip">🔊 Послушать</span>
          </button>
        ))}
      </div>
    </article>
  );
}

export default function ReadingStarter() {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const exercise = readingStarter.exercises[exerciseIndex];
  const correct = checked && answer === exercise.answer;
  const total = readingStarter.exercises.length;

  function checkAnswer() {
    if (!answer) return;
    const result = answer === exercise.answer;
    if (result) {
      setScore((value) => value + 1);
    } else {
      const wrong = exercise.options.find((option) => option.id === answer)?.text ?? answer;
      const right = exercise.options.find((option) => option.id === exercise.answer)?.text ?? exercise.answer;
      saveMistake({
        unitId: 'starter-reading',
        lessonId: 'starter-reading',
        exerciseId: exercise.id,
        prompt: exercise.prompt,
        wrongAnswer: wrong,
        correctAnswer: right,
        explanationRu: exercise.explanationRu,
      });
    }
    setChecked(true);
  }

  function nextExercise() {
    if (exerciseIndex === total - 1) {
      const finalScore = score;
      const percent = Math.round((finalScore / total) * 100);
      saveLessonProgress('starter-reading', 'starter-reading', percent);
      setFinished(true);
      return;
    }
    setExerciseIndex((value) => value + 1);
    setAnswer('');
    setChecked(false);
  }

  function restartQuiz() {
    setExerciseIndex(0);
    setAnswer('');
    setChecked(false);
    setScore(0);
    setFinished(false);
  }

  return (
    <main className="app-shell reading-shell">
      <nav className="lesson-nav"><Link href="/">← Главная</Link><Link href="/mistakes">🧠 Мои ошибки</Link></nav>

      <section className="hero-card reading-hero">
        <div>
          <p className="eyebrow">Starter · Учимся читать</p>
          <h1>Letters & Sounds</h1>
          <p className="hero-subtitle">Сначала буквы и звуки, затем короткие слова и знакомые сочетания. Нажимай на карточки и слушай английское произношение.</p>
          <div className="hero-actions"><a className="primary-button" href="#alphabet">Начать с алфавита</a><a className="secondary-button" href="#practice">К тренировке</a></div>
        </div>
        <div className="reading-mascot" aria-hidden="true"><span>ABC</span><small>🔊</small></div>
      </section>

      <section className="panel starter-guide">
        <p className="eyebrow">Как заниматься</p>
        <div className="learning-steps">
          <div><span>1</span><strong>Посмотри</strong><p>букву или сочетание</p></div>
          <div><span>2</span><strong>Послушай</strong><p>как звучит слово</p></div>
          <div><span>3</span><strong>Повтори</strong><p>слово вслух</p></div>
          <div><span>4</span><strong>Проверь себя</strong><p>в коротком задании</p></div>
        </div>
      </section>

      <section className="panel" id="alphabet">
        <div className="section-heading"><div><p className="eyebrow">Шаг 1</p><h2>Английский алфавит</h2><p className="section-copy">Буква имеет название, а в словах может давать разные звуки. Здесь показываем один простой пример для первого знакомства.</p></div><div className="alphabet-count">26 букв</div></div>
        <div className="alphabet-grid">
          {readingStarter.alphabet.map((item) => (
            <button className="letter-card" key={item.upper} onClick={() => speak(`${item.upper}. ${item.word}`)}>
              <div className="letter-top"><span className="letter-pair">{item.upper}<small>{item.lower}</small></span><span className="letter-emoji">{item.emoji}</span></div>
              <strong>{item.word}</strong><span>{item.translation}</span>
              <div className="letter-meta"><span>буква: {item.name}</span><span>пример: {item.sound}</span></div>
            </button>
          ))}
        </div>
        <div className="learning-note"><strong>Важно:</strong> звук в квадратных скобках — это подсказка, как слово звучит. Ребёнку не нужно заучивать фонетические знаки отдельно.</div>
      </section>

      <section className="panel">
        <p className="eyebrow">Шаг 2</p><h2>Короткие гласные</h2><p className="section-copy">Сравнивай похожие короткие слова. Нажми на картинку, послушай и повтори.</p>
        <div className="phonics-list">{readingStarter.shortVowels.map((pattern) => <PatternCard key={pattern.id} pattern={pattern} />)}</div>
      </section>

      <section className="panel">
        <p className="eyebrow">Шаг 3</p><h2>Буквы работают вместе</h2><p className="section-copy">Некоторые буквы удобнее узнавать сразу парой: sh, ch, th, ee, oo, ar, or.</p>
        <div className="phonics-list combinations-list">{readingStarter.combinations.map((pattern) => <PatternCard key={pattern.id} pattern={pattern} />)}</div>
      </section>

      <section className="panel contrast-panel">
        <div>
          <p className="eyebrow">Смотри глазами</p><h2>Выделяй знакомую часть слова</h2>
          <p className="section-copy">Цветом выделяем именно ту часть, которую сейчас тренируем. Так ребёнок быстрее замечает шаблон, но остальное слово остаётся спокойным и читаемым.</p>
        </div>
        <div className="reading-demo"><button onClick={() => speak('ship')}><span><mark>sh</mark>ip</span><small>🚢 ship — корабль</small></button><button onClick={() => speak('tree')}><span>tr<mark>ee</mark></span><small>🌳 tree — дерево</small></button></div>
      </section>

      <section className="panel exercise-card starter-practice" id="practice">
        <div className="exercise-topline"><span>Шаг 4 · Тренировка</span><span>{exerciseIndex + 1} / {total}</span></div>
        <div className="progress-track"><div style={{ width: `${((exerciseIndex + 1) / total) * 100}%` }} /></div>

        {finished ? (
          <div className="starter-finish">
            <div className="result-emoji">🌟</div><h2>Первый круг чтения готов!</h2><p className="result-score">{score} из {total}</p>
            <p className="muted">Можно пройти ещё раз или перейти к обычным темам. Повторение здесь важнее скорости.</p>
            <div className="result-actions"><Link className="secondary-button" href="/">К темам</Link><button className="primary-button" onClick={restartQuiz}>Повторить</button></div>
          </div>
        ) : (
          <>
            <div className="practice-prompt-row"><div><p className="instruction">{exercise.instructionRu}</p><h2 className="prompt">{exercise.prompt}</h2></div>{exercise.speakText ? <button className="listen-button" onClick={() => speak(exercise.speakText!)}>🔊 <span>Послушать</span></button> : null}</div>
            <div className="visual-options">
              {exercise.options.map((option) => (
                <button key={option.id} className={`visual-option ${answer === option.id ? 'selected' : ''}`} onClick={() => !checked && setAnswer(option.id)} disabled={checked}>
                  {option.emoji ? <span>{option.emoji}</span> : null}<strong>{option.text}</strong>
                </button>
              ))}
            </div>
            {checked ? <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}><strong>{correct ? '✅ Верно!' : '💡 Посмотри ещё раз.'}</strong><p>{exercise.explanationRu}</p></div> : null}
            <div className="exercise-actions">{!checked ? <button className="primary-button" disabled={!answer} onClick={checkAnswer}>Проверить</button> : <button className="primary-button" onClick={nextExercise}>{exerciseIndex === total - 1 ? 'Завершить' : 'Дальше'}</button>}</div>
          </>
        )}
      </section>
    </main>
  );
}
