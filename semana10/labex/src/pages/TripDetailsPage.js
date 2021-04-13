import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../routes/coordinator'

const TripDetailsPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Detalhes da Viagem</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        </Fragment>
    )
}

export default TripDetailsPage