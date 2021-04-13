import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage, goToLastPage } from '../routes/coordinator'

const LoginPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Login</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ () => goToAdminHomePage(history) }>Entrar</button>
        </Fragment>
    )
}

export default LoginPage