import React from 'react';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import UsersList from "./components/UsersList"

export default class App extends React.Component {

  state  = {
    showUsersList: false,
  }

  onClickUsersList() {
    if (this.state.showUsersList) {}
    this.setState({showUsersList: !this.state.showUsersList});
    
    return <UsersList/>
  }

  render() {
    const showCurrentPage = this.state.showUsersList === false ? <RegisterUser/> : <UsersList/>
    console.log(this.state.showUsersList)
    return (
      <div>
        <button onClick={() => this.onClickUsersList()}>Ver lista de usuários</button>
        {showCurrentPage}
      </div>
    );
  }
}
