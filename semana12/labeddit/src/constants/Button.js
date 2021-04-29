import styled from 'styled-components'

export const Button = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #FF471A90;
    font-weight: bold;
    border: none;

    :hover{
        background-color: #FF471A50;
        transition: 0.2s;
    }
`

export default Button