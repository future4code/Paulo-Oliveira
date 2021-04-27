import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from '../screens/LoginPage/LoginPage'
import SignupPage from '../screens/SignupPage/SignupPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostDetailPage from '../screens/PostDetailPage/PostDetailPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <LoginPage/>
            </Route>
            <Route exact path='/signup'>
                <SignupPage/>
            </Route>
            <Route exact path='/feed'>
                <FeedPage/>
            </Route>
            <Route exact path='/feed/detail/:id'>
                <PostDetailPage/>
            </Route>
            <Route>
                <h1>Error 404</h1>
            </Route>
        </Switch>
    )
}

export default Router