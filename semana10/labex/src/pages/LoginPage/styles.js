import styled from 'styled-components'

import Bg3 from '../../assets/bg3.jpg'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-image: url(${ Bg3 });
    background-repeat: no-repeat;
    background-size: cover;
`

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 100vh;
    height: 65vh;
    margin: 80px auto;
    background-color: #00000080;
    
    img {
        height: 150px;
        margin-left: 80px;
    }

    h1 {
        color: #fff;
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30%;

    div {
        text-align: center;
    }

    button {
        backdrop-filter: blur(3px);
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

    input {
        width: 400px;
        height: 30px;
        margin-top: 10px;
        background-color: transparent;
        color: white;
        border: 2px solid white;

        ::placeholder {
            padding-left: 5px;
            color: white;
        }
    }
`

export const DivButton = styled.div`
    margin-top: 20px;

    button {
        backdrop-filter: blur(3px);
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