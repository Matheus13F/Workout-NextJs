import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProviders } from '../context/ChallengesContext';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";

interface IHomeProps {
  level: number;
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: IHomeProps) {
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

          <footer>
            <p>Desenvolvido por Matheus Ferreira - 2021</p>
            <a href="https://www.github.com/matheus13f/" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/matheus13f/" target="_blank">Linkedin</a>
            <a href="https://www.instagram.com/oi_matthew/" target="_blank">Instagram</a>
          </footer>                 
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
