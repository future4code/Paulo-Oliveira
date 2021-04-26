import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, ListPost, TextDiv, LikeDiv, CreateComent, ListComent, ComentDiv, LikeComentDiv } from './styled'

import { goToFeed } from '../../routes/coordinator'

import ArrowUp from '../../assets/arrow_up.svg'
import ArrowDown from '../../assets/arrow_down.svg'

const PosteDetailPage = () => {
    const history = useHistory()

    return (
        <Container>
            <h1>Post Detail</h1>
            <button onClick={() => goToFeed(history)}>Voltar</button>
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
            <CreateComent>
                <div>
                    <h2>Escreva seu comentário</h2>
                </div>
                <button>Comentar</button>
            </CreateComent>
            <ListComent>
                <h3>Nome de usuário</h3>
                <ComentDiv>
                    <p>texto do comentário</p>
                </ComentDiv>
                <LikeComentDiv>
                    <div>
                        <img src={ ArrowUp } alt='up'/>
                        <p> 0 </p>
                        <img src={ ArrowDown } alt='down'/>
                    </div>
                </LikeComentDiv>
            </ListComent>
        </Container>
    )
}

export default PosteDetailPage