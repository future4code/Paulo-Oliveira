import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: #bfdcae;

    button {
        height: 30px;
        margin-top: 5px;
    }

    
`

export default class Header extends React.Component {

    render() {

        return(
            <HeaderContainer>
                <h1>Header</h1>
            </HeaderContainer>
        )
    }
}