import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// You can adjust these defaults to better represent the clinic.
export const metadata: Metadata = {
  title: 'Stomatolog Beograd | Dr Branislava Smiljkovi\u0107',
  description: 'Savremena stomatolo\u0161ka ordinacija u Beogradu koja nudi sve vrste stomatolo\u0161kih usluga.',
};

/**
 * The root layout component wraps every page.  Global headers and footers
 * live here.  Tailwind classes are used for styling.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body className="min-h-screen flex flex-col">
        <header className="p-4 shadow bg-white">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Stomatolog Beograd</a>
            <nav className="space-x-4">
              <a href="/usluge" className="hover:underline">Usluge</a>
              <a href="/kontakt" className="hover:underline">Kontakt</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="p-4 bg-gray-100">
          <div className="container mx-auto text-center text-sm">
            © 2026 Stomatolog Beograd. Sva prava zadr\u017eana.
          </div>
        </footer>
      </body>
    </html>
  );
}
