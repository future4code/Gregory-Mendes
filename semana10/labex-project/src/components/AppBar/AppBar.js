import React from 'react';
import { goToHomePage, goToApplicationPage,
        goToCreateTripPage, goToLoginPage,
        goToTripsListPage } from '../../routers/switchPages';
import { useHistory } from 'react-router-dom';
import { AppBarContainer, SpanButton } from './app-bar-styled';

const AppBar = () => {
    const history = useHistory();

    return (
        <AppBarContainer>
            <div/>
            <SpanButton onClick={() => goToHomePage(history)}>Início</SpanButton>
            <SpanButton onClick={() => goToTripsListPage(history)}>Viagens</SpanButton>
            <SpanButton onClick={() => goToApplicationPage(history)}>Quero me candidatar!</SpanButton>
            <SpanButton onClick={() => goToCreateTripPage(history)}>Criar nova viagem</SpanButton>
            <SpanButton onClick={() => goToLoginPage(history)}>Login</SpanButton>
        </AppBarContainer>
    );
};

export default AppBar;