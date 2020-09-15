import React from 'react'
import { goToHomePage, goToApplicationPage,
        goToCreateTripPage, goToLoginPage,
        goToTripsListPage } from '../routers/switchPages'
import { useHistory } from 'react-router-dom'

const AppBar = () => {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => goToHomePage(history)}>Início</button>
            <button onClick={() => goToTripsListPage(history)}>Viagens</button>
            <button onClick={() => goToApplicationPage(history)}>Quero me candidatar!</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            <button onClick={() => goToLoginPage(history)}>Login</button>
        </div>
    )
}

export default AppBar;