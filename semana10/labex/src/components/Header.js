import React from 'react'
import styled from 'styled-components'

import Logo from './../assets/logo.png'

const Container = styled.div`
    background-color: #00000080;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 15vh;
`

const LogoDiv = styled.div`
    display: flex;

    img {
        height: 100px;
    }
`

const Header = () => {
    return (
        <Container>
            <LogoDiv>
                <img src={ Logo } alt='logo' />
            </LogoDiv>

        </Container>
    )
}

export default Header