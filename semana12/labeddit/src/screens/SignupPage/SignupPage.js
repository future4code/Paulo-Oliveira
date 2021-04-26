import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { goToFeed, goToLogin } from '../../routes/coordinator'

const SignupPage = () => {
    const history = useHistory()

    return (
        <Fragment>
            <h1>SignUp</h1>
            <button onClick={() => goToFeed(history)}>Feed</button>
            <button onClick={() => goToLogin(history)}>Login</button>
        </Fragment>
    )
}

export default SignupPage