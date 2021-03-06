import React from 'react' 
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import mark from '../../img/mark.png'
import markBlack from '../../img/mark-black.png'
import {IconeMarcador} from '../IconeMarcador/IconeMarcador'
import shareIcon from '../../img/share.png'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

import styled from 'styled-components'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhar: false
  }

  onClickCurtida = () => {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })

      if (this.state.numeroCurtidas >= 1) {
        this.setState({
          curtido: false,
          numeroCurtidas: this.state.numeroCurtidas - 1
        })
      }
  }

  onClickMarcado = () => {
    this.setState({
      marcado: true
    })
  }

  onClickComentario = () => {
    if(this.state.compartilhar) {
      this.setState({
        compartilhar: false
      })
    }
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    if(this.state.comentando) {
      this.setState({
        comentando: false
      })
    }
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoCompartilhar = (event) => {
    this.setState({
      compartilhar: false
    })
    console.log('Post compartilhado no ' + event.target.value + ' com a mensagem: "Olha essa foto linda!"')
  }


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcado

    if(this.state.marcado) {
      iconeMarcado = markBlack

    } else {
      iconeMarcado = mark

    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar) {
      componenteCompartilhar = (
        <SecaoCompartilhar aoEnviar={this.aoCompartilhar} />
      )
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
      
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        
        <IconeMarcador 
          icone={shareIcon}
          onClickIcone={this.onClickCompartilhar}
        />
        
        <IconeMarcador 
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcado}
        />
        
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post