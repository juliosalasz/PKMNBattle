import React from "react";
import CardDisplay from "../cardDisplay/cardDisplay";
import Button from "../button/button";
import styled from "./getRandomPkmn.module.css";

export default function GetRandomPkmn() {
  return (
    <div className={styled.getRandomDisplay}>
      <CardDisplay />
      <Button>
        <h2>Get You Pokémon</h2>
      </Button>
    </div>
  );
}
