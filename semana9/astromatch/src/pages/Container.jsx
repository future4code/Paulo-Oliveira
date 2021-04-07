import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FireIcon from './../assets/fire.svg'
import MatchesIcon from './../assets/comments.svg'
import UserIcon from './../assets/user.svg'
import TimesIcon from './../assets/times.svg'
import StarIcon from './../assets/star.svg'
import HeartIcon from './../assets/heart.svg'

import Walle from './../assets/walle.jpg'

const ContainerDiv = styled.div`
    background-color: #fff;
    width: 60vh;
    height: 90vh;
	display: flex;
	flex-direction: column;
    margin-top: 20px;
`

const Navbar = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;

    a {
        cursor: pointer;
        height: 30px;
    }
    
    img {
        width: 1.5rem;
    }
`

const MainDiv = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: red;
    width: 55vh;
    height: 70vh;
    border-radius: 10px;

    img {
        width: 40vh;
    }
`

const FooterDiv = styled.div`
    background-color: #fff;
    flex: auto;
	display: flex;
    justify-content: center;
	align-items: center;
`

const IconDiv = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);

    :nth-child(2) {
        height: 48px;
        width: 48px;
        margin: 0 1rem;
        color: #2db1ff;

        img {
            width: 1.5rem;
        }

    }

    a {
        cursor: pointer;
    }

    img {
        width: 2rem;
    }
`

export default class Container extends React.Component {

    render() {

        return(
            <ContainerDiv>
                <Navbar>
                    <a><img src={ FireIcon } /></a>
                    <a><img src={ MatchesIcon } /></a>
                    <a><img src={ UserIcon } /></a>
                </Navbar>
                <MainDiv>
                    <img src={ Walle } />
                    <h2>Nome,</h2>
                    <h3>Idade</h3>
                    <p>Descrição</p>
                </MainDiv>
                <FooterDiv>
                    <IconDiv>
                        <a><img src={ TimesIcon } /></a>
                    </IconDiv>
                    <IconDiv>
                        <a><img src={ StarIcon } /></a>
                    </IconDiv>
                    <IconDiv>
                        <a><img src={ HeartIcon } /></a>
                    </IconDiv>
                </FooterDiv>
            </ContainerDiv>

        )
    }
}