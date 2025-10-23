import React from 'react';
import AOSInit from '../component/AOSinit';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main className="flex-1 md:ml-64 p-6">
          {children}
        </main>
        <AOSInit />
      </body>
    </html>
  );
}