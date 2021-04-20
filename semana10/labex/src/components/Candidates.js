import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    backdrop-filter: blur(3px);
    border: 1px solid grey;
    text-align: center;
    margin: 10px;
`

const aprove = (id, tripId, choice) => {
    axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips/${tripId}/candidates/${id}/decide`, {
            approve: choice
        }, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            alert('Feito!')
            document.location.reload(true)
        })
        .catch((err) => {
            console.log(err)
        })
}

const Candidates = (props) => {
    return (
        <ContainerDiv>
            <h2>Candidatos em análise</h2>
            <div>
                { props.candidates && props.candidates.length === 0 ? 'Nenhum candidato pra analisar' : props.candidates && props.candidates.map((candidate) => {
                    return (
                        <div key={ candidate.name }>
                        
                        <h3><b>Nome: </b>{ candidate.name }</h3>
                        <p><b>Profissão: </b>{ candidate.profession }</p>
                        <p><b>Idade: </b>{ candidate.age }</p>
                        <p><b>País: </b>{ candidate.country }</p>
                        <p><b>Texto de candidatura: </b>{ candidate.applicationText }</p>
                        <button 
                            onClick={() => aprove(candidate.id, props.tripId, false)}
                        >Deletar</button>
                        <button
                            onClick={() => aprove(candidate.id, props.tripId, true)}
                        >Aprovar</button>
                        </div>
                    )
                }) }
            </div>
        </ContainerDiv>
    )
}

export default Candidates