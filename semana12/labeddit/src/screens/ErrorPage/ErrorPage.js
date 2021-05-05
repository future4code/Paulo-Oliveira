import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import errorWeb from '../../assets/404web.png'
import errorMobile from '../../assets/404mobile.png'

import Button from '../../constants/Button'
import { goToLogin } from '../../routes/coordinator'

const Container = styled.div`
    background-image: url('${errorWeb}');
    height: 100vh;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        background-image: url('${errorMobile}');
        background-size: 100% 100%;
        height: 100vh;
    }

    button {
        margin: 20px;
    }
`

export default function ErrorPage() {
    const history = useHistory()

    return (
        <Container>
            <Button onClick={() => goToLogin(history)}>Voltar ao site</Button>
        </Container>
    )
}