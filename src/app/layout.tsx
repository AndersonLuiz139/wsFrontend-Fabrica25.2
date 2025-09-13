
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Pokédex',
  description: 'Minha Pokedex Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        
        {children}
      </body>
    </html>
  );
}
