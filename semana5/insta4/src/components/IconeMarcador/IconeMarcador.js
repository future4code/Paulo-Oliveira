import React from 'react'
import './IconeMarcador.css'


export function IconeMarcador(props) {
    return (
        <div className={'icon-container'}>
            <img src={props.icone} alt='' onClick={props.onClickIcone}/>
        </div>
    )
}