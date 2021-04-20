import React from 'react'

import { Container, StyleContainer, Title } from './styles'

import Header from '../../components/Header'
import Createform from '../../components/CreateForm'
import {useProtectedPage} from '../../hooks/useProtectedPage'

const CreateTripPage = () => {
    useProtectedPage()

    return(
        <Container>
            <Header />
            <Title>
                <h1>Criar Viagem</h1>
            </Title>
            <StyleContainer>
                <Createform />
            </StyleContainer>
        </Container>
    )
}

export default CreateTripPage