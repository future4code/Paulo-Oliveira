import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { goToHomePage } from '../../routes/coordinator'
import { useForm } from '../../hooks/useForm'
import { Container, StyleContainer, DivInput, DivButton } from './styles'

import Logo from '../../assets/logo.png'

const initialForm = {
    email: '',
    password: ''
}

const LoginPage = () => {
    const [ form, onChange, resetForm ] = useForm(initialForm)
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/admin/trips/list')
        }
    })

    const handleClick = (e) => {
        e.preventDefault()
        
        const body = {
            email: form.email,
            password: form.password
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/login', body)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                history.push('/admin/trips/list')
            })
            .catch((err) => {
                console.log(err)
            })

        resetForm()
    }

    return( 
        <Container>
            <StyleContainer>
                <img src={ Logo } alt='logo' />
                <h1>Login</h1>
                <DivInput>
                    <form onSubmit={ handleClick }>
                        <input
                            required
                            type='email'
                            name='email'
                            value={ form.email }
                            onChange={ onChange }
                            placeholder='E-mail'
                            pattern={ "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" }
                        />
                        <input
                            required
                            type='password'
                            name='password'
                            value={ form.password }
                            onChange={ onChange }
                            placeholder='Senha'
                        />
                        <div>
                            <button>Logar</button>
                        </div>
                    </form>
                </DivInput>
                <DivButton>
                <button onClick={ () => goToHomePage(history) }>Voltar</button>
                </DivButton>
            </StyleContainer>
        </Container>
    )
}

export default LoginPage