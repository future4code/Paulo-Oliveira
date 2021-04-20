import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ErroBg from '../../assets/404.png'

import { goToHomePage } from '../../routes/coordinator'

const Container = styled.div`
    height: 100vh;
    background-image: url(${ ErroBg });
    background-repeat: no-repeat;
    background-size: cover;

    button {
        margin: 20px;
        width: 130px;
        height: 30px;
        cursor: pointer;

        :hover {
            background-color: grey;
        }
    }
`

const ErrorPage = () => {
    const history = useHistory()

    return(
        <Container>
            <button onClick={ () => goToHomePage(history) }>Página inicial</button>
        </Container>
    )
}

export default ErrorPage