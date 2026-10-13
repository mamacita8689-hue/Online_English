'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { courseUnits } from '@/content/units';
import { getMistakes, getProgress } from '@/lib/storage';

export default function CourseHome() {
  const [progress, setProgress] = useState<ReturnType<typeof getProgress>>({});
  const [mistakesCount, setMistakesCount] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
    setMistakesCount(getMistakes().length);
  }, []);

  const readingProgress = progress['starter-reading:starter-reading'];
  const completed = useMemo(
    () => courseUnits.filter((unit) => progress[`${unit.id}:${unit.lessons[0].id}`]?.completed).length,
    [progress],
  );
  const totalBlocks = courseUnits.length + 1;
  const completedBlocks = completed + (readingProgress?.completed ? 1 : 0);
  const overall = Math.round((completedBlocks / totalBlocks) * 100);

  return (
    <main className="app-shell">
      <section className="hero-card course-hero refreshed-hero">
        <div>
          <p className="eyebrow">Английский · 2 класс</p>
          <h1>Online English</h1>
          <p className="hero-subtitle">Учимся читать, понимать английские фразы и уверенно проходить школьные темы — маленькими шагами.</p>
        </div>
        <div className="hero-badge" aria-label={`Прогресс ${overall}%`}>{overall}%</div>
      </section>

      <section className="reading-entry-card">
        <div className="reading-entry-visual" aria-hidden="true"><span className="abc-stack"><b>A</b><b>b</b><b>C</b></span><span className="reading-sound">🔊</span></div>
        <div className="reading-entry-copy">
          <p className="eyebrow">Начни отсюда</p>
          <h2>Starter: буквы, звуки и чтение</h2>
          <p>26 букв, короткие гласные, сочетания <strong>sh, ch, th, ee, oo, ar, or</strong>, визуальные примеры и короткая тренировка.</p>
          <div className="starter-tags"><span>ABC</span><span>🔊 звуки</span><span>🖼️ картинки</span><span>📖 чтение</span></div>
        </div>
        <div className="reading-entry-action">
          <span className={`status-pill ${readingProgress?.completed ? 'done' : readingProgress?.bestPercent ? 'started' : ''}`}>{readingProgress?.completed ? '✓ Освоено' : readingProgress?.bestPercent ? `${readingProgress.bestPercent}%` : 'Новое'}</span>
          <Link className="primary-button" href="/reading">Учимся читать →</Link>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="panel stat-card">
          <span className="stat-icon">🏆</span>
          <div><strong>{completedBlocks} / {totalBlocks}</strong><span>блоков освоено</span></div>
        </article>
        <Link className="panel stat-card stat-link" href="/mistakes">
          <span className="stat-icon">🧠</span>
          <div><strong>{mistakesCount}</strong><span>ошибок для повторения</span></div>
        </Link>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div><p className="eyebrow">После чтения</p><h2>Школьные темы</h2><p className="section-copy">Слова и фразы из школьной программы. К чтению можно возвращаться в любой момент.</p></div>
        </div>
        <div className="unit-list">
          {courseUnits.map((unit) => {
            const lesson = unit.lessons[0];
            const item = progress[`${unit.id}:${lesson.id}`];
            const percent = item?.bestPercent ?? 0;
            return (
              <Link className="unit-card" href={`/lesson/${unit.id}`} key={unit.id}>
                <div className="unit-number">{String(unit.order).padStart(2, '0')}</div>
                <div className="unit-copy">
                  <div className="unit-title-row">
                    <h3>{unit.title}</h3>
                    <span className={`status-pill ${item?.completed ? 'done' : percent > 0 ? 'started' : ''}`}>
                      {item?.completed ? '✓ Освоено' : percent > 0 ? `${percent}%` : 'Начать'}
                    </span>
                  </div>
                  <p>{unit.titleRu} · {unit.descriptionRu}</p>
                  <div className="mini-progress"><div style={{ width: `${percent}%` }} /></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
