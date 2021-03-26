import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #bfdcae;
    height: 60px;
    margin-top: auto;
`

export default class Footer extends React.Component {

    render() {
        
        return(
            <FooterContainer>
                <h1>Footer</h1>
            </FooterContainer>
        )
    }
}