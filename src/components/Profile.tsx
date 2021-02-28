import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FiLogIn } from 'react-icons/fi';

import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const [userInput, setUserInput] = useState('Unknown');
    const [hasUser, setHasUser] = useState(false);

    return (
        <div className={style.profileContainer} >
            <img src="https://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1614543944~hmac=3bad9b9b50be54332e29b2c4500d3c5d" alt="Github logo"/>
            <div>
                <strong>
                    {hasUser ? (
                        userInput
                    ) : (
                        <form onSubmit={() => setHasUser(true)}>
                            <input 
                                required 
                                type="texte" 
                                placeholder="Digite seu nome aqui" 
                                onChange={(e) => setUserInput(e.target.value)} 
                            />
                            <button> <FiLogIn/></button>
                        </form> 
                   )}
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level-up" />
                    Level {level}
                </p>
            </div>            
        </div>
    )
}