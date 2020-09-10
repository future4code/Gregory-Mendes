import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { choosePersonUrl, getProfileToChooseUrl } from '../../constants/axiosConfig'

const MatchPage = (props) => {
    const [ageValue, setAge] = useState(0);
    const [nameValue, setName] = useState("");
    const [photoValue, setPhoto] = useState("");
    const [bioValue, setBio] = useState("");
    const [choiceValue, setChoice] = useState(false);

    useEffect(() => {
        getPersonProfile()
    }, [])
    
    const getPersonProfile = () => {
        axios.get(getProfileToChooseUrl)
        .then((response) => {
            setAge(response.data.profile.age)
            setName(response.data.profile.name)
            setPhoto(response.data.profile.photo)
            setBio(response.data.profile.bio)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    return (
        <div>
            <h1>Astromatch</h1>
            <button onClick={props.onClickListButton}>Lista de matches</button>
            <div>
                <img src={photoValue} width="300px" height="300px"/>
                <p>Nome: {nameValue}</p>
                <p>Idade: {ageValue}</p>
                <p>Descrição: {bioValue}</p>
            </div>
            <button>X</button>
            <button>✓</button>
        </div>
    )
}

export default MatchPage