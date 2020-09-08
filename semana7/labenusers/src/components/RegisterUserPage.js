import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headersConfig =  {headers: {Authorization: "gregory-mendes-jackson"}};

class RegisterUserPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    }
    
    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        const request = axios.post(baseUrl, body, headersConfig)

        request
        .then((response) => {
            this.setState({nameValue: "", emailValue: ""})
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    render() {
       
        return (
            <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" value={this.state.nameValue} onChange={this.onChangeNameValue} />
                <label htmlFor="email">E-mail:</label>
                <input id="email" value={this.state.emailValue} onChange={this.onChangeEmailValue} />
                <button onClick={this.createUser}>Cadastrar</button>
            </div>
        )
    }
}

export default RegisterUserPage