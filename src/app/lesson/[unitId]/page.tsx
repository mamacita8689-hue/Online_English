import { notFound } from 'next/navigation';
import LessonPlayer from '@/components/LessonPlayer';
import { getUnitById } from '@/content/units';

export default async function LessonPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  const unit = getUnitById(unitId);
  if (!unit) notFound();

  return (
    <LessonPlayer
      unitId={unit.id}
      unitTitle={unit.title}
      unitDescription={unit.descriptionRu}
      lesson={unit.lessons[0]}
    />
  );
}
