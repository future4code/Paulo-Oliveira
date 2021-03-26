import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    height: 80px;
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