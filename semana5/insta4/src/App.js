import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import profileIcon from './img/profile.png'
import labenuIcon from './img/labenu.png'
import astrobotIcon from './img/astrobot.png'

import styled from 'styled-components'

const InputPost = styled.input`
  margin: 5px;
`

const ButtonAdicionar = styled.button`
  background-color: transparent;
  margin: 10px;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'devpaulo',
        fotoUsuario: profileIcon,
        fotoPost: 'https://picsum.photos/200/150?grayscale'
      },
      {
        nomeUsuario: 'labenu',
        fotoUsuario: labenuIcon,
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'astrobot',
        fotoUsuario: astrobotIcon,
        fotoPost: 'https://picsum.photos/200/150?blur=2'
      }
    ],

    valorInputNome: '',
    valorInputUsuario: '',
    valorInputPost: ''
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputUsuario,
      fotoPost: this.state.valorInputPost
    }

    const novosPosts = [...this.state.post, novoPost]

    this.setState({ post: novosPosts })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value })
  }

  render() {
    const listaPost = this.state.post.map((post) => {
      return (
        <Post key={post.nomeUsuario}
          nomeUsuario={ post.nomeUsuario }
          fotoUsuario={ post.fotoUsuario }
          fotoPost={ post.fotoPost }
        />
      )
    })

    return (
      <div className={'app-container'}>
        <InputPost 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={'Nome de Usuário'}
        />

        <InputPost
          value={this.valorInputUsuario}
          onChange={this.valorInputUsuario}
          placeholder={'Foto de Perfil'}
        />

        <InputPost
          value={this.valorInputPost}
          onChange={this.valorInputPost}
          placeholder={'Foto que deseja postar'}
        />

        <ButtonAdicionar onClick={this.adicionarPost}>Postar</ButtonAdicionar>

        {listaPost}
      </div>
    );
  }
}

export default App;
