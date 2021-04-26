import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, InputDiv, ButtonDiv } from './styled'

import { goToFeed, goToLogin } from '../../routes/coordinator'

const SignupPage = () => {
    const history = useHistory()

    return (
        <Container>
            <h1>Cadastrar</h1>
            <InputDiv>
                <input
                    type='text'
                    placeholder='Nome'
                    name='name'
                />
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
                <button onClick={() => goToLogin(history)}>Login</button>
            </ButtonDiv>
        </Container>
    )
}

export default SignupPage