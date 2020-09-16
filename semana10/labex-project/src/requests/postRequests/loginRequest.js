import React from 'react'
import axios from 'axios'

const baseLoginUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gregory/login"

const handleLoginRequest = (props) => {
    const body = {
        email: props.emailValue,
        password: props.passwordValue
    }
    axios.post(baseLoginUrl, body)
    .then((response) => {

    })
    .catch((error) => {
        console.log(error.message)
    })
}
