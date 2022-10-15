import { FormEvent, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  FiLogIn,
  FiEdit,
  FiArrowDownRight,
  FiArrowRight,
} from "react-icons/fi";

import { ChallengesContext } from "../context/ChallengesContext";
import style from "../styles/components/Profile.module.scss";

interface IUserGithubProps {
  name: string;
  avatar_url: string;
}

export function Profile() {
  const [userInput, setUserInput] = useState(
    Cookies.get("name") ?? "Digite seu nome"
  );
  const [hasUser, setHasUser] = useState(
    Boolean(Cookies.get("logged")) ?? false
  );
  const [dataGithub, setDataGithub] = useState<IUserGithubProps>();

  useEffect(() => {
    Cookies.set("name", userInput);
    Cookies.set("logged", String(hasUser));
  }, [userInput]);

  const { level, setUserName } = useContext(ChallengesContext);

  function handleChangeName(event: FormEvent) {
    event.preventDefault();
    setUserName(userInput);
    Cookies.set("name", userInput);
  }

  return (
    <div className={style.profileContainer}>
      <div>
        <img
          src={`https://avatars.dicebear.com/api/adventurer/${userInput}.svg`}
          alt="Dicebear Avatar"
        />
      </div>
      <div>
        <main>
          <form onSubmit={handleChangeName}>
            <input
              required
              type="text"
              value={userInput}
              placeholder="Digite seu nome."
              onChange={(e) => setUserInput(e.target.value)}
              maxLength={20}
            />
            <button type="submit">
              {" "}
              <FiArrowRight />
            </button>
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
