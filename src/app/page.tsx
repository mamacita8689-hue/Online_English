import { unit01Hello } from '@/content/units/unit-01-hello';
import LessonPlayer from '@/components/LessonPlayer';

export default function HomePage() {
  const lesson = unit01Hello.lessons[0];

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Английский · 2 класс</p>
          <h1>{unit01Hello.title}</h1>
          <p className="hero-subtitle">{unit01Hello.descriptionRu}</p>
        </div>
        <div className="hero-badge" aria-label="Первый модуль">
          01
        </div>
      </section>

      <LessonPlayer lesson={lesson} />
    </main>
  );
}
