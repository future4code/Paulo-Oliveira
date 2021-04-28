import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, CreatePost, LikeDiv, ListPost, PostContainer } from './styled'

import arrowUp from '../../assets/arrow_up.svg'
import arrowDown from '../../assets/arrow_down.svg'

import { goToPostDetail } from '../../routes/coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import Button from '../../constants/Button'
import Header from '../../components/Header/Header'

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
            <Header/>
            <CreatePost>
                <h2>Criar post</h2>
                <form onSubmit={createPost}>
                    <input name="title" type="text" onChange={onChange} placeholder="Título" required/>
                    <textarea name="text" type="text" onChange={onChange} placeholder="Texto" required/>
                    <Button>Postar</Button>
                </form>
            </CreatePost>
            {!loading && posts.map((post) => {
                return <ListPost key={post.id}>
                        <LikeDiv>
                            <div>
                                <img src={ arrowUp } alt='voto' />
                                <p>{post.votesCount} </p>
                                <img src={ arrowDown } alt='voto' />
                            </div>
                        </LikeDiv>
                        <PostContainer onClick={() => goToPostDetail(history, post.id)}>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
                            <p><b>{post.username}</b></p>
                            <p>{post.commentsCount} comentários</p>
                        </PostContainer>
                    </ListPost>
            })}
        </Container>
    )
}

export default FeedPage