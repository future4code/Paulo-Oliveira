import styled from 'styled-components'

import Bg from '../../assets/bg1.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg });
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
    display: flex;
    flex-direction: column;
    width: 100vh;
    margin: 50px auto;
    padding: 20px 50px;
    background-color: #00000080;
    text-align: left;

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

export const PlanetDiv = styled.div`
    backdrop-filter: blur(3px);
    border: 1px solid grey;
    text-align: center;
    margin: 10px;
`