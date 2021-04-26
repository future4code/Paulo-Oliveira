import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, CreatePost, ListPost, TextDiv, LikeDiv } from './styled'

import { goToLogin, goToPostDetail } from '../../routes/coordinator'

import ArrowUp from '../../assets/arrow_up.svg'
import ArrowDown from '../../assets/arrow_down.svg'

const FeedPage = () => {
    const history = useHistory()

    return (
        <Container>
            <h1>Feed</h1>
            <button onClick={() => goToLogin(history)}>Logout</button>
            <CreatePost>
                <div>
                    <h2>Escreva seu post</h2>
                </div>
                <button>Postar</button>
            </CreatePost>
            <ListPost>
                <h3>Nome de usuário</h3>
                <TextDiv>
                    <p>texto do post</p>
                </TextDiv>
                <LikeDiv>
                    <div>
                        <img src={ ArrowUp } alt='up'/>
                        <p> 0 </p>
                        <img src={ ArrowDown } alt='down'/>
                    </div>
                    <p>0 comentarios</p>
                </LikeDiv>
            </ListPost>
            <button onClick={() => goToPostDetail(history)}>Detalhes</button>
        </Container>
    )
}

export default FeedPage