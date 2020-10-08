import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useRequestData from '../../hooks/useRequestData';
import { PostContainer, PostsMainContainer, PostTextArea, PostBottomArea, VoteArea } from './styled-feed-page';
import { useHistory } from 'react-router-dom';
import { goToPostPage } from '../../routes/Coordinator';
import FeedPageForm from './FeedPageForm';

const FeedPage = () => {
    const posts = useRequestData([], "/posts"); 
    const history = useHistory();

    const showPosts = () => (
        posts.map((post) => {
            return (
                <PostContainer 
                    key={post.id}
                    onClick={() => goToPostPage(history, post.id)}
                >
                    <p>{post.username}</p>
                    <PostTextArea>
                        <p>{post.text}</p>
                    </PostTextArea>
                    <PostBottomArea>
                        <VoteArea>
                            <ArrowUpwardIcon/>
                            <p>{post.votesCount}</p>
                            <ArrowDownwardIcon/>
                        </VoteArea>
                        <p>{post.commentsCount} comentários</p>
                    </PostBottomArea>
                </PostContainer>
            );
        })
    );
    
    return (
        <PostsMainContainer>
            {FeedPageForm()}
            <div>
                {showPosts()}
            </div>
        </PostsMainContainer>
    )
};

export default FeedPage;