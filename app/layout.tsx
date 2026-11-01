import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WISDOM NETWORK',
  description: 'Collaborative intelligence ecosystem for knowledge sharing and sustainable community growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
