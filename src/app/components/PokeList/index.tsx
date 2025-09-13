"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type PokeListProps = {
  search: string;
};

export default function PokeList({ search }: PokeListProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        const results = res.data.results;

        const formatted = results.map((pokemon: any, index: number) => {
          const id = index + 1;
          return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        setPokemons(formatted);
      })
      .catch((err) => console.error("Erro ao buscar Pokémons:", err));
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((p) => (
          <li key={p.id} className={styles.card}>
            <img src={p.image} alt={p.name} className={styles.image} />
            <p className={styles.name}>
              #{p.id} {p.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
