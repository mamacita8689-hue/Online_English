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
          <p className="eyebrow">Стартовый курс · в ритме школьной программы</p>
          <h1>Буквы, звуки и первое чтение</h1>
          <p className="hero-subtitle">Сначала буквы небольшими группами, как в начале Spotlight 2. Затем закрепляем короткие гласные, частые сочетания и переходим к чтению простых слов и фраз.</p>
        </div>
        <div className="hero-badge">{overall}%</div>
      </section>

      <section className="panel reading-course-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Маршрут</p>
            <h2>9 коротких шагов</h2>
            <p className="section-copy">Первые шесть уроков закрепляют блок My Letters!, последние три помогают лучше понять чтение и немного опережают школьный материал.</p>
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
