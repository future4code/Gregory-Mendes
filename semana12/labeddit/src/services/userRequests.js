import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeedPage } from '../routes/Coordinator';

export const loginRequest = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeedPage(history);
    })
    .catch((error) => {
        window.alert("Ocorreu um erro ao tentar fazer login. Tente novamente.")
    });
};

export const signupRequest = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeedPage(history);
    })
    .catch((error) => {
        console.log("Ocorreu um erro ao tentar fazer o cadastro. Tente novamente.")
    });
};