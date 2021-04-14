import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../../routes/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const TripDetailsPage = () => {
    useProtectedPage()
    const [trip, setTrip] = useState({}) 
    const history = useHistory()

    useEffect(() => {
        geetTripDetail('rwXgyZFPWNYRo3KR2F9r')
    }, [])

    const geetTripDetail = (id) => {
        const token = window.localStorage.getItem('token')

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trip/${id}`,
                {
                    headers: {
                        auth: token
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

    const logout = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }

    return(
        <Fragment>
        <p>Detalhes da Viagem</p>
        <h2>{ trip.name }</h2>
        <p>{ trip.date }</p>
        <p>{ trip.description }</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ logout }>Logout</button>
        </Fragment>
    )
}

export default TripDetailsPage