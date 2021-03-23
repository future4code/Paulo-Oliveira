import React from 'react';
import Post from './components/Post/Post';

import profileIcon from './img/profile.png'
import labenuIcon from './img/labenu.png'
import astrobotIcon from './img/astrobot.png'

import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

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

    this.setState({ valorInputNome: '' })
    this.setState({ valorInputUsuario: '' })
    this.setState({ valorInputPost:'' })
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
      <AppContainer>
        <InputPost 
          defaultValue={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={'Nome de Usuário'}
        />

        <InputPost
          defaultValue={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={'Foto de Perfil'}
        />

        <InputPost
          defaultValue={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={'Foto que deseja postar'}
        />

        <ButtonAdicionar onClick={this.adicionarPost}>Postar</ButtonAdicionar>

        {listaPost}
      </AppContainer>
    );
  }
}

export default App;
