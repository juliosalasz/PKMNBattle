import React from "react";
import styles from "./pokemonCard.module.css";
import Image from "next/image";

export default function PokemonCard({ pkmnArray }) {
  const name = pkmnArray.name;
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
  console.log(pkmnArray.name);
  return (
    <div className={styles.pkmnCard}>
      {nameUppercase}
      <div>
        <img
          src={
            pkmnArray["sprites"]["other"]["official-artwork"]["front_default"]
          }
          alt=""
        />
      </div>
    </div>
  );
}
