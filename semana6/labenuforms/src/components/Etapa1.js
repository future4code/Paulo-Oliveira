import React from 'react'
import styled from 'styled-components'

import PerguntaAberta from './PerguntaAberta.js'
import PerguntaOpcoes from './PerguntaOpcoes.js'

const H3Form = styled.h3`
    color: #025955;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <H3Form>ETAPA 1 - DADOS GERAIS</H3Form>
                <PerguntaAberta pergunta={'1. Qual o seu nome?'} />
                <PerguntaAberta pergunta={'2. Qual sua idade?'} />
                <PerguntaAberta pergunta={'3. Qual seu email?'} />
                <PerguntaOpcoes
                    pergunta={'4. Qual a sua escolaridade?'}
                    opcoes={[
                        'Ensino médio incompleto',
                        'Ensino médio completo',
                        'Ensino superior incompleto',
                        'Ensino superior completo'
                    ]}
                />
            </div>
        )
    }
}

export default Etapa1;