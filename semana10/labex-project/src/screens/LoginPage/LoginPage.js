import React, {useEffect} from 'react';
import handleLoginRequest from '../../services/requests/loginRequest';
import { useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput';

const LoginPage = () => {
    const [emailValue, handleEmailValue] = useInput();
    const [passwordValue, handlePasswordValue] = useInput();
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            history.push("/trips")
        }
    }, [history])
    
    const handleLoginSubmit = () => {
        handleLoginRequest(emailValue, passwordValue, history);
    }

    return (
        <div>
            <input 
                value={emailValue}
                onChange={handleEmailValue}
                placeholder="E-mail"
            />
            <input 
                value={passwordValue}
                onChange={handlePasswordValue}
                placeholder="Senha"
            />
            <button onClick={handleLoginSubmit}>Entrar</button>
        </div>
    )
}

export default LoginPage;