import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Countdown } from "../components/Countdown";
import { ChallengesContext } from '../context/ChallengesContext';

interface ICountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface ICountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as ICountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ICountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = () => {
    setIsActive(true);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000);      
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
      
    }
  }, [isActive, time])


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished, 
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}