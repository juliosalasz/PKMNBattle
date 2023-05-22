"use client";

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext({
  pkmnArray: [],
  getRandomPkmns: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [pkmnArray, setPkmnArray] = useState();
  const [selectedPkmn, setSelectedPkmn] = useState();
  const [challengerPkmn, setChallengerPkmn] = useState();
  const [isfetching, setIsFetching] = useState(false);

  const randomNumber = () => {
    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
  };

  async function getRandomPkmns() {
    const resulArray = [];
    setIsFetching(true);

    for (let i = 0; i < 11; i++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`
      );
      const pkmn = await response.json();
      resulArray.push(pkmn);
    }

    setSelectedPkmn(resulArray[0]);

    setChallengerPkmn(resulArray[1]);

    setPkmnArray(resulArray);

    setIsFetching(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        pkmnArray,
        setPkmnArray,
        getRandomPkmns,
        selectedPkmn,
        setSelectedPkmn,
        challengerPkmn,
        setChallengerPkmn,
        isfetching,
        setIsFetching,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
