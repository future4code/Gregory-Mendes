import { Button, TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';
import { SignUpFormInputs, SignUpFormContainer } from './styled-signup-page';
import { useHistory } from 'react-router-dom';
import { signupRequest } from '../../services/userRequests';

const SignUpForm = () => {
    const [form, handleInputChange] = useForm({email: "", password: "", username: ""});
    const history = useHistory();

    const onClickSignUp = (event) => {
        event.preventDefault();
        const element = document.getElementById("signup-form");
        const isValid = element.checkValidity();
        element.reportValidity();
        if (isValid) {
            signupRequest(form, history);
        }
    }

    return (
        <form id="signup-form">
            <SignUpFormContainer>
                <SignUpFormInputs>
                    <TextField
                        value={form.username}
                        name={"username"}
                        onChange={handleInputChange}
                        label={"Nome"}
                        variant={"outlined"}
                        type={"text"}
                        fullWidth
                        required
                        margin={"normal"}
                    >   
                    </TextField>
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
                        type={"text"}
                        fullWidth
                        required
                        margin={"normal"}
                    >   
                    </TextField>
                </SignUpFormInputs>
                <Button
                    onClick={onClickSignUp}
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    Cadastrar
                </Button>
            </SignUpFormContainer>
        </form>
    );
};

export default SignUpForm;