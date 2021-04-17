import styled from 'styled-components'

import Bg2 from '../../assets/bg2.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg2 });
    background-repeat: no-repeat;
    background-size: cover;
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
    margin: 0 auto;
    padding: 20px;
    background-color: #00000080;
`

export const ButtonDiv = styled.div`
    text-align: center;

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

export const TripDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin: 10px;
`

export const Div = styled.div`
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    margin: 10px;
    padding: 5px 40px;
    cursor: pointer;

    :hover {
        background-color: #ffffff50;
    }

    button {
        cursor: pointer;

        :hover {
            background-color: grey;
        }
    }
`