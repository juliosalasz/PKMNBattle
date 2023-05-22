import React from "react";
import styles from "./fakeCard.module.css";
import { useGlobalContext } from "../../context/pkmnContext";

export default function FakeCard() {
  const { isfetching } = useGlobalContext();
  return (
    <div className={styles.fakeCard}>
      <div className={styles.fakeCardTitle}>
        <h2>{isfetching ? "GETTING PKMN..." : "?"}</h2>
      </div>
    </div>
  );
}
