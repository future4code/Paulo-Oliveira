import styled from 'styled-components'

import Bg2 from '../../assets/bg2.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg2 });
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
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 2px solid blue;
    }

    select {
        width: 100.5%;
        height: 40px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 2px solid blue;
    }

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
`