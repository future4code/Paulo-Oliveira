import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

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
    }, [])

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
    },[])

    return(
        <Fragment>
        <p>Detalhes da Viagem</p>
        <h2>{ trip.name }</h2>
        <p>{ trip.description }</p>
        <p>{ trip.planet }</p>
        <p>{ trip.durationInDays }</p>
        <p>{ trip.date }</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        
        <Candidates tripId={ trip.id } candidates={ trip.candidates }/>
        <ApprovedCandidates list={ trip.approved }/>
        </Fragment>
    )
}

export default TripDetailsPage