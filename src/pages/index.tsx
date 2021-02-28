import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesContext, ChallengesProviders } from '../context/ChallengesContext';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { useContext } from 'react';

interface IHomeProps {
  level: number;
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: IHomeProps) {
  const { isGithubLogged } = useContext(ChallengesContext);

  return (
    <ChallengesProviders 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >    
      <div className={styles.container}>
        <Head>
          <title>Início | WH</title>
        </Head>
        <ExperienceBar/>

        <CountdownProvider>         
          <section>
            <div>
              <Profile />
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
         </section>                 
        </CountdownProvider>        
      </div>
    </ChallengesProviders>
  );
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
