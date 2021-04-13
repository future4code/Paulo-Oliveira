import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToLastPage } from '../routes/coordinator'

const ListTripsPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Lista de Viagens</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ () => goToApplicationFormPage(history) }>Inscrever-se</button>
        </Fragment>
    )
}

export default ListTripsPage