import Image from "next/image";
import "./style.css";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <header>
      <Image
        src="/image/pokedex.png"
        alt="Web Pokédex"
        width={180}
        height={70}
        priority
      />

      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <button>Lista</button>
        <button>Card</button>
      </div>
    </header>
  );
}
