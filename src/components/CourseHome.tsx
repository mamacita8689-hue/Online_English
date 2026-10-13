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

  const completed = useMemo(
    () => courseUnits.filter((unit) => progress[`${unit.id}:${unit.lessons[0].id}`]?.completed).length,
    [progress],
  );
  const overall = Math.round((completed / courseUnits.length) * 100);

  return (
    <main className="app-shell">
      <section className="hero-card course-hero">
        <div>
          <p className="eyebrow">Английский · 2 класс</p>
          <h1>Online English</h1>
          <p className="hero-subtitle">Короткие уроки, понятные объяснения и тренировка школьной программы.</p>
        </div>
        <div className="hero-badge" aria-label={`Прогресс ${overall}%`}>{overall}%</div>
      </section>

      <section className="dashboard-grid">
        <article className="panel stat-card">
          <span className="stat-icon">🏆</span>
          <div><strong>{completed} / {courseUnits.length}</strong><span>тем освоено</span></div>
        </article>
        <Link className="panel stat-card stat-link" href="/mistakes">
          <span className="stat-icon">🧠</span>
          <div><strong>{mistakesCount}</strong><span>ошибок для повторения</span></div>
        </Link>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Мой курс</p>
            <h2>Темы</h2>
          </div>
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
