import React from "react";
import styles from "./pokemonCard.module.css";

export default function PokemonCard({ pkmnArray }) {
  const name = pkmnArray.name;
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);

  const pkmnTypes = [];

  pkmnArray.types.map((item) => {
    pkmnTypes.push(item.type.name.toUpperCase());
  });

  const pkmnType = pkmnTypes.toString().replace(",", " / ");

  const statName = (stat) => {
    switch (stat) {
      case "hp":
        return "HP";
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SP ATK";
      case "special-defense":
        return "SP DEF";
      case "speed":
        return "SPD";
      default:
        return "No Stat";
    }
  };

  return (
    <div className={styles.pkmnCard}>
      <div className={styles.pkmnCardName}>
        <h2>{nameUppercase}</h2>
      </div>
      <div className={styles.pkmnCardBackground}>
        <div
          style={{
            backgroundImage: `url(${pkmnArray["sprites"]["other"]["official-artwork"]["front_default"]})`,
          }}
          className={styles.pkmnInterior}
        >
          <div className={styles.pkmnTopNumber}>
            <h2>#{pkmnArray.id}</h2>
          </div>
          <div className={styles.pkmnBottomInformation}>
            <div className={styles.pkmnBottomInformationPanel}>
              <div className={styles.pkmnBottomInformationType}>
                <h2>{pkmnType}</h2>
              </div>
              <div className={styles.pkmnBottomInformationInfo}>
                <div className={styles.pkmnNumbers}>
                  {pkmnArray.stats.map((stat, i) => {
                    return (
                      <h2 key={i}>
                        {statName(stat.stat.name)}: {stat.base_stat}
                      </h2>
                    );
                  })}
                </div>
                <div
                  style={{
                    backgroundImage: `url(${pkmnArray.sprites.front_default})`,
                  }}
                  className={styles.pkmnSprite}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
