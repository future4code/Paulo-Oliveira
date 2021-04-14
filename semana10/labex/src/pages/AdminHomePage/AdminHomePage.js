import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage, goToLoginPage, goToTripDetailsPage } from '../../routes/coordinator'

const AdminHomePage = () => {
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

    return(
        <Fragment>
        <p>Painel Administrativo</p>
        <button onClick={ () => goToHomePage(history) }>Voltar</button>
        <button onClick={ () => goToCreateTripPage(history) }>Criar Viagem</button>
        <button onClick={ () => goToLoginPage(history) }>Logout</button>
        <div>
            { trips.map((trip) => {
                return <div key={trip.id}>
                    <p>{trip.name}</p>
                    <p>X</p>
                    <button onClick={ () => goToTripDetailsPage(history) }>Detalhes</button>
                </div>
            }) }
        </div> 
        </Fragment>
    )
}

export default AdminHomePage