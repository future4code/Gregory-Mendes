import { Switch, Route } from 'react-router-dom'
import React from 'react'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostsPage from '../screens/PostPage/PostPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <Switch>  
            <Route exact path={"/login"}>
                <LoginPage/>
            </Route>
            <Route exact path={"/cadastro"}>
                <SignUpPage/>
            </Route>
            <Route exact path={["/feed-de-posts", "/"]}>
                <FeedPage/>
            </Route>
            <Route exact path={"/posts/:id"}>
                <PostsPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router;