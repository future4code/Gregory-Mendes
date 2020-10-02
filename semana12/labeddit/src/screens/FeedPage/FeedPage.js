import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useRequestData from '../../hooks/useRequestData';

const FeedPage = () => {
    const posts = useRequestData([], "/posts");

    const showPosts = () => (
        posts.map((post) => {
            return (
                <Card key={post.id}>
                    <CardContent >
                        <Typography>{post.username}</Typography>
                        <Typography>{post.title}</Typography>
                        <Typography>{post.text}</Typography>
                        <ArrowUpwardIcon></ArrowUpwardIcon>
                        <Typography>{post.votesCount}</Typography>
                        <ArrowDownwardIcon></ArrowDownwardIcon>
                        <Typography>{post.commentsCount} comentários</Typography>
                    </CardContent>
                </Card>
            )
        })
    );
    
    return (
        <div>
            <div>
                <input placeholder="Escreva algo para postar"></input>
                <button>Postar</button>
            </div>
            {showPosts()}
        </div>
    )
};

export default FeedPage;