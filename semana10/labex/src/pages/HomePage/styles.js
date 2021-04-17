import styled from 'styled-components'

import Bg from '../../assets/bg1.jpg'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-image: url(${ Bg });
    background-repeat: no-repeat;
    background-size: cover;
`

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 100vh;
    height: 60vh;
    margin: 80px auto;
    background-color: #00000080;

    h1 {
        color: #fff;
    }
    
    img {
        height: 150px;
        margin-left: 80px;
    }

    div {
        margin-top: 50px;

        button {
            margin: 30px;
            height: 30px;
            width: 100px;
            outline: none;
            border: none;
            border-bottom: 2px solid black;
            cursor: pointer;

            :hover {
                background-color: grey;
            }
        }
    }
`