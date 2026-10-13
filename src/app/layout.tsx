import type { Metadata } from 'next';
import './globals.css';
import './starter.css';

export const metadata: Metadata = {
  title: 'Online English — 2 класс',
  description: 'Английский язык для 2 класса: чтение, буквы, звуки, слова и школьные темы.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
