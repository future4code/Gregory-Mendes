import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToSignUpPage } from '../../routes/Coordinator';
import LoginForm from './LoginForm';
import { LoginContainer } from './styled-login-page';

const LoginPage = () => {
    const history = useHistory();

    return (
        <LoginContainer>
            <LoginForm/>
            <Button
                onClick={() => goToSignUpPage(history)}
                color={"secondary"}
                variant={"text"}
            >
                Não é cadastrado? Clique aqui para criar uma conta!
            </Button>
        </LoginContainer>
    );
};

export default LoginPage;