"use client";
import React from "react";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";
import Image from "next/image";
import { useGlobalContext } from "../../../context/pkmnContext";
import { useRouter } from "next/navigation";

export default function Winner() {
  const { selectedPkmn, setPkmnArray } = useGlobalContext();
  const router = useRouter();
  const goback = () => {
    router.push("/");
    setPkmnArray();
  };
  return (
    <main>
      <div>
        <h2>Here is your winner</h2>
        {selectedPkmn ? <PokemonCard pkmnArray={selectedPkmn} /> : ""}
        <button onClick={goback}>Start Again</button>
      </div>
    </main>
  );
}
