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
    height: 75vh;
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
    margin-top: 20px;

    input {
        width: 400px;
        height: 30px;
        margin-top: 10px;
        border: none;

        ::placeholder {
            padding-left: 5px;
        }
    }
`

export const DivButton = styled.div`
    margin-top: 20px;

    button {
        margin: 30px;
        height: 50px;
        width: 150px;
        outline: none;
        border: none;
        border-bottom: 2px solid black;
        cursor: pointer;

        :hover {
            background-color: grey;
        }
    }
`