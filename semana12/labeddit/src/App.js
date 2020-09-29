import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/AppBar/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  padding-top: 70px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <InnerScreenContainer>
          <Router/>
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
