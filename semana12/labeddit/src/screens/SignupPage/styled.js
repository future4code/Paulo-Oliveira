import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    border: 1px solid black;
    width: 40%;
    margin: 180px auto;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 10px;
        width: 300px;
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px;
`