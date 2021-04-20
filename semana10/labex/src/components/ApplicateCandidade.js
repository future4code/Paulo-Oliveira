import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { goToLastPage } from '../routes/coordinator'

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

const ApplicationCandidate = () => {
    const history = useHistory()
    const [age, setAge] = useState(0)
    const [name, setName] = useState('')
    const [profession, setProfessin] = useState('')
    const [text, settext] = useState('')
    const [country, setCountry] = useState('')
    const [trips, setTrips] = useState([])
    const [trip, setTrip] = useState('')


    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips')
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const ApplyToTrip = () => {
        if(name === '' || !age || profession === '' || text === '' || country === '' || trip === '') {
            return alert('Preencha todos os campos!')
        }

        const body = {
            name,
            age,
            profession,
            applicationText: text,
            country
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips/${trip}/apply`, body)
            .then((res) => {
                alert('Enviado com sucesso!')
                console.log(res)
                history.push('/trips/list')
            })
            .catch((err) => {
                alert('Erro ao enviar')
                console.log(err)
            })
    }

    const ageItens = () => {
        let itens = []
        for(let i = 18; i < 81; i++) {
            itens.push(<option value={ i }>{ i }</option>)
        }

        return itens
    }

    const tripsItens = () => {
        return trips.map((trip) => {
            return <option value={ trip.id }>{ trip.name }</option>
        })
    }

    return (
        <Fragment>
            <div >
                <input 
                    onChange={ (e) => { setName(e.target.value) } }
                    value={ name }
                    placeholder='Nome'
                />
                <select 
                    onChange={ (e) => { setAge(e.target.value) } }
                    value={ age }
                    displayempty='true'
                >
                    <option
                        value={ 0 }
                        disabled
                    >Idade</option>
                        { ageItens() }
                </select>
                <input 
                    onChange={ (e) => { setProfessin(e.target.value) } }
                    value={ profession }
                    placeholder='Profissão'
                />
                <input 
                    onChange={ (e) => { settext(e.target.value) } }
                    value={ text }
                    placeholder='Texto de candidatura'
                />
                <select 
                    onChange={ (e) => { setTrip(e.target.value) } }
                    value={ trip }
                    displayempty='true'
                >
                    <option
                        value={ '' }
                        disabled
                    >Viagem</option>
                        { tripsItens() }
                </select>
                <select 
                    onChange={ (e) => { setCountry(e.target.value) } }
                    value={ country }
                    displayempty='true'
                >
                    <option
                        value={ '' }
                        disabled
                    >Escolha um país</option>
                    <option value='África do Sul'>África do Sul</option>
                    <option value='Alemanha'>Alemanha</option>
                    <option value='Angola'>Angola</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>  
                    <option value='Canadá'>Canadá</option>
                    <option value='Chile'>Chile</option>
                    <option value='China'>China</option>
                    <option value='Coreia do Norte'>Coreia do Norte</option>
                    <option value='Coreia do Sul'>Coreia do Sul</option>
                    <option value='Dinamarca'>Dinamarca</option>
                    <option value='Estados Unidos'>Estados Unidos</option>  
                    <option value='França'>França</option>
                    <option value='Holanda'>Holanda</option>              
                    <option value='Irã'>Irã</option>
                    <option value='Índia'>Índia</option>
                    <option value='Indonésia'>Indonésia</option>
                    <option value='Inglaterra'>Inglaterra</option>
                    <option value='Itália'>Itália</option> 
                    <option value='Japão'>Japão</option>
                    <option value='Nova Zelândia'>Nova Zelândia</option>
                    <option value='Russia'>Russia</option>
                    <option value='Uruguai'>Uruguai</option>
                </select>
                <ButtonDiv>
                <button onClick={ () => goToLastPage(history) }>Voltar</button>
                    <button onClick={ ApplyToTrip }>Enviar</button>
                </ButtonDiv>
            </div>
        </Fragment>
    )
 
}

export default ApplicationCandidate