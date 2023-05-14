import React from "react";
import styles from "./fakeCard.module.css";

export default function FakeCard() {
  return (
    <div className={styles.fakeCard}>
      <div className={styles.fakeCardTitle}>
        <h2>?</h2>
      </div>
    </div>
  );
}
