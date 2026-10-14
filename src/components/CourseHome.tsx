'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { courseUnits } from '@/content/units';
import { readingLessons } from '@/content/reading/course';
import { getMistakes, getProgress } from '@/lib/storage';

const spotlightRoadmap = [
  { title: 'Starter', subtitle: 'Let’s Start! · My Letters!', icon: '🔤', status: 'active' },
  { title: 'Hello!', subtitle: 'Приветствие, имя, простые фразы', icon: '👋', href: '/lesson/unit-01-hello' },
  { title: 'My Family', subtitle: 'Семья и знакомство с близкими', icon: '👨‍👩‍👧', href: '/lesson/unit-02-family' },
  { title: 'Module 1', subtitle: 'My Home! · дом и комнаты', icon: '🏠', status: 'planned' },
  { title: 'Module 2', subtitle: 'My Birthday! · числа, возраст, еда', icon: '🎂', status: 'planned' },
  { title: 'Module 3', subtitle: 'My Animals! · животные и действия', icon: '🐾', status: 'planned' },
  { title: 'Module 4', subtitle: 'My Toys! · игрушки, цвета, предлоги', icon: '🧸', status: 'planned' },
  { title: 'Module 5', subtitle: 'My Holidays! · одежда, погода, каникулы', icon: '☀️', status: 'planned' },
];

export default function CourseHome() {
  const [progress, setProgress] = useState<ReturnType<typeof getProgress>>({});
  const [mistakesCount, setMistakesCount] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
    setMistakesCount(getMistakes().length);
  }, []);

  const readingCompleted = useMemo(
    () => readingLessons.filter((lesson) => progress[`reading-course:${lesson.id}`]?.completed).length,
    [progress],
  );
  const readingPercent = Math.round((readingCompleted / readingLessons.length) * 100);
  const readingDone = readingCompleted === readingLessons.length;

  const completed = useMemo(
    () => courseUnits.filter((unit) => progress[`${unit.id}:${unit.lessons[0].id}`]?.completed).length,
    [progress],
  );
  const totalBlocks = courseUnits.length + 1;
  const completedBlocks = completed + (readingDone ? 1 : 0);
  const overall = Math.round((completedBlocks / totalBlocks) * 100);

  return (
    <main className="app-shell">
      <section className="hero-card course-hero refreshed-hero">
        <div>
          <p className="eyebrow">2 класс · по программе Spotlight 2</p>
          <h1>Online English</h1>
          <p className="hero-subtitle">Закрепляем то, что ребёнок проходит в школе, объясняем сложное по-русски и постепенно добавляем чтение, слух и уверенность.</p>
        </div>
        <div className="hero-badge" aria-label={`Прогресс ${overall}%`}>{overall}%</div>
      </section>

      <section className="reading-entry-card">
        <div className="reading-entry-visual" aria-hidden="true"><span className="abc-stack"><b>A</b><b>b</b><b>C</b></span><span className="reading-sound">🔊</span></div>
        <div className="reading-entry-copy">
          <p className="eyebrow">Начни отсюда · My Letters!</p>
          <h2>Буквы, звуки и первое чтение</h2>
          <p>9 коротких шагов: буквы небольшими группами, затем гласные, сочетания и первые фразы.</p>
          <div className="starter-tags"><span>ABC</span><span>🔊 слух</span><span>🖼️ слова</span><span>📖 чтение</span></div>
        </div>
        <div className="reading-entry-action">
          <span className={`status-pill ${readingDone ? 'done' : readingPercent > 0 ? 'started' : ''}`}>{readingDone ? '✓ Освоено' : readingPercent > 0 ? `${readingPercent}%` : '9 шагов'}</span>
          <Link className="primary-button" href="/reading">Открыть Starter →</Link>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="panel stat-card">
          <span className="stat-icon">🏆</span>
          <div><strong>{completedBlocks} / {totalBlocks}</strong><span>доступных блоков освоено</span></div>
        </article>
        <Link className="panel stat-card stat-link" href="/mistakes">
          <span className="stat-icon">🧠</span>
          <div><strong>{mistakesCount}</strong><span>ошибок для повторения</span></div>
        </Link>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Карта учебника</p>
            <h2>Маршрут по Spotlight 2</h2>
            <p className="section-copy">Приложение идёт рядом со школьным курсом. Доступные блоки уже работают, остальные будем открывать по мере наполнения оригинальными заданиями.</p>
          </div>
        </div>
        <div className="unit-list">
          {spotlightRoadmap.map((item, index) => {
            const content = (
              <>
                <div className="unit-number">{item.icon}</div>
                <div className="unit-copy">
                  <div className="unit-title-row">
                    <h3>{item.title}</h3>
                    <span className={`status-pill ${item.status === 'planned' ? '' : 'started'}`}>
                      {item.status === 'planned' ? 'Скоро' : item.status === 'active' ? `${readingPercent}%` : 'Открыть'}
                    </span>
                  </div>
                  <p>{item.subtitle}</p>
                  {item.status === 'active' && <div className="mini-progress"><div style={{ width: `${readingPercent}%` }} /></div>}
                </div>
              </>
            );

            if (item.href) {
              return <Link className="unit-card" href={item.href} key={`${item.title}-${index}`}>{content}</Link>;
            }
            if (item.status === 'active') {
              return <Link className="unit-card" href="/reading" key={`${item.title}-${index}`}>{content}</Link>;
            }
            return <article className="unit-card" key={`${item.title}-${index}`} aria-disabled="true">{content}</article>;
          })}
        </div>
      </section>
    </main>
  );
}
