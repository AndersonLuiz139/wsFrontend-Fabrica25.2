import Image from "next/image";
import styles from "./style.module.css";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
  setViewMode: (mode: "card" | "list") => void;
};

export default function Header({ search, setSearch, setViewMode }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image
        src="/image/pokedex.png"
        alt="Web Pokédex"
        width={180}
        height={70}
        priority
        className={styles.logo}  // 👈 adiciona a classe da logo
      />

      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search} // 👈 input estilizado
      />

      <div className={styles.buttonGroup}>
        <button 
          onClick={() => setViewMode("list")} 
          className={styles.button}
        >
          Lista
        </button>
        <button 
          onClick={() => setViewMode("card")} 
          className={styles.button}
        >
          Card
        </button>
      </div>
    </header>
  );
}
