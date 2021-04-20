import styled from 'styled-components'

import Bg7 from '../../assets/bg7.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg7 });
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`

export const StyleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Title = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.3rem;
    text-shadow: 2px 2px 20px grey, 3px 3px 20px grey;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    p {
        padding: 0 50px;
        padding-top: 80px;
        color: black;
        font-weight: 700;
    }

    button {
            margin: 30px;
            height: 30px;
            width: 180px;
            outline: none;
            border: none;
            border: 2px solid black;
            background-color: transparent;
            color: black;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            cursor: pointer;

            :hover {
                background-color: grey;
            }
        }
`

export const TripDiv = styled.div`
    backdrop-filter: blur(3px);
    background-color: #00000095;
    width: 500px;
    padding: 20px;
    margin-left: 70px;
    margin-top: 70px;
`