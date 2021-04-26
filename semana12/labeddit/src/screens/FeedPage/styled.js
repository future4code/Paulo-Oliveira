import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CreatePost = styled.div`
    border: 1px solid black;
    width: 40%;
    text-align: center;

    div {
        border-bottom: 1px solid black;
        height: 15vh;
    }
`

export const ListPost = styled.div`
    border: 1px solid black;
    width: 40%;
    text-align: center;
    margin: 20px 0;

    h3 {
        border-bottom: 1px solid black;
    }
`

export const TextDiv = styled.div`
    height: 15vh;
    text-align: center;
    border-bottom: 1px solid black;
`

export const LikeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;

    div {
        display: flex;
        justify-content: row;
        align-items: center;

        p {
            margin: 0 5px;
        }
    }
`