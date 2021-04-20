import styled from 'styled-components'

import Bg5 from '../../assets/bg5.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg5 });
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    color: #fff;
`

export const Title = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.3rem;
    text-shadow: 2px 2px 20px black, 3px 3px 20px black;
`

export const StyleContainer = styled.div`
    display: block;
    border: 1px solid black;
    width: 100vh;
    height: 57vh;
    margin: 0 auto;
    padding: 20px;
    background-color: #00000080;

    input {
        backdrop-filter: blur(3px);
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        background-color: transparent;
        color: white;
        border: 1px solid grey;

        ::placeholder {
            padding-left: 5px;
            color: white;
        }
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        opacity: 1;
        display: block;
        background: url('https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png') no-repeat;
    }

    select {
        backdrop-filter: blur(3px);
        width: 101%;
        height: 40px;
        margin-bottom: 10px;
        background-color: transparent;
        color: white;
        border: 1px solid grey;

        option {
            background-color: black;
        }
    }

    button {
        margin: 30px;
        height: 30px;
        width: 180px;
        outline: none;
        border: none;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        cursor: pointer;

        :hover {
            background-color: grey;
        }
    }
`