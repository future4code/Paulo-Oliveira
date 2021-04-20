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
    border: 1px solid black;
    width: 200vh;
    height: 90vh;
    margin: 40px auto;
    background-color: #00000050;
    color: white;
    
    img {
        height: 150px;
        margin-left: 20px;
    }

    div {
        margin-top: 50px;
        text-align: left;

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
    }
`

export const Div = styled.div`
    height: 60vh;
    padding-left: 100px;
    padding-top: 100px;
`