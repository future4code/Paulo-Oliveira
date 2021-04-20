import React from 'react'

import { Container, Title, StyleContainer } from './styles'

import Header from '../../components/Header'
import ApplicateCandidate from '../../components/ApplicateCandidade'

const ApplicationFormPage = () => {
    return(
        <Container>
            <Header />
            <Title>
                <h1>Inscreva-se para uma viagem</h1>
            </Title>
                <StyleContainer>
                <ApplicateCandidate />
                </StyleContainer>
        </Container>
    )
}

export default ApplicationFormPage