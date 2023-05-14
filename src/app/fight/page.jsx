"use client";
import React from "react";
import Image from "next/image";
import { useGlobalContext } from "../../../context/pkmnContext";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styled from "./fight.module.css";

export default function Fight() {
  const {
    pkmnArray,
    selectedPkmn,
    challengerPkmn,
    setChallengerPkmn,
    setSelectedPkmn,
  } = useGlobalContext();
  const [counter, setCounter] = useState(1);
  const router = useRouter();

  if (!challengerPkmn && pkmnArray) {
    setChallengerPkmn(pkmnArray[1]);
  }

  //You Choose the current Pkmn
  const chooseCurrentPkmn = () => {
    const counterUp = counter + 1;

    setCounter(counterUp);

    // new challenger();

    if (counterUp === 11) {
      router.push("/winner");
    } else {
      setChallengerPkmn(pkmnArray[counterUp]);
    }
  };

  const chooseNewPkmn = () => {
    //Here the challenger must replace the current

    setSelectedPkmn(challengerPkmn);

    //new challenger must come

    const counterUp = counter + 1;
    setCounter(counterUp);

    //new challenger

    if (counterUp === 11) {
      router.push("/winner");
    } else {
      setChallengerPkmn(pkmnArray[counterUp]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styled.comparePkmnDisplay}>
        <div>
          {pkmnArray ? <PokemonCard pkmnArray={selectedPkmn} /> : ""}
          <button onClick={chooseCurrentPkmn}>Choose This one</button>
        </div>
        <div>
          {pkmnArray ? <PokemonCard pkmnArray={challengerPkmn} /> : ""}
          <button onClick={chooseNewPkmn}>No, Choose This one</button>
        </div>
      </div>
    </main>
  );
}
