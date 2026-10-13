import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Online English — 2 класс',
  description: 'Короткие уроки английского языка для русскоязычного ученика 2 класса.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
