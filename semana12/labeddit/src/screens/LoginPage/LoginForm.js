import { Button, TextField } from '@material-ui/core';
import React from 'react'
import useForm from '../../hooks/useForm';
import { FormInputs, LoginFormContainer } from './styled-login-page';

const LoginForm = () => {
    const [form, handleInputChange] = useForm({email: "", password: ""});

    const onClickSubmit = () => {

    }

    return (
        <form>
            <LoginFormContainer>
                <FormInputs>
                    <TextField
                        value={form.email}
                        name={"email"}
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