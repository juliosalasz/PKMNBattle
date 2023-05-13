"use client";
import React from "react";
import styled from "./cardDisplay.module.css";
import { useGlobalContext } from "../../context/pkmnContext";
import PokemonCard from "../pokemonCard/pokemonCard";
import FakeCard from "../fakeCard/FakeCard";

export default function CardDisplay() {
  const { pkmnArray } = useGlobalContext();

  return (
    <div className={styled.pkmnCard}>
      {pkmnArray ? <PokemonCard pkmnArray={pkmnArray[0]} /> : <FakeCard />}
    </div>
  );
}
