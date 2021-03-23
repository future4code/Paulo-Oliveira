import React from 'react'
import styled from 'styled-components'

const H3Form = styled.h3`
    color: #025955;
`

const TextForm = styled.p`
    color: #00917c;
`

class Final extends React.Component {
    render() {
        return (
            <div>
                <H3Form>O FORMULÁRIO ACABOU</H3Form>
                <TextForm>Muito obrigado por participar! Entraremos em contato!</TextForm>
            </div>
        )
    }
}

export default Final    