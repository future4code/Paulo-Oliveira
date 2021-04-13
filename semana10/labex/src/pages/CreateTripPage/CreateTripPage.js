import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../../routes/coordinator'

const CreateTripPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Criar Viagem</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button>Criar</button>
        </Fragment>
    )
}

export default CreateTripPage