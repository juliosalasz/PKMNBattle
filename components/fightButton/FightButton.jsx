import React from "react";
import styles from "./fightButton.module.css";

export default function FightButton({ clickHandler, children }) {
  return (
    <button className={styles.btn} onClick={clickHandler}>
      {children}
    </button>
  );
}
