import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percenToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percenToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percenToNextLevel}%` }}> {currentExperience} xp </span>
            </div>
            <span>{experienceToNextLevel} xp</span>

        </header>
    )
}