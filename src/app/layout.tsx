import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AICON '26",
  description: 'The premier AI conference — AICON 2026',
  icons: {
    icon: '/assets/AIcon.jpeg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="lenis">
      <body className="bg-aicon-bone text-aicon-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
