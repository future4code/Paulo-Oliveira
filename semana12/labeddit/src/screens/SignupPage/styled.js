import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    text-align: center;
    background-color: #FF471A20;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        height: 100vh;
    }
`

export const InputDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 10px;
        width: 300px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            width: 90%;
        }
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px;
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80vh;
    align-items: center;
    box-shadow: 1px 1px 10px grey;
    margin: 50px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 1;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        margin: 65px auto;
    }

    img {
        width: 100px;
        margin: 20px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            padding-top: 20px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin: 10px;
            
            button {
                margin: 5px;
            }
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
            width: 100%;
        }
    }
`