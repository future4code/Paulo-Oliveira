import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import  useUnprotectedPage  from '../../hooks/useUnprotectedPage'
import { BASE_URL } from '../../constants/urls'
import { goToSignUp, goToFeed } from "../../routes/coordinator"


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
                <h1>LoginPage</h1>

                <form onSubmit={logar}>
                    <input name="email" type="email" onChange={onChange} placeholder="email" required/>
                    <input name="password" type="password" onChange={onChange} placeholder="password" required/>
                    <button>Entrar</button>
                </form>
                <button onClick={() => goToSignUp(history)}>Cadastro</button>
            </div>
}