import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToSignUpPage, goToFeedPage } from '../../routes/Coordinator'
import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const NavigationSpan = styled.span`
    cursor: pointer;
`

const Header = () => {
    const history = useHistory();

    return (
            <AppBar position="static">
                <Toolbar style={{alignItems: "center", justifyContent: "center"}}>
                    <NavigationSpan onClick={() => goToFeedPage(history)}>Feed de Posts</NavigationSpan>
                    <NavigationSpan onClick={() => goToSignUpPage(history)}>Cadastro</NavigationSpan>
                    <NavigationSpan onClick={() => goToLoginPage(history)}>Login</NavigationSpan>
                </Toolbar>
            </AppBar>
    );
};

export default Header;
