import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { goToFeed, goToSignUp } from '../../routes/coordinator'

const LoginPage = () => {
    const history = useHistory()

    return (
        <Fragment>
            <h1>Login</h1>
            <button onClick={() => goToFeed(history)}>Feed</button>
            <button onClick={() => goToSignUp(history)}>Cadastrar</button>
        </Fragment>
    )
}

export default LoginPage