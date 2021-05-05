import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import arrowUp from '../../assets/arrow_up.svg'
import arrowUpRed from '../../assets/arrow_up_red.svg'
import arrowDown from '../../assets/arrow_down.svg'
import arrowDownBlue from '../../assets/arrow_down_blue.svg'

import useProtectedPage from '../../hooks/useProtectedPage'
import Button from '../../constants/Button'
import { BASE_URL } from '../../constants/urls'

import { Container, LikeDiv, PostContainer, ListPost, CreateComment, LikeComment } from './styled'
import Header from '../../components/Header/Header'

export default function PostDetailPage() {

    useProtectedPage()

    const formDefault = {text: ''}

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
                Authorization: window.localStorage.getItem('token')
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
            setForm(formDefault)
        }

        catch(error) {
            console.log(error)
        }
    }

    const votePost = async (postId, direction) => {

        const headers = {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        }

        try {
            await axios.put(`${BASE_URL}/posts/${postId}/vote`, {direction}, headers)
            getPostDetails()
        }
        catch (error) {
            console.log(error)
        }
    }

    const voteComment = async (commentId, direction) => {

        const headers = {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        }

        try {
            await axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, {direction}, headers)
            getPostDetails()
        }
        catch (error) {
            console.log(error)
        }
    }

    return <Container>
        <Header/>
        <h1>Detalhes do Post</h1>
        {loading && <h1>Carregando...</h1>}
        <ListPost>
            {!loading &&  
                <LikeDiv>
                <div>
                    {post.userVoteDirection === 1 ? <img src={arrowUpRed} onClick={() => votePost(post.id, 0)}/> : <img src={arrowUp} onClick={() => votePost(post.id, 1)}/>}
                    <p>{post.votesCount} </p>
                    {post.userVoteDirection === -1 ? <img src={arrowDownBlue} onClick={() => votePost(post.id, 0)}/> : <img src={arrowDown} onClick={() => votePost(post.id, -1)}/>}
                </div>
        </LikeDiv>}
        <PostContainer>
            {!loading && <h1>{post.title}</h1>}
            {!loading && <p><span>{post.text}</span></p>}
            {!loading && <p>{post.commentsCount} comentários</p>}
            {!loading && <CreateComment onSubmit={createComment}>
                            <textarea name='text' type='text' value={form.text} onChange={onChange} placeholder='Escreva seu comentário' required/>
                            <Button>Comentar</Button>
                        </CreateComment>}
            {!loading && post.comments.map((comment) => {
                return <div key={comment.id}>
                            <h3>{comment.username}: </h3>
                            <p>{comment.text}</p>
                            <LikeComment>
                                {comment.userVoteDirection === 1 ? <img src={arrowUpRed} onClick={() => voteComment(comment.id, 0)}/> : <img src={arrowUp} onClick={() => voteComment(comment.id, 1)}/>}
                                    <p>{comment.votesCount}</p>
                                {comment.userVoteDirection === -1 ? <img src={arrowDownBlue} onClick={() => voteComment(comment.id, 0)}/> : <img src={arrowDown} onClick={() => voteComment(comment.id, -1)}/>}
                            </LikeComment>
                        </div>
            })}
        </PostContainer>
        </ListPost>
    </Container>
}