"use client";

import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

const GlobalContext = createContext({
  pkmnArray: [],
  getRandomPkmns: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [pkmnArray, setPkmnArray] = useState();

  const randomNumber = () => {
    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
  };

  //   async function getRandomPkmns() {
  //     async function pkmnCallToApi() {
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`
  //       );
  //       const pkmn = await response.json();
  //       setPkmnArray([...pkmnArray, pkmn]);
  //     }

  //     return pkmnCallToApi();
  //   }

  async function getRandomPkmns() {
    const resulArray = [];

    for (let i = 0; i < 11; i++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`
      );
      const pkmn = await response.json();
      resulArray.push(pkmn);
    }

    setPkmnArray(resulArray);

    console.log(resulArray);
    console.log(resulArray.length);
  }

  return (
    <GlobalContext.Provider value={{ pkmnArray, setPkmnArray, getRandomPkmns }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
