"use client";

import React from "react";
import styled from "./button.module.css";
import { useGlobalContext } from "../../context/pkmnContext";

export default function Button({ children }) {
  const { getRandomPkmns } = useGlobalContext();

  return (
    <button className={styled.btn} onClick={getRandomPkmns}>
      {children}
    </button>
  );
}
