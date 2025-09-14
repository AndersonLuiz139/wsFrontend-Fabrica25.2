"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // 👈 importa o Link
import styles from "./style.module.css";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type Props = {
  search: string;
};

export default function PokeList({ search }: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      const formatted = res.data.results.map((p: any, index: number) => ({
        id: index + 1,
        name: p.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setPokemons(formatted);
    });
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((p) => (
          <li key={p.id} className={styles.listItem}>
            <Link href={`/detalhes/${p.id}`} className={styles.link}>
              <img src={p.image} alt={p.name} className={styles.image} />
              <p className={styles.name}>
                #{p.id} {p.name}
              </p>
            </Link>
</li>

        ))}
      </ul>
    </div>
  );
}
