import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Createform from '../../components/CreateForm'

import {useProtectedPage} from '../../hooks/useProtectedPage'
import { goToAdminHomePage } from '../../routes/coordinator'


const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()

    return(
        <Fragment>
        <p>Criar Viagem</p>
        <Createform />
        <button onClick={ () => goToAdminHomePage(history) }>Voltar</button>
        </Fragment>
    )
}

export default CreateTripPage