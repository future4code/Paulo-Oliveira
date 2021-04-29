import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid lightgrey;

    @media screen and (min-width: 300px) and (max-width: 420px) {
        width: 100%;
    }

    img {
        width: 150px;
        margin: 10px 60px;

        @media screen and (min-width: 300px) and (max-width: 420px) {
            height: 40px;
            margin: 20px 20px;
        }
    }

    div {
        margin: 10px 60px;

        button {
            margin-right: 10px;

            @media screen and (min-width: 300px) and (max-width: 420px) {
                margin-bottom: 5px; 
            }
        }
    }

    
`