import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FF471A20;
    background-size: 100% 100%;
    min-height: 100vh;
`

export const ListPost = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    box-shadow: 1px 1px 1px lightgrey;
    border: 1px solid lightgrey;
    width: 60%;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 5px;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 90%;
        margin-top: 30px;
    }

    h1, h3, p {
        margin: 10px 20px;
    }
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    margin: 20px;
    width: 100%;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        margin-left: -20px;

        h1 {
            font-size: 22px;
        }
    }

    span {
        font-size: 22px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            font-size: 18px;
        }
    }

    div {
        margin: 10px 0;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            h3 {
                font-size: 18px;
            }
        }
    }
`

export const LikeDiv = styled.div`
    display: flex;
    min-width: 50px;
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

export const CreateComment = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;

    textarea {
            resize: none;
            width: 600px;
            height: 130px;
            outline: none;
            margin: 10px 0;

            @media screen and (min-width: 300px) and (max-width: 420px) {
                width: 250px;
            }
        }
`

export const LikeComment = styled.div`
    display: flex;
    padding-left: 17px;

    p {
        margin: 0 5px;
        padding: 0;
    }

    img {
        cursor: pointer;

        :hover {
            background-color: #E7E7E7;
        }
    }
`