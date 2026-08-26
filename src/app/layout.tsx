import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="lenis">
      <body className="bg-aicon-bone text-aicon-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
