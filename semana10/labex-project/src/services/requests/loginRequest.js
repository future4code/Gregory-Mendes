import axios from 'axios';

const baseLoginUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gregory-jackson/login"

const handleLoginRequest = (userEmail, userPassword, history) => {
    const body = {
        email: userEmail,
        password: userPassword
    }
    
    axios.post(baseLoginUrl, body)
    .then((response) => {
        window.localStorage.setItem("token", response.data.token)
        history.push("/trips")
    })
    .catch((error) => {
        console.log(error.message)
    });
};

export default handleLoginRequest;
