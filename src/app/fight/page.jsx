"use client";
import React from "react";
import { useGlobalContext } from "../../../context/pkmnContext";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import FightButton from "../../../components/fightButton/FightButton";
import FakeCard from "../../../components/fakeCard/FakeCard";
import vsIcon from "../../../assets/vs.svg";
import spinningIcon from "../../../assets/spin.svg";

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

  useEffect(() => {
    if (!pkmnArray) {
      router.push("/");
    }
  });

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
    console.log("1");
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
    <main className={styled.mainFight}>
      <div className={styled.comparePkmnDisplay}>
        <div>
          {pkmnArray ? (
            <PokemonCard pkmnArray={selectedPkmn} />
          ) : (
            <FakeCard></FakeCard>
          )}
          <div className={styled.fightBtnDisplay}>
            <FightButton clickHandler={chooseCurrentPkmn}>
              Choose This one
            </FightButton>
          </div>
        </div>
        <div className={styled.vsScreen}>
          <Image
            className={styled.spinningVs}
            priority
            src={spinningIcon}
            alt="spinningIcon"
          />
          <Image
            className={styled.vsLetters}
            priority
            src={vsIcon}
            alt="versus"
          />
        </div>
        <div>
          {pkmnArray ? (
            <PokemonCard pkmnArray={challengerPkmn} />
          ) : (
            <FakeCard></FakeCard>
          )}
          <div className={styled.fightBtnDisplay}>
            <FightButton clickHandler={chooseNewPkmn}>
              No, Choose This one
            </FightButton>
          </div>
        </div>
      </div>
    </main>
  );
}
