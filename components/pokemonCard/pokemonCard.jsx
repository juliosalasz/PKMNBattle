import React from "react";
import styles from "./pokemonCard.module.css";

export default function PokemonCard({ pkmnArray }) {
  const name = pkmnArray.name;
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={styles.pkmnCard}>
      <div className={styles.pkmnCardInterior}>
        <div className={styles.pkmnCardInteriorTitle}>
          <h2>{nameUppercase}</h2>
        </div>
        <div>
          <img
            src={
              pkmnArray["sprites"]["other"]["official-artwork"]["front_default"]
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
