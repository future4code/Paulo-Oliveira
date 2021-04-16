import React from 'react'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'

const ApprovedCandidates = (props) => {
    return (
        <div>
            <h1>Candidatos Aprovados</h1>
            { props.list && props.list.length === 0 ? 'Nenhum candidato aprovado' : props.list && props.list.map((cand) => {
                return <p> { cand.name } </p>
            })}
        </div>
    )
}

export default ApprovedCandidates