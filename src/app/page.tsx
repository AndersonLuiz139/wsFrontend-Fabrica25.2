"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokeList from "./components/PokeList";

export default function Page() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <PokeList search={search} />
      <Footer />
    </>
  );
}
