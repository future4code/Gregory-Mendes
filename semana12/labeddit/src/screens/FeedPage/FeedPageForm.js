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
            <input onChange={handleInputChange} placeholder="Título"></input>
            <input onChange={handleInputChange} placeholder="Texto do seu post"></input>
            <button onClick={onClickCreatePost}>Criar post</button>
        </form>
    );
};

export default FeedPageForm;