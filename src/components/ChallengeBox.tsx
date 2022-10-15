import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="imagem" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceedButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            {" "}
            Inicie um ciclo para receber desafios a serem completados{" "}
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="levep-up" />
            Avance de level completando desafios!
          </p>
        </div>
      )}
    </div>
  );
}
