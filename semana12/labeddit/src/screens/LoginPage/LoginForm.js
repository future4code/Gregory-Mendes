import { Button, TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';
import { FormInputs, LoginFormContainer } from './styled-login-page';
import { useHistory } from 'react-router-dom';
import { loginRequest } from '../../services/userRequests';

const LoginForm = () => {
    const [form, handleInputChange] = useForm({email: "", password: ""});
    const history = useHistory();

    const onClickLogin = (event) => {
        event.preventDefault();
        const element = document.getElementById("login-form");
        const isValid = element.checkValidity();
        element.reportValidity();
        
        if (isValid) {
            loginRequest(form, history);
        }
    }

    return (
        <form id="login-form">
            <LoginFormContainer>
                <FormInputs>
                    <TextField
                        value={form.email}
                        name={"email"}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    >   
                    </TextField>
                    <TextField
                        value={form.password}
                        name={"password"}
                        onChange={handleInputChange}
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        required
                        margin={"normal"}
                    >   
                    </TextField>
                </FormInputs>
                <Button
                    onClick={onClickLogin}
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    Entrar
                </Button>
            </LoginFormContainer>
        </form>
    );
};

export default LoginForm;