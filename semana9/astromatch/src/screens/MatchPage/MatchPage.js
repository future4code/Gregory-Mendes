import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { choosePersonUrl, getProfileToChooseUrl } from '../../constants/axiosConfig'

const MatchPage = (props) => {
    const [idValue, setId] = useState("")
    const [ageValue, setAge] = useState(0);
    const [nameValue, setName] = useState("");
    const [photoValue, setPhoto] = useState("");
    const [bioValue, setBio] = useState("");

    useEffect(() => {
        getNewPersonProfile(idValue);
    }, [])
    
    const getNewPersonProfile = () => {
        axios.get(getProfileToChooseUrl)
        .then((response) => {
            setId(response.data.profile.id)
            setAge(response.data.profile.age);
            setName(response.data.profile.name);
            setPhoto(response.data.profile.photo);
            setBio(response.data.profile.bio);
        })
        .catch((error) => {
            console.log(error.data);
        })
    }

    const choosePerson = (userChoice, personId) => {
        let body;

        if (userChoice === "match") {
            body = {
                id: personId,
                choice: true
            };
        } else if (userChoice === "dont-match") {
            body = {
                id: personId,
                choice: false
            };
        }

        axios.post(choosePersonUrl, body, {headers:{'Content-Type': "application/json"}})
        .then((response) => {
            getNewPersonProfile();
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <h1>Astromatch</h1>
            <button onClick={props.onClickListButton}>Lista de matches</button>
            <div>
                <img src={photoValue} width="400px" height="400px"/>
                <p>Nome: {nameValue}</p>
                <p>Idade: {ageValue}</p>
                <p>Descrição: {bioValue}</p>
            </div>
            <button onClick={() => choosePerson("dont-match", idValue)}>X</button>
            <button onClick={() => choosePerson("match", idValue)}>✓</button>
        </div>
    )
}

export default MatchPage