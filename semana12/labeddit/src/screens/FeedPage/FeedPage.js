import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Container, CreatePost, LikeDiv, ListPost, SubtitleDiv, PostContainer } from './styled'

import arrowUp from '../../assets/arrow_up.svg'
import arrowUpRed from '../../assets/arrow_up_red.svg'

import arrowDown from '../../assets/arrow_down.svg'
import arrowDownBlue from '../../assets/arrow_down_blue.svg'

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
            getPosts()
            setForm(formDefault)
            history.push('/')
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

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const votePost = async (postId, direction) => {

        const headers = {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }

        try {
            await axios.put(`${BASE_URL}/posts/${postId}/vote`, {direction}, headers)
            getPosts()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Header/>
            <CreatePost>
                <h2>Nova Postagem</h2>
                <form onSubmit={createPost}>
                    <input name="title" type="text" onChange={onChange} placeholder="Título" required/>
                    <textarea name="text" type="text" onChange={onChange} placeholder="Texto" required/>
                    <Button>Postar</Button>
                </form>
            </CreatePost>
            {loading && <h1>Carregando...</h1>}
            {!loading && posts.map((post) => {
                return <ListPost key={post.id}>
                        <LikeDiv>
                            <div>
                                {post.userVoteDirection === 1 ? <img src={arrowUpRed} onClick={() => votePost(post.id, 0)}/> : <img src={arrowUp} onClick={() => votePost(post.id, 1)}/>}
                                <p>{post.votesCount} </p>
                                {post.userVoteDirection === -1 ? <img src={arrowDownBlue} onClick={() => votePost(post.id, 0)}/> : <img src={arrowDown} onClick={() => votePost(post.id, -1)}/>}
                            </div>
                        </LikeDiv>
                        <PostContainer onClick={() => goToPostDetail(history, post.id)}>
                            <SubtitleDiv>
                                <p>Publicado por <b>{post.username}</b>,</p>
                                <p>Dia {post.createdAt && format(parseISO(new Date(post && post.createdAt).toISOString().slice(0,10)), 'd MMM yyyy', {
                                    locale: ptBR,
                                    })}</p>
                            </SubtitleDiv>
                            <h3>{post.title}</h3>
                            <p><span>{post.text}</span></p>
                            <p>{post.commentsCount} comentários</p>
                        </PostContainer>
                    </ListPost>
            })}
        </Container>
    )
}

export default FeedPage