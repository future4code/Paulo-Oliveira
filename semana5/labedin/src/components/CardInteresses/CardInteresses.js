import React from 'react'
import './CardInteresses.css'

function CardInteresses(props) {
    return (
        <div className='interesses-bloco'>
            <img className='interesses-img' src={ props.imagem } />
            <div>
                <h4>{ props.titulo }</h4>
                <p>{ props.texto }</p>
            </div>
        </div>
    )
}

export default CardInteresses