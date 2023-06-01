import GetRandomPkmn from "../../components/getRanmdomPkmn/getRandomPkmn";
import style from "./main.module.css";

export default function Home() {
  return (
    <main className={style.pkmngame}>
      <div className={style.tutorial}>
        <div className={style.step}>
          <h2 className={style.stepTitle}>STEP 1</h2>
          <p className={style.stepTextMd}>GET YOUR RANDOMPKMN</p>
        </div>
        <div className={style.step}>
          <h2 className={style.stepTitle}>STEP 2</h2>
          <p className={style.stepTextMd}>
            PICK WHICHEVER YOU LIKE. FOR WHATEVER REASON YOU WANT TO.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <GetRandomPkmn></GetRandomPkmn>
      </div>
      <div div className={style.tutorial}>
        <div className={style.step}>
          <h2 className={style.stepTitle}>STEP 3</h2>
          <p className={style.stepTextLg}>
            WINNER WILL BE THE ONE THAT MAKES IT TO THE END
          </p>
        </div>
        <div className={style.step}>
          <p className={style.stepTextMd}>MADE BY JULIO SALAS</p>
        </div>
      </div>
    </main>
  );
}
