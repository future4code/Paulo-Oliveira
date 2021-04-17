import styled from 'styled-components'

import Bg1 from '../../assets/bg.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ Bg1 });
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
`

export const StyleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Title = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.3rem;
    text-shadow: 2px 2px 20px black, 3px 3px 20px black;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    p {
        padding: 50px;
        padding-top: 80px;
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

export const TripDiv = styled.div`
    backdrop-filter: blur(3px);
    background-color: #00000095;
    width: 500px;
    padding: 20px;
    margin-left: 70px;
    margin-top: 70px;
`