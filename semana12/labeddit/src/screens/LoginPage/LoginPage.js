import React from 'react'
import { useHistory } from 'react-router-dom'

import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { Container, LoginDiv, SignupDiv } from './styled'
import Button from '../../constants/Button'

import LoginForm from './LoginForm'

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <Container>
            <LoginDiv>
                <LoginForm/>
            </LoginDiv>
            <SignupDiv>
                <h3>Ainda não tem conta? Cadastre-se!</h3>
                <Button onClick={() => goToSignUp(history)}>Cadastrar</Button>
            </SignupDiv>
        </Container>
    )
}

export default LoginPage