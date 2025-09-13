"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokeCard from "./components/PokeCard";
import PokeList from "./components/PokeList";

export default function Page() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  return (
    <>
      <Header search={search} setSearch={setSearch} setViewMode={setViewMode} />
      {viewMode === "card" ? (
        <PokeCard search={search} />
      ) : (
        <PokeList search={search} />
      )}
      <Footer />
    </>
  );
}
