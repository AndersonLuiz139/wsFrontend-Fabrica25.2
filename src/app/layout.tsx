import './globals.css';
import { ReactNode } from 'react';
import { FavoritesProvider } from './hooks/FavoriteContext';

export const metadata = {
  title: 'Pokédex',
  description: 'Minha Pokedex Next.js',
   icons: {
    icon: "/image/favicon.png",
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
