import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaOpcoes from './PerguntaOpcoes'

const H3Form = styled.h3`
    color: #025955;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <H3Form>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H3Form>
                <PerguntaAberta pergunta={'5. Por que você não terminou um curso de graduação?'} />
                <PerguntaOpcoes 
                    pergunta={'6. Você fez algum curso complementar?'}
                    opcoes={[
                        'Nenhum',
                        'Curso de Inglês',
                        'Curso Técnito'
                    ]}
                />  
            </div>
        )
    }
}

export default Etapa3 