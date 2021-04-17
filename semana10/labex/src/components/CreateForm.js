import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useForm } from '../hooks/useForm'
import { goToAdminHomePage } from '../routes/coordinator'

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

const initialForm = {
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
}

const Createform = () => {
    const history = useHistory()
    const [form, onChange, resetForm] = useForm(initialForm)

    const handleClick = (e) => {
        e.preventDefault()
        
        resetForm()
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push('/login')
        }
    },[history])

    const createTrip = () => {
        const token = window.localStorage.getItem('token')

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/trips', body, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                alert('Viagem criada!')
                history.push('/admin/trips/list')
            })
            .catch((err) => {
                alert('Não enviado')
            })
    }

    return (
        <form onSubmit={ handleClick }>
            <input 
                name='name'
                placeholder='Nome'
                onChange={ onChange }
                value={ form.name }
            />
            <select
                name='planet'
                placeholder='Planeta'
                onChange={ onChange }
                value={ form.planet }
                displayempty='true'
            >
                <option disabled  value={ '' }>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Jupiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutão</option>
            </select>
            <input 
                type='date'
                name='date'
                placeholder='Data'
                onChange={ onChange }
                value={ form.date }
            />
            <input 
                name='description'
                placeholder='Descrição'
                onChange={ onChange }
                value={ form.description }
            />
            <input
                type='number'
                min='50'
                name='durationInDays'
                placeholder='Duração'
                onChange={ onChange }
                value={ form.durationInDays }
            />
            <ButtonDiv>
                <button onClick={ () => goToAdminHomePage(history) }>Voltar</button>
                <button onClick={ createTrip }> Enviar </button>
            </ButtonDiv>
        </form>
    )
}

export default Createform