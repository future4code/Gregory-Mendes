import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/AppBar/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
