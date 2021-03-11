import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import profileIcon from './img/profile.png'
import labenuIcon from './img/labenu.png'
import astrobotIcon from './img/astrobot.png'

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
    ]
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
        {listaPost}
      </div>
    );
  }
}

export default App;
