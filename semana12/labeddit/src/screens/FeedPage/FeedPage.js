import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styled'

import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'

import { goToLogout, goToPostDetail } from '../../routes/coordinator'
import axios from 'axios'


const FeedPage = () => {
    useProtectedPage()
    const formDefault = {title: '', text: ''}
    const [form, setForm] = useState(formDefault)
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts()
    }, [])

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }
    
    const createPost = async (event) => {
        event.preventDefault()
        const headers = {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        }

        try {
            await axios.post(`${BASE_URL}/posts`, form, headers)
            window.alert('Post criado com sucesso!')
        }

        catch (error) {
            console.log(error)
        }
    }

    const getPosts = async () => {
        const headers = {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        }

        try {
            const response = await
                axios
                    .get(`${BASE_URL}/posts`, headers)
                    setPosts(response.data.posts)
                    setLoading(false)
        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <h1>Feed</h1>
            <button onClick={() => goToLogout(history)}>Logout</button>
            <form onSubmit={createPost}>
                <input name="title" type="text" onChange={onChange} placeholder="title" required/>
                <input name="text" type="text" onChange={onChange} placeholder="text" required/>
                <button>Postar</button>
            </form>
            {!loading && posts.map((post) => {
                return <div key={post.id} onClick={() => goToPostDetail(history, post.id)}>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>
                        <p>{post.username}</p>
                        <p>Votos: {post.votesCount} </p>
                        <p>Comentários: {post.commentsCount} </p><hr/>
                    </div>
            })}
        </Container>
    )
}

export default FeedPage