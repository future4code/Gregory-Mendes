import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getMatchesUrl, clearUrl } from '../../constants/axiosConfig';

const MatchListPage = (props) => {
    const [matchList, setMatchList] = useState([]);
    
    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(getMatchesUrl)
        .then((response) => {
            setMatchList(response.data.matches);
        })
        .catch((error) => {
            window.alert("Ocorreu um erro na sua lista de matches. Tente acessar novamente.")
        })
    }

    const clearMatches = () => {
        axios.put(clearUrl)
        .then((response) => {
            setMatchList([])
        })
        .catch((error) => {
            window.alert("Ocorreu um erro ao tentar limpar seus matches. Tente novamente.")
        })
    }

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
            <button onClick={clearMatches}>Limpar</button>
        </div>
    )
}

export default MatchListPage