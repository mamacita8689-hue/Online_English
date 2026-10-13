'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { readingLessons } from '@/content/reading/course';
import { getProgress } from '@/lib/storage';

export default function ReadingCourseHome() {
  const [progress, setProgress] = useState<ReturnType<typeof getProgress>>({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const completed = useMemo(
    () => readingLessons.filter((lesson) => progress[`reading-course:${lesson.id}`]?.completed).length,
    [progress],
  );
  const overall = Math.round((completed / readingLessons.length) * 100);

  return (
    <main className="app-shell reading-shell">
      <nav className="lesson-nav"><Link href="/">← Главная</Link><Link href="/mistakes">🧠 Мои ошибки</Link></nav>

      <section className="hero-card reading-hero compact-reading-hero">
        <div>
          <p className="eyebrow">Starter · курс чтения</p>
          <h1>Учимся читать</h1>
          <p className="hero-subtitle">Пять коротких шагов: буквы, звуки, сочетания и первые фразы. Один урок — примерно 7–9 минут.</p>
        </div>
        <div className="hero-badge">{overall}%</div>
      </section>

      <section className="panel reading-course-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Маршрут</p>
            <h2>Короткие уроки</h2>
            <p className="section-copy">Можно идти по порядку или возвращаться к любому уроку для повторения.</p>
          </div>
        </div>

        <div className="reading-lesson-list">
          {readingLessons.map((lesson) => {
            const item = progress[`reading-course:${lesson.id}`];
            const percent = item?.bestPercent ?? 0;
            return (
              <Link className="reading-lesson-card" href={`/reading/${lesson.id}`} key={lesson.id}>
                <div className="reading-lesson-icon">{lesson.icon}</div>
                <div className="reading-lesson-copy">
                  <div className="unit-title-row">
                    <div>
                      <span className="reading-step-label">Шаг {lesson.order}</span>
                      <h3>{lesson.titleRu}</h3>
                    </div>
                    <span className={`status-pill ${item?.completed ? 'done' : percent > 0 ? 'started' : ''}`}>
                      {item?.completed ? '✓ Готово' : percent > 0 ? `${percent}%` : `${lesson.durationMin} мин`}
                    </span>
                  </div>
                  <p>{lesson.descriptionRu}</p>
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
