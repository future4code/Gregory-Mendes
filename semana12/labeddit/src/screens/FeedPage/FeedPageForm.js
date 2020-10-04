import { Button, TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';
import { createPostRequest } from '../../services/userRequests';

const FeedPageForm = () => {
    const [form, handleInputChange] = useForm({title: "", text: ""});

    const onClickCreatePost = (event) => {
        event.preventDefault();
        const element = document.getElementById("create-post-form");
        const isValid = element.checkValidity();
        element.reportValidity();
        
        if (isValid) {
            createPostRequest(form);
        };
    };
    
    return (
        <form id={"create-post-form"}>
            <TextField 
                name={"title"}
                onChange={handleInputChange}
                value={form.title}
                variant={"outlined"}
                placeholder="Título"
            />
            <TextField
                name={"text"}
                onChange={handleInputChange}
                value={form.text}
                variant={"outlined"}
                placeholder="Texto do seu post"
            />
            <Button variant={"contained"} color={"primary"} onClick={onClickCreatePost}>Criar post</Button>
        </form>
    );
};

export default FeedPageForm;