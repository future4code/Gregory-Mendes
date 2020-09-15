import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage'
import HomePage from '../screens/HomePage/HomePage'
import LoginPage from '../screens/LoginPage/LoginPage'
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage'
import TripsListPage from '../screens/TripsListPage/TripsListPage'
import AppBar from '../components/AppBar'
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage'

const Router = () => {
    return (
        <BrowserRouter>
            <AppBar/>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/formulario-de-aplicacao">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/viagens">
                    <TripsListPage />
                </Route>
                <Route exact path="/viagens/detalhes">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/criar-nova-viagem">
                    <CreateTripPage />
                </Route>
                <Route>
                    <div>Ocorreu um erro inesperado (404).</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router