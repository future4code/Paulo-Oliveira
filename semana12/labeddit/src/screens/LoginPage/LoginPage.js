import React from 'react'
import { useHistory } from 'react-router-dom'

import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import Button from '../../constants/Button'

import { Container, LoginDiv, SignupDiv } from './styled'
import logo from '../../assets/logo.png'
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
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <p>O LabEddit é uma rede social de conteúdos curados pelos próprios usuários, que se organizam em comunidades. Aqui você pode interagir com pessoas sobre qualquer assunto, trocar experiências e participar de discussões.</p>
                <h3>Ainda não tem conta? Cadastre-se!</h3>
                <Button onClick={() => goToSignUp(history)}>Cadastrar</Button>
            </SignupDiv>
        </Container>
    )
}

export default LoginPage