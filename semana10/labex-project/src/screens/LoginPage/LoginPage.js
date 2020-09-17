import React, {useState, useEffect} from 'react';
import handleLoginRequest from '../../requests/postRequests/loginRequest';
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            history.push("/trips")
        }
    }, [history])
    
    const handleLogin = () => {
        handleLoginRequest(emailValue, passwordValue, history);
        setEmailValue("");
        setPasswordValue("");
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    }

    return (
        <div>
            <input value={emailValue} onChange={handleEmailChange} placeholder="E-mail"/>
            <input value={passwordValue} onChange={handlePasswordChange} placeholder="Senha"/>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default LoginPage;