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
  const [counter, setCounter] = useState(2);
  const router = useRouter();

  if (!challengerPkmn && pkmnArray) {
    setChallengerPkmn(pkmnArray[1]);
  }

  //You Choose the current Pkmn
  const chooseCurrentPkmn = () => {
    //limit for counter
    if (counter < 10) {
      setCounter(counter + 1);
    }

    //new challenger
    setChallengerPkmn(pkmnArray[counter]);

    //Game is over

    if (counter === 10) {
      router.push("/winner");
    }
  };

  const chooseNewPkmn = () => {
    console.log("You Choose the new Pkmn");

    //Here the challenger must replace the current

    setSelectedPkmn(challengerPkmn);

    //new challenger must come
    //limit for counter
    if (counter < 10) {
      setCounter(counter + 1);
    }

    //new challenger
    setChallengerPkmn(pkmnArray[counter]);

    if (counter === 10) {
      router.push("/winner");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
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
