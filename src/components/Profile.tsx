import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FiLogIn, FiEdit } from 'react-icons/fi';

import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/Profile.module.css';

interface IUserGithubProps {
    name: string;
    avatar_url: string;
}

export function Profile() {
    const [userInput, setUserInput] = useState('Unknown');
    const [hasUser, setHasUser] = useState(false);
    const [dataGithub, setDataGithub] = useState<IUserGithubProps>();
    const [urlPhoto, setUrlPhoto] = useState('https://github.githubassets.com/images/modules/logos_page/Octocat.png');

    useEffect(() => {
        Cookies.set('name', userInput);
        Cookies.set('avatar', urlPhoto);
    }, [userInput])

    const { level } = useContext(ChallengesContext);

    async function githubLogin() {
        const response = await fetch(`https://api.github.com/users/${userInput}`);
        const data = await response.json();
        if(response.status === 200) {
            setDataGithub(data);
            setUrlPhoto(data.avatar_url);
            setUserInput(data.name);
        } else {
            console.log('nao encontrado');
        }
    }

    function editUserGithub() {
        setHasUser(false);
        setUrlPhoto('https://github.githubassets.com/images/modules/logos_page/Octocat.png');
    }

    return (
        <div className={style.profileContainer} >
            <img src={urlPhoto} alt="Github logo"/>
            <div>
                <strong>
                    {hasUser ? (
                        <>
                            {userInput}
                            <button onClick={() => editUserGithub()}> <FiEdit/></button>
                        </>
                    ) : (
                        <form onSubmit={() => {
                            setHasUser(true);
                            githubLogin();
                        }}>
                            <input 
                                required 
                                type="texte" 
                                placeholder="Digite seu Github User ou seu nome" 
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