import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    backdrop-filter: blur(3px);
    border: 1px solid grey;
    text-align: center;
    margin: 10px;
`

const ApprovedCandidates = (props) => {
    return (
        <ContainerDiv>
            <h2>Candidatos Aprovados</h2>
            { props.list && props.list.length === 0 ? 'Nenhum candidato aprovado' : props.list && props.list.map((cand) => {
                return <p key={ cand.name }> { cand.name } </p>
            })}
            
        </ContainerDiv>
    )
}

export default ApprovedCandidates