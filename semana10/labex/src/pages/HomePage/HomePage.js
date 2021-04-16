import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator'

import { Container, StyleContainer } from './styles'

import Logo from '../../assets/logo.png'

const HomePage = () => {
    const history = useHistory()

    return( 
        <Container>
            <StyleContainer>
            <img src={ Logo } alt='logo' />
            <h1>Bem vindo</h1>
                <div>
                    <button onClick={ () => goToListTripsPage(history) }>Ver Viagens</button>
                    <button onClick={ () => goToLoginPage(history) }>Área de Admin</button>
                </div>
            </StyleContainer>
        </Container>
    )
}

export default HomePage