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
    const [userInput, setUserInput] = useState(Cookies.get('name') ?? '');
    const [urlPhoto, setUrlPhoto] = useState(Cookies.get('avatar') ?? 'https://github.githubassets.com/images/modules/logos_page/Octocat.png');
    const [hasUser, setHasUser] = useState( Boolean(Cookies.get('logged')) ?? false);
    const [dataGithub, setDataGithub] = useState<IUserGithubProps>();

    useEffect(() => {
        Cookies.set('name', userInput);
        Cookies.set('avatar', urlPhoto);
        Cookies.set('logged', String(hasUser));
    }, [userInput, urlPhoto])


    const { level } = useContext(ChallengesContext);

    async function githubLogin() {
        const response = await fetch(`https://api.github.com/users/${userInput}`);
        const data = await response.json();

        if(response.status === 200) {
            console.log(data);
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