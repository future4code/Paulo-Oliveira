import React from 'react'
import styled from 'styled-components'

const TextForm = styled.p`
    color: #00917c;
`

const SelectForm = styled.select`
    background-color: #00917c;
    color: #fde8cd;
    height: 25px;
`

export default function PerguntaOpcoes(props) {
    return (
        <div>
            <TextForm>{props.pergunta}</TextForm>
            <SelectForm>
                {props.opcoes.map(opcao => (
                    <option value={opcao}>{opcao}</option>
                ))}
            </SelectForm>
        </div>
    )
}