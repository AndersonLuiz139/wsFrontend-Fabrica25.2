"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import styles from "./style.module.css";
import { useFavorites } from "../../hooks/FavoriteContext"; // <== ALTERADO

type PokemonDetail = {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
  base_experience: number;
};

export default function PokemonDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    if (id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        setPokemon(res.data);
      });
    }
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  const handleFavorite = () => {
    if (isFavorite(pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      });
    }
  };

  return (
    <div className={styles.pageDetails}>
      <div className={styles.container}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={styles.pokeImage}
        />
        <div className={styles.pokeDetails}>
          <h1>
            #{pokemon.id} - {pokemon.name}
          </h1>
          <p>
            <strong>Experiência Base:</strong> {pokemon.base_experience}
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight} Kg
          </p>
          <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>

          <div className={styles.buttonsContainer}>
            <button onClick={handleFavorite} className={styles.favoriteBtn}>
              {isFavorite(pokemon.id) ? "★ Remover Favorito" : "☆ Favoritar"}
            </button>

            <button onClick={() => router.back()} className={styles.backBtn}>
              ⬅ Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
