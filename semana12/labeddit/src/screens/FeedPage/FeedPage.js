import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { Card, CardHeader } from '@material-ui/core';

const FeedPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [posts]);

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: localStorage.getItem("token")
        }})
        .then((response) => {
            console.log(response.data);
            setPosts(response.data.posts);
        })
        .catch((error) => {
            console.log("Ocorreu um erro na exibição dos posts. Tente novamente.")
        });
    };

    const showPosts = posts.map((post) => {
        return (
            <Card key={post.id}>
                <CardHeader
                    title={post.title}
                />
                    
                    {post.username}
                <p>{post.title}</p>
                <p>{post.text}</p>
                <button>positivo</button>
                <button>negativo</button>
                <p>{post.commentsCount} comentários</p> 
            </Card>
        )
    });
    
    return (
        <div>
            <div>
                <input placeholder="Escreva algo para postar"></input>
                <button>Postar</button>
            </div>
            {showPosts}
        </div>
    )
};

export default FeedPage;