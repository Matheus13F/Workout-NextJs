import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { ChallengesContext } from "../context/ChallengesContext";
import style from "../styles/components/Profile.module.scss";

export function Profile() {
  const { level, setUserName, userName } = useContext(ChallengesContext);

  useEffect(() => {
    Cookies.set("name", userName);
  }, [userName]);

  return (
    <div className={style.profileContainer}>
      <div>
        <img
          src={`https://avatars.dicebear.com/api/adventurer/${userName}.svg`}
          alt="Dicebear Avatar"
        />
      </div>
      <div>
        <main>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              required
              type="text"
              value={userName}
              placeholder="Digite seu nome."
              onChange={(e) => setUserName(e.target.value)}
              maxLength={20}
            />
          </form>
        </main>
        <footer>
          <img src="icons/level.svg" alt="level-up" />
          Level {level}
        </footer>
      </div>
    </div>
  );
}
