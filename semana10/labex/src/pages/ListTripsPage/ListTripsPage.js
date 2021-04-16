import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import {useProtectedPage} from '../../hooks/useProtectedPage'
import { goToApplicationFormPage, goToLastPage } from '../../routes/coordinator'

const ListTripsPage = () => {
    useProtectedPage()
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
        <Fragment>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ () => goToApplicationFormPage(history) }>Inscrever-se</button>
        <p>Lista de Viagens</p>
        <div>
            { trips.map((trip) => {
                return <div key={trip.id}>
                    <h1>{trip.name}</h1>
                    <div>
                        <p><b>Planeta:</b> {trip.planet}</p>
                        <p><b>Data:</b> {trip.date}</p>
                        <p><b>Descrição:</b> {trip.description}</p>
                        <p><b>Duração:</b> {trip.durationInDays}</p>
                    </div>
                </div>
            }) }
        </div> 
        </Fragment>
    )
}

export default ListTripsPage