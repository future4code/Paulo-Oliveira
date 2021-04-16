import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const ApplicationCandidate = () => {
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
            return alert('Todos os campos são obrigatorios preencher!')
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
                alert('enviado com sucesso!')
                console.log(res)
            })
            .catch((err) => {
                alert('Erro ao enviar')
                console.log(err)
            })
    }

    const ageItens = () => {
        let itens = []
        for(let i = 20; i < 56; i++) {
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
            <h1>Se inscreva para uma viagem!</h1>
            <div>
                <input 
                    onChange={ (e) => { setName(e.target.value) } }
                    value={ name }
                    placeholder='Nome'
                />
                <select 
                    onChange={ (e) => { setAge(e.target.value) } }
                    value={ age }
                    displayEmpty
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
                    displayEmpty
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
                    displayEmpty
                >
                    <option
                        value={ '' }
                        disabled
                    >Escolha um país</option>
                    <option value='Brasil'>Brasil</option>  
                    <option value='EUA'>EUA</option>  
                    <option value='Russia'>Russia</option>  
                    <option value='China'>China</option>  
                    <option value='Coreia do Norte'>Coreia do Norte</option>  
                    <option value='Japão'>Japão</option>  
                </select>
                <button
                    onClick={ ApplyToTrip }
                >Enviar</button>
            </div>
        </Fragment>
    )
 
}

export default ApplicationCandidate