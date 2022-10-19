import Head from "next/head";
import { GetServerSideProps } from "next";
import { CountdownProvider } from "../context/CountdownContext";
import { ChallengesProviders } from "../context/ChallengesContext";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.scss";
import { Footer } from "../components/Footer";
import LandingPage from "../components/LandingPage";
import Cookies from "js-cookie";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  name: string;
  tasks: Task[];
}

export default function Home(props: IHomeProps) {
  return (
    <ChallengesProviders
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      name={props.name}
      tasks={props.tasks}
    >
      <div className={styles.container}>
        <Head>
          <title>PomoLevel</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
      <div className={`${styles.container} ${styles.footer}`}>
        <LandingPage />
        <Footer />
      </div>
    </ChallengesProviders>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, name, tasks } =
    ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      name,
      tasks: JSON.parse(tasks),
    },
  };
};
