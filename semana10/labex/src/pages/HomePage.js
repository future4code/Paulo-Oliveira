import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator'

const HomePage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Home Page</p>
        <button onClick={ () => goToListTripsPage(history) }>Ver Viagens</button>
        <button onClick={ () => goToLoginPage(history) }>Área de Admin</button>
        </Fragment>
    )
}

export default HomePage