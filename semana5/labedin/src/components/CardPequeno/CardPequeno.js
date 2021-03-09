import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className='smallcard-container'> 
            <img src={ props.imagem } />
            <h4>{ props.titulo }</h4>
            <p>{ props.texto }</p>
        </div>
    )
}

export default CardPequeno