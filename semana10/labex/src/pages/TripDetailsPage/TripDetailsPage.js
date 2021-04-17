import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { Container, StyleContainer, Title, PlanetDiv } from './styles'

import Header from '../../components/Header'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import { goToLastPage } from '../../routes/coordinator'
import Candidates from '../../components/Candidates'
import ApprovedCandidates from '../../components/ApprovedCandidates'

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { id } = useParams()
    const [trip, setTrip] = useState({})

    useEffect(() => {
        getTripDetail()
    })

    const getTripDetail = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trip/${id}`,
                {
                    headers: {
                        auth: localStorage.getItem('token')
                    }
                }
            )
            .then((res) => {
                setTrip(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
      if(!localStorage.getItem('token') || localStorage.getItem('token') === '') {
        history.push('/login')
      }
    })

    return(
        <Container>
            <Header />
            <Title>
                <h1>Detalhes da Viagem</h1>
            </Title>
            <StyleContainer>
                <PlanetDiv>
                    <h2><b>Nome: </b>{ trip.name }</h2>
                    <p><b>Descrição: </b>{ trip.description }</p>
                    <p><b>Planeta: </b>{ trip.planet }</p>
                    <p><b>Duração: </b>{ trip.durationInDays }</p>
                    <p><b>Data: </b>{ trip.date }</p>
                    <button onClick={ () => goToLastPage(history) }>Voltar</button>
                </PlanetDiv>
                <Candidates tripId={ trip.id } candidates={ trip.candidates }/>
                <ApprovedCandidates list={ trip.approved }/>
            </StyleContainer>
        </Container>
    )
}

export default TripDetailsPage