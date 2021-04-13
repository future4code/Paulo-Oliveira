import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../../routes/coordinator'

const AdminHomePage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Painel Administrativo</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ () => goToCreateTripPage(history) }>Criar Viagem</button>
        <button onClick={ () => goToLoginPage(history) }>Logout</button>

        <button onClick={ () => goToTripDetailsPage(history) }>Detalhe da Viagem</button>
        </Fragment>
    )
}

export default AdminHomePage