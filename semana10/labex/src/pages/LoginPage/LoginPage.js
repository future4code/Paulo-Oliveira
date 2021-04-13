import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage, goToLastPage } from '../../routes/coordinator'

import { Container, StyleContainer, DivInput, DivButton } from './styles'

import Logo from '../../assets/logo.png'

const LoginPage = () => {
    const history = useHistory()

    return( 
        <Container>
            <StyleContainer>
                <img src={ Logo } />
                <h1>Login</h1>
                <DivInput>
                    <input 
                        placeholder='E-mail'
                    />
                    <input 
                        placeholder='Senha'
                    />
                </DivInput>
                <DivButton>
                    <button onClick={ () => goToLastPage(history) }>Voltar</button>
                    <button onClick={ () => goToAdminHomePage(history) }>Entrar</button>
                </DivButton>
            </StyleContainer>
        </Container>
    )
}

export default LoginPage