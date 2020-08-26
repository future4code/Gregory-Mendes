import React from 'react'
import axios from 'axios'
import DeleteButton from './styled'
import UserDetailsPage from './UserDetailsPage'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headersConfig =  {headers: {Authorization: "gregory-mendes-jackson"}};

class UsersListPage extends React.Component {
    state = {
        users: [],
    };

    componentDidMount = () => {
        this.getAllUsers();
    };
    
    getAllUsers = () => {
        const request = axios.get(baseUrl, headersConfig);
        
        request
        .then(response => {
            this.setState({users: response.data})
        })
        .catch(error => {
          alert("Ocorreu um erro inesperado.")
        });
    };

    deleteUser = (userId) => {
        const confirmDeletion = window.confirm("Tem certeza que deseja excluir este(a) usuário(a)?");
        
        if (confirmDeletion) {
            const request = axios.delete(`${baseUrl}/${userId}`, headersConfig);
            
            request
            .then(response => {
                this.getAllUsers()
            })
            .catch(error => {
                alert(error.message)
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.users.map((user) => {
                    return (
                        <p key={user.id} onClick={this.onClickUserName}>
                            {user.name}
                            <DeleteButton onClick={() => this.deleteUser(user.id)}> X</DeleteButton>
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default UsersListPage