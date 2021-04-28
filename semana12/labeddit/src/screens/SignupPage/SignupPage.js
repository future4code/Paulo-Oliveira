import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import Button from '../../constants/Button'
import { BASE_URL } from "../../constants/urls"
import { goToLogin, goToFeed } from "../../routes/coordinator"


export default function CadastroPage() {

    useUnprotectedPage()

    const formDefault = {email: "", password: "", username: ""}

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
            window.localStorage.setItem("token", response.data.token)
            goToFeed(history)
        }
        catch (error) {
            window.alert("Esse Email já está em uso")
        }
    }

    return <div>
        <h1>CadastroPage</h1>
        <Button onClick={() => goToLogin(history)}>Login</Button>

        <form onSubmit={cadastrar}>
            <input name="username" type="text" onChange={onChange} placeholder="username" required/>
            <input name="email" type="email" onChange={onChange} placeholder="email" required/>
            <input name="password" type="password" onChange={onChange} placeholder="password" required/>
            <Button>Cadastrar</Button>
        </form>
    </div>
}