import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { Container, StyleContainer, Title, ButtonDiv, TripDiv } from './styles'

import { goToApplicationFormPage, goToLastPage } from '../../routes/coordinator'
import Header from '../../components/Header'

const ListTripsPage = () => {
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips')
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <Container>
        <Header />
        <Title>
            <h1>Lista de Viagens</h1>
        </Title>
        <StyleContainer>
                <ButtonDiv>
                    <div>
                        <p>Nascida com a missão de revolucionar a tecnologia espacial, a <b>LabeX</b> projeta, fabrica e 
                         lança foguetes que, atualmente, entregam cargas na órbita terrestre. Apesar disso, o foco 
                         principal da companhia é permitir que as pessoas possam habitar outros planetas.<br/><br/>
                         Para alcançar seu principal objetivo, a empresa tem trabalhado para que o turismo espacial 
                         se torne realidade, através da construção de foguetes reutilizáveis, como a família Falcão 
                         e a cápsula Dragão.
                        </p>
                    </div>
                    <div>
                    <button onClick={ () => goToLastPage(history) }>Voltar</button>
                    <button onClick={ () => goToApplicationFormPage(history) }>Inscrever-se</button>
                    </div>
                </ButtonDiv>
                <TripDiv>
                { trips.map((trip) => {
                    return <div key={trip.id}>
                        <h2><b>Nome: </b>{trip.name}</h2>
                        <div>
                            <p><b>Descrição:</b> {trip.description}</p>
                            <p><b>Planeta:</b> {trip.planet}</p>
                            <p><b>Duração:</b> {trip.durationInDays}</p>
                            <p><b>Data:</b> {trip.date}</p>
                            <hr/>
                        </div>
                    </div>
                }) }
            </TripDiv>
        </StyleContainer>
        </Container>
    )
}

export default ListTripsPage