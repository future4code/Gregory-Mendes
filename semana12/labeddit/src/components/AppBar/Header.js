import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToSignUpPage, goToFeedPage } from '../../routes/Coordinator'
import { ToolbarContainer, ToolbarItem } from './styled-appbar'

const Header = () => {
    const history = useHistory();

    return (
            <AppBar>
                <ToolbarContainer>
                    <ToolbarItem onClick={() => goToFeedPage(history)}>Feed de Posts</ToolbarItem>
                    <ToolbarItem onClick={() => goToSignUpPage(history)}>Cadastro</ToolbarItem>
                    <ToolbarItem onClick={() => goToLoginPage(history)}>Login</ToolbarItem>
                </ToolbarContainer>
            </AppBar>
    );
};

export default Header;
