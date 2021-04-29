import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FF471A20;
    background-size: 100% 100%;
    min-height: 100vh;
`

export const CreatePost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    width: 65%;
    height: 55vh;
    text-align: center;
    margin: 20px;
    margin-top: 100px;
    background-color: #fff;
    border-radius: 5px;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 90%;
        margin-top: 120px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            margin: 10px;
            width: 500px;
            height: 30px;
            outline: none;

            @media screen and (min-width: 300px) and (max-width: 420px) {
                width: 300px;
            }
        }

        textarea {
            resize: none;
            width: 500px;
            height: 160px;
            outline: none;

            @media screen and (min-width: 300px) and (max-width: 420px) {
                width: 300px;
            }
        }

        button {
            margin: 10px;
        }
    }
`

export const ListPost = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    box-shadow: 1px 1px 1px lightgrey;
    border: 1px solid lightgrey;
    width: 65%;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 90%;
    }

    :hover {
        border: 1px solid grey;
        transition: 0.2s;
    }

    h3, p {
        margin: 20px 30px;
    }
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        h3 {
            font-size: 22px;
        }

        p:nth-child(4) {
            margin-left: 130px;
        }
    }

    span {
        font-size: 20px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            font-size: 18px;
        }
    }
`

export const SubtitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    p {
        margin-right: -15px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            margin-right: 22px;
        }
    }
`

export const LikeDiv = styled.div`
    display: flex;
    min-width: 50px;
    background-color: #FF471A10;
    border-radius: 5px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left:10px;
        margin-top: 10px;

        img {
            cursor: pointer;

            :hover {
                background-color: #E7E7E7;
            }
        }

        p {
            margin: 0 5px;
        }
    }
`