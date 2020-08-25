import React from 'react'
import axios from 'axios'

class UsersList extends React.Component {
    state = {
        users: [],
    };

    getNewUser() {
        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
            Authorization: "gregory-mendes-jackson"
            }
        });

        request
        .then((response) => {
            this.setState({users: response.data.result.list});
        }).catch((error) => {
            alert("Ocorreu um erro. Tente novamente.");
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Lista de usuários cadastrados:</h1>
                    {this.state.users.map((user) => {
                        return <p key={user.id}>{user.name}</p>;
                    })}
                </div>
            </div>
        )
    }
}

export default UsersList