'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { clearMistakes, getMistakes, type MistakeRecord } from '@/lib/storage';

export default function MistakesPage() {
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);

  useEffect(() => {
    setMistakes(getMistakes());
  }, []);

  function clearAll() {
    clearMistakes();
    setMistakes([]);
  }

  return (
    <main className="app-shell">
      <nav className="lesson-nav"><Link href="/">← Все темы</Link></nav>
      <section className="hero-card">
        <div>
          <p className="eyebrow">Повторение</p>
          <h1>Мои ошибки</h1>
          <p className="hero-subtitle">Здесь сохраняются задания, в которых был неверный ответ. Их можно использовать как список того, что стоит повторить.</p>
        </div>
        <div className="hero-badge">🧠</div>
      </section>

      {mistakes.length === 0 ? (
        <section className="panel empty-state">
          <div className="result-emoji">🎉</div>
          <h2>Пока ошибок нет</h2>
          <p className="muted">Пройди урок — если где-то ошибёшься, задание появится здесь.</p>
          <Link className="primary-button link-button" href="/">Выбрать тему</Link>
        </section>
      ) : (
        <section className="panel">
          <div className="section-heading mistakes-heading">
            <div><p className="eyebrow">Нужно повторить</p><h2>{mistakes.length} {mistakes.length === 1 ? 'задание' : 'заданий'}</h2></div>
            <button className="text-button" onClick={clearAll}>Очистить список</button>
          </div>
          <div className="mistakes-list">
            {mistakes.map((mistake) => (
              <article className="mistake-card" key={mistake.id}>
                <div className="mistake-top"><span>Попыток: {mistake.attempts}</span></div>
                <h3>{mistake.prompt}</h3>
                <p className="wrong-answer">Твой ответ: <strong>{mistake.wrongAnswer || '—'}</strong></p>
                <p className="right-answer">Правильно: <strong>{mistake.correctAnswer}</strong></p>
                <p className="mistake-explanation">{mistake.explanationRu}</p>
                <Link className="secondary-button link-button" href={`/lesson/${mistake.unitId}`}>Повторить урок</Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
