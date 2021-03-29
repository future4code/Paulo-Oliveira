import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderContainer = styled.div`
    font-family: 'Viga';
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    color: #f9f7f7;
    font-size: 1.80rem;

    h1 {
        text-shadow: 3px 3px grey;
    }

    button {
        height: 30px;
        margin-top: 5px;
    }

    
`

export default class Header extends React.Component {

    render() {

        return(
            <HeaderContainer>
                <h1>Labefy</h1>
            </HeaderContainer>
        )
    }
}