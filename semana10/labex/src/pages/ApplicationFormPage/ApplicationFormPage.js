import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../../routes/coordinator'

const ApplicationFormPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Inscreva-se para uma viagem</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button>enviar</button>
        </Fragment>
    )
}

export default ApplicationFormPage