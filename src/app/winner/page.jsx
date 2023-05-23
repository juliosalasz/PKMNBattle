"use client";
import React from "react";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";
import { useGlobalContext } from "../../../context/pkmnContext";
import { useRouter } from "next/navigation";
import styles from "./winner.module.css";

/* For Later use
<footer className={styles.footerPkmn}>{selectedPkmn.name}</footer> */

export default function Winner() {
  const { pkmnArray, selectedPkmn, setPkmnArray } = useGlobalContext();
  const router = useRouter();

  if (!pkmnArray) {
    router.push("/");
  }
  const goback = () => {
    router.push("/");
    setPkmnArray();
  };

  return (
    <>
      <main className={styles.mainWinner}>
        <div className={styles.winnerText}>
          <h2>
            HERE IS <br></br>YOUR
            <span className={styles.winnerWhite}> WINNER!</span>
          </h2>
        </div>
        <div>
          {selectedPkmn ? <PokemonCard pkmnArray={selectedPkmn} /> : ""}
        </div>
        <div className={styles.startAgain}>
          <button className={styles.startAgainBtn} onClick={goback}>
            TRY<br></br>AGAIN?
          </button>
        </div>
      </main>
    </>
  );
}
