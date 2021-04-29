import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, LoginDiv } from './styled'
import logo from '../../assets/logo.png'

import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import Button from '../../constants/Button'
import { BASE_URL } from '../../constants/urls'
import { goToLogin, goToFeed } from '../../routes/coordinator'


export default function CadastroPage() {

    useUnprotectedPage()

    const formDefault = {email: '', password: '', username: ''}

    const history = useHistory()
    const [form, setForm] = useState(formDefault)

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
     }

     const cadastrar = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${BASE_URL}/signup`, form)
            window.localStorage.setItem('token', response.data.token)
            goToFeed(history)
        }
        catch (error) {
            window.alert('Esse Email já está em uso')
        }
    }

    return <Container>
        <LoginDiv>
        <img src={logo}/>
        <h1>Cadastre-se</h1>
        <form onSubmit={cadastrar}>
            <input name='username' type='text' onChange={onChange} placeholder='Nome de usuário' required/>
            <input name='email' type='email' onChange={onChange} placeholder='E-mail' required/>
            <input name='password' type='password' onChange={onChange} placeholder='Senha' required/>
            <div>
                <Button>Cadastrar</Button>
                <Button onClick={() => goToLogin(history)}>Login</Button>
            </div>
        </form>
        </LoginDiv>
    </Container>
}