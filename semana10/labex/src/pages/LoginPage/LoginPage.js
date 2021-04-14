import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'

import { Container, StyleContainer, DivInput, DivButton } from './styles'

import Logo from '../../assets/logo.png'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/paulo-oliveira-cruz/login', body)
            .then((res) => {
                console.log(res.data)
                window.localStorage.setItem('token', res.data.token)
                history.push('/admin/trips/list')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return( 
        <Container>
            <StyleContainer>
                <img src={ Logo } alt='logo' />
                <h1>Login</h1>
                <DivInput>
                    <input
                        type='email'
                        value={ email }
                        onChange={ handleEmail }
                        placeholder='E-mail'
                    />
                    <input
                        type='password'
                        value={ password }
                        onChange={ handlePassword }
                        placeholder='Senha'
                    />
                </DivInput>
                <DivButton>
                    <button onClick={ () => goToHomePage(history) }>Voltar</button>
                    <button onClick={ login }>Entrar</button>
                </DivButton>
            </StyleContainer>
        </Container>
    )
}

export default LoginPage