import Image from "next/image";
import "./style.css";

export default function Header() {
  return (
    <header>
      <Image 
        src="/image/pokedex.png" 
        alt="Web Pokédex" 
        width={180} 
        height={70} 
        priority
      />
      <input type="text" placeholder="Pokemon" />
      <div>
        <button>Lista</button>
        <button>Card</button>
      </div>
    </header>
  );
}
