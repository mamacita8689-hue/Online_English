import { notFound } from 'next/navigation';
import ReadingLessonPlayer from '@/components/ReadingLessonPlayer';
import { getReadingLesson } from '@/content/reading/course';

export default async function ReadingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getReadingLesson(lessonId);
  if (!lesson) notFound();
  return <ReadingLessonPlayer lesson={lesson} />;
}
