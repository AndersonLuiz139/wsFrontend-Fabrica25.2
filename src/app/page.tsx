"use client";

import Header from "./components/Header"
import { useEffect, useState } from "react";
import { api } from "../services/api";

type Pokemon = {
  name: string;
  url: string;
};

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get("/pokemon?limit=10")
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log("Erro na API", err));
  }, []);

  return (
    <>
      <Header/>
    </>
      
      
  );
}
