import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const H3Form = styled.h3`
    color: #025955;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <H3Form>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H3Form>
                <PerguntaAberta pergunta={'5. Qual curso?'} />
                <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'} />
            </div>
        )
    }
}

export default Etapa2