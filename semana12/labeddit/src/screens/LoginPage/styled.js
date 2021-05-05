import styled from 'styled-components'

import bg from '../../assets/bg-signup.jpg'

export const Container = styled.div`
    display: flex;
    text-align: center;
    background-color: #FF471A20;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        flex-direction: column;
    }
`

export const LoginDiv = styled.div`
    display: flex;
    width: 90%;
    height: 80vh;
    align-items: center;
    justify-content: start;
    box-shadow: 1px 1px 10px grey;
    margin: 50px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 1;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 80%;
        height: 70vh;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
    }

    img {
        width: 400px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            width: 250px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 150px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            margin: 0;
            padding: 0;
            align-items: center;
            justify-content: center;
        }
    }

    input {
        margin: 10px;
        width: 300px;
        height: 30px;
        border: none;
        outline: none;
        border-bottom: 3px solid #FF471A;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            width: 90%;
        }
    }
`

export const SignupDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100vh;
    background-color: #fff;
    color: #fff;
    box-shadow: 3px 3px 10px black;
    margin-left: -600px;
    z-index: 2;
    background-image: url('${bg}');
    background-size: cover;

    div {
        background-color: #fff;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin-top: -40px;
        margin-bottom: 10px;
    }

    img {
        height: 150px;
        
    }

    p {
        margin: 20px;
        text-align: justify;
    }

    h3 {
        color: #fff;
        text-shadow: 1px 1px 5px black;
    }

    button {
        :hover {
            border: 1px solid white;
            color: #fff;
            transform: 0.7s;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 420px) {
        margin: 0;
        z-index: 1;
        width: 100%;
        height: 22vh;

        div {
            display: none;
        }

        img {
            display: none;
        }

        p {
            display: none;
        }

        h3 {
            color: #fff;
            text-shadow: 1px 1px 5px black;
        }
    }
`