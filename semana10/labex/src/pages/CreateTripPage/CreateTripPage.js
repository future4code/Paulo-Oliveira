import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLastPage } from '../../routes/coordinator'


const CreateTripPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push('/login')
        }
    }, [history])

    return(
        <Fragment>
        <p>Criar Viagem</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button>Criar</button>
        </Fragment>
    )
}

export default CreateTripPage