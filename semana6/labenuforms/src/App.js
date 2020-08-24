import React from 'react';
import './App.css';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Agradecimento from './components/Agradecimento';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const Button = styled.button`
    margin-top: 15px;
`

class App extends React.Component {
  state = {
    page: 1
  };

  onClickNextStep = () => {
    this.setState ({page: this.state.page + 1 })
  }

  renderStep = () => {
    switch(this.state.page) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Agradecimento />;
    }
  }

  render () {
    if (this.state.page === 4) {
      return (
        <AppContainer>
          <Agradecimento />
        </AppContainer>
      )
    }
    return (
      <AppContainer>
        {this.renderStep()}
        <Button onClick={this.onClickNextStep}>Próxima etapa</Button>
      </AppContainer>
    );
  }
}

export default App;
