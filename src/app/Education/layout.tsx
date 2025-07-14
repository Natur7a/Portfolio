import React from 'react';
import AOSInit from '../component/AOSinit';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <AOSInit />
      </body>
    </html>
  );
}