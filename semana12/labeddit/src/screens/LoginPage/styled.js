import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    text-align: center;
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

    img {
        width: 400px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 150px;
    }

    input {
        margin: 10px;
        width: 300px;
        height: 30px;
        border: none;
        outline: none;
        border-bottom: 5px solid grey;
    }
`

export const SignupDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100vh;
    background-color: white;
    box-shadow: 3px 3px 10px black;
    margin-left: -600px;
    z-index: 2;
`