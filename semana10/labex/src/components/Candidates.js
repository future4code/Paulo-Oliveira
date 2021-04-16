import React from 'react'
import axios from 'axios'

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
            console.log(res)
            alert('Feito!')
            document.location.reload(true)
        })
        .catch((err) => {
            console.log(err)
        })
}

const Candidates = (props) => {
    return (
        <div>
            <h2>Candidatos em análise</h2>
            <div>
                { props.candidates && props.candidates.length === 0 ? 'Nenhum candidato pra analisar' : props.candidates && props.candidates.map((candidate) => {
                    return (
                        <div key={ candidate.name }>
                            <button 
                                onClick={() => aprove(candidate.id, props.tripId, false)}
                            >Deletar</button>
                            <button
                                onClick={() => aprove(candidate.id, props.tripId, true)}
                            >Aprovar</button>

                            <h3>{ candidate.name }</h3>
                            <p>{ candidate.applicationText }</p>
                            <p>{ candidate.profession }</p>
                            <p>{ candidate.age }</p>
                            <p>{ candidate.country }</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Candidates