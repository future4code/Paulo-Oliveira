import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { goToFeed, goToSignUp } from '../../routes/coordinator'
import { Container, InputDiv, ButtonDiv } from './styled'

const LoginPage = () => {
    const history = useHistory()

    return (
        <Container>
            <h1>Login</h1>
            <InputDiv>
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                />
                <input
                    type='password'
                    placeholder='Senha'
                    name='password'
                />
            </InputDiv>
            <ButtonDiv>
                <button onClick={() => goToFeed(history)}>Feed</button>
                <button onClick={() => goToSignUp(history)}>Cadastrar</button>
            </ButtonDiv>
        </Container>
    )
}

export default LoginPage