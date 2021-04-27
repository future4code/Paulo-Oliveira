import React from 'react'
import { useHistory } from 'react-router-dom'

import { goToFeed, goToSignUp } from '../../routes/coordinator'
import { Container, ButtonDiv } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

import LoginForm from './LoginForm'

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <Container>
            <h1>Login</h1>
            <LoginForm/>
            <ButtonDiv>
                <button onClick={() => goToFeed(history)}>Feed</button>
                <button onClick={() => goToSignUp(history)}>Cadastrar</button>
            </ButtonDiv>
        </Container>
    )
}

export default LoginPage