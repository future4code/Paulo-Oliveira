import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator'

import { Container, StyleContainer, Div } from './styles'

import Logo from '../../assets/logo.png'

const HomePage = () => {
    const history = useHistory()

    return( 
        <Container>
            <StyleContainer>
            <Div>
            <img src={ Logo } alt='logo' />
            <h2>Veja o mundo por outro ângulo</h2>
            <p>Conheça a LabeX, a sua plataforma de viagens espaciais.</p>
                <div>
                    <button onClick={ () => goToListTripsPage(history) }>Ver Viagens</button>
                    <button onClick={ () => goToLoginPage(history) }>Área de Admin</button>
                </div>
            </Div>
            </StyleContainer>
        </Container>
    )
}

export default HomePage