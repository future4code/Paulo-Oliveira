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
    border-bottom: 1px solid black;

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
                <button onClick={this.props.changepage}>VER PLAYLIST</button>
            </HeaderContainer>
        )
    }
}