"use client";

import React from "react";
import styled from "./button.module.css";
import { useGlobalContext } from "../../context/pkmnContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Button() {
  const { getRandomPkmns } = useGlobalContext();

  const [ready, setready] = useState(false);
  const router = useRouter();

  const startGame = () => {
    if (!ready) {
      setready(true);
      getRandomPkmns();
    } else {
      router.push("/fight");
    }
  };

  return (
    <button className={styled.btn} onClick={startGame}>
      <h2>{ready ? "Fight!" : "Get You Pokémon"}</h2>
    </button>
  );
}
