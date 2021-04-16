import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../../routes/coordinator'

import ApplicationCandidate from '../../components/ApplicateCandidade'

const ApplicationFormPage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Inscreva-se para uma viagem</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <ApplicationCandidate />
        </Fragment>
    )
}

export default ApplicationFormPage