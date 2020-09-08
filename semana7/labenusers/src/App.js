import React from 'react';
import RegisterUserPage from './components/RegisterUserPage'
import UsersListPage from './components/UsersListPage'
import './App.css';

class App extends React.Component {
  state = {
    currentPage: "registerUserPage",
    pageButton: "Ir para lista de usuários"
  }

  changeCurrentPage = () => {
    this.state.currentPage === "registerUserPage"
    ? this.setState({currentPage: "usersListPage", pageButton: "Ir para página de cadastro"})
    : this.setState({currentPage: "registerUserPage", pageButton: "Ir para lista de usuários"})
    
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
        <button onClick={this.changeCurrentPage}>{this.state.pageButton}</button>
        {currentPage()}
      </div>
    );
  };
}

export default App
