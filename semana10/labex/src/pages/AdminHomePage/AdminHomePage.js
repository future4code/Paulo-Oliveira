import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Container, StyleContainer, Title, ButtonDiv, TripDiv, Div } from './styles'

import Header from '../../components/Header'
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const AdminHomePage = () => {
    useProtectedPage();
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push('/login')
        }
    }, [history])

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

    const deleteTrip = (id) => {
        if(window.confirm('Tem certeza que quer deletar essa viagem?')) {
            const token = window.localStorage.getItem('token')
            console.log(deleteTrip)
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips/${id}`, {
                    headers: {
                        auth: token
                    }
                })
                .then(() => getTrips())
                .catch((err) => console.log(err))
        }
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        document.location.reload(true)
    }

    return(
        <Container>
            <Header />
            <Title>
                <h1>Painel Administrativo</h1>
            </Title>
            <ButtonDiv>
                <button onClick={ () => goToHomePage(history) }>Voltar</button>
                <button onClick={ () => goToCreateTripPage(history) }>Criar Viagem</button>
                <button onClick={ logout }>Logout</button>
            </ButtonDiv>
            <StyleContainer>
            <TripDiv>
                { trips.map((trip) => {
                    return <Div key={trip.id} onClick={ () => history.push(`/admin/trips/${trip.id}`) }>
                        <p>{trip.name}</p>
                        <button
                            onClick={() => deleteTrip(trip.id)}
                        >X</button>
                    </Div>
                }) }
            </TripDiv>
            </StyleContainer>
        </Container>
    )
}

export default AdminHomePage