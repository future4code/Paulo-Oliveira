import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const CreateComent = styled.div`
    border: 1px solid black;
    width: 40%;
    text-align: center;

    div {
        border-bottom: 1px solid black;
        height: 12vh;
    }
`

export const ListComent = styled.div`
    border: 1px solid black;
    width: 40%;
    text-align: center;
    margin: 20px 0;

    h3 {
        border-bottom: 1px solid black;
    }
`

export const ComentDiv = styled.div`
    height: 10vh;
    text-align: center;
    border-bottom: 1px solid black;
`

export const LikeComentDiv = styled.div`
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