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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat rutrum laoreet. Vestibulum efficitur ullamcorper leo quis tempus. Morbi luctus, eros sit amet molestie rutrum, nibh velit cursus tortor, ut convallis eros leo id lectus. Ut risus nunc, imperdiet sodales turpis mattis, pharetra aliquet ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh massa, eleifend eu lobortis quis, blandit at augue. Suspendisse potenti. Duis et volutpat quam. Etiam venenatis interdum varius. Sed varius sapien ipsum, eu congue augue commodo ac.</p>
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