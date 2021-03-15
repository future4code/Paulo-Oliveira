import React from 'react'
import styled from 'styled-components'

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>3. Qual seu email?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                <option value='1'>Ensino médio incompleto</option>
                <option value='1'>Ensino médio completo</option>
                <option value='1'>Ensino superior incompleto</option>
                <option value='1'>Ensino superior completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1;