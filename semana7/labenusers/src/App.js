import React from 'react';
import axios from 'axios'
import RegisterUserPage from './components/RegisterUserPage'
import UsersListPage from './components/UsersListPage'
import './App.css';

class App extends React.Component {
  state = {
    currentPage: "registerUserPage",
  }

  changeCurrentPage = () => {
    this.state.currentPage === "registerUserPage"
    ? this.setState({currentPage: "usersListPage"})
    : this.setState({currentPage: "registerUserPage"})
    
  }

  render() {
    const currentPage = () => {
      if (this.state.currentPage === "registerUserPage") {
        return <RegisterUserPage/>
      } else if (this.state.currentPage === "usersListPage") {
        return <UsersListPage/>
      }
    }
    
    return (
      <div>
        <button onClick={this.changeCurrentPage}>Ir para lista de usuários</button>
        {currentPage()}
      </div>
    );
  };
}

export default App
