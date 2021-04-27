import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import  useUnprotectedPage  from '../../hooks/useUnprotectedPage'
import { BASE_URL } from '../../constants/urls'
import { goToFeed } from "../../routes/coordinator"
import Button from "../../constants/Button"


export default function LoginPage() {

    useUnprotectedPage()

    const formDefault = {email: "", password: ""}

    const history = useHistory()
    const [form, setForm] = useState(formDefault)

    const onChange = (event) => {
       const {name, value} = event.target
       setForm({...form, [name]: value})
    }

    const logar = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${BASE_URL}/login`, form)
            window.localStorage.setItem("token", response.data.token)
            goToFeed(history)
        }
        catch (error) {
            window.alert("Usuário e/ou Senha inválido(s)")
        }
    }

    return <div>
                <form onSubmit={logar}>
                    <h1>Login</h1>
                    <input name="email" type="email" onChange={onChange} placeholder="E-mail" required/>
                    <input name="password" type="password" onChange={onChange} placeholder="Senha" required/>
                    <Button>Entrar</Button>
                </form>
            </div>
}