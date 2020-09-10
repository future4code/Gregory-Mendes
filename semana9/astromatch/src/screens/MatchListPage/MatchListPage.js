import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getMatchesUrl } from '../../constants/axiosConfig';

const MatchListPage = (props) => {
    const [matchList, setMatchList] = useState([]);
    
    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(getMatchesUrl)
        .then((response) => {
            setMatchList(response.data.matches);
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    console.log(matchList)

    const showMatches = () => {
        const newMatchList = matchList.map((match) => {
            return (
                <li key={match.id}>
                    <img src={match.photo} alt="Foto pequena de perfil" width="50px" height="50px"/>
                    <p>{match.name}</p>
                </li>
            )
        })

        return newMatchList
    }

    return (
        <div>
            <button onClick={props.onClickBackButton}>Voltar</button>
            <h2>Seus matches</h2>
            <ul>
                {showMatches()}
            </ul>
            <button>Limpar</button>
        </div>
    )
}

export default MatchListPage