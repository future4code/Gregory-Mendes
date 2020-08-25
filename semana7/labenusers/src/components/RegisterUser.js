import React from 'react'
import RegisterContainer from './styled'
import axios from 'axios'

class RegisterUser extends React.Component {
    
    state = {
        nameValue: "",
        emailValue: ""
    };

    createNewUser(name, email) {
        const body = {
            name: this.state.name,
            email: this.state.email
        };
        
        const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "gregory-mendes-jackson"
            }
        });
        
        request
        .then((response) => {
            alert(`O usuário ${name} foi registrado com sucesso!`);

        }).catch((error) => {
            alert("Ocorreu um erro. Verifique se as informações estão preenchidas corretamente.")
        })
    }

    render() {
        const onChangeNameInput = (event) => {
            this.setState({nameValue: event.target.value})
        }
        
        const onChangeEmailInput = (event) => {
            this.setState({emailValue: event.target.value})
        }
        
        return (
            <div>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" value={this.state.nameValue} onChange={onChangeNameInput}/>
                    <label htmlFor="email" >E-mail:</label>
                    <input id="email" value={this.state.emailValue} onChange={onChangeEmailInput}/>
                </div>
                <button onClick={() => this.createNewUser(this.state.nameValue, this.state.emailValue)}>Registrar</button>
            </div>
        )
    }
}

export default RegisterUser