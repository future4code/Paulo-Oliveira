import React from 'react'
import styled from 'styled-components'

const TextForm = styled.p`
    color: #00917c;
`

const InputForm = styled.input`
    background-color: #00917c;
    color: #fde8cd;
    font-weight: bold;
    height: 22px;
`

export default function PerguntaAberta(props) {
    return (
        <div>
            <TextForm>{props.pergunta}</TextForm>
            <InputForm onChange={props.onChange} value={props.value} />
        </div>
    )
}