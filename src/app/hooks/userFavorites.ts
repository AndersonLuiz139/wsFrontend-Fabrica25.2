"use client";

import { useEffect, useState } from "react";

export type FavoritePokemon = {
  id: number;
  name: string;
  image: string;
};

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        try {
          setFavorites(JSON.parse(stored));
        } catch {
          setFavorites([]);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorite = (pokemon: FavoritePokemon) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === pokemon.id) ? prev : [...prev, pokemon]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((f) => f.id === id);

  const toggleFavorite = (pokemon: FavoritePokemon) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === pokemon.id)
        ? prev.filter((f) => f.id !== pokemon.id)
        : [...prev, pokemon]
    );
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
}
