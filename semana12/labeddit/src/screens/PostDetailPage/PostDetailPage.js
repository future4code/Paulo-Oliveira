import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import { goToFeed, goToLogout } from "../../routes/coordinator"


export default function PostPage() {

    useProtectedPage()

    const formDefault = {text: ''}

    const history = useHistory()
    const postId = useParams().id
    const [post, setPost] = useState({})
    const [form, setForm] = useState(formDefault)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getPostDetails()
    }, [])

    const getPostDetails = async () => {

        const headers = {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }

        try {
            const response = await axios.get(`${BASE_URL}/posts/${postId}`, headers)
            setPost(response.data.post)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const createComment = async (event) => {
        event.preventDefault()

        const headers = {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        }

        try {
            await axios.post(`${BASE_URL}/posts/${postId}/comment`, form, headers)
            window.alert('Comentário feito com sucesso!')
            getPostDetails()
        }

        catch(error) {
            console.log(error)
        }
    } 

    return <div>
        <h1>PostPage</h1>
        <button onClick={() => goToFeed(history)}>Feed</button>
        <button onClick={() => goToLogout(history)}>Logout</button>
        {!loading && <h1>{post.title}</h1>}
        {!loading && <p>{post.text}</p>}
        <form onSubmit={createComment}>
            <input name="text" type="text" onChange={onChange} placeholder="text" required/>
            <button>Comentar</button>
        </form>
        {!loading && post.comments.map((comment) => {
            return <div key={comment.id}>
                <h1>{comment.username}: {comment.text}</h1>
                <p>{comment.votesCount}</p><hr/>
                </div>
        })}
    </div>
}