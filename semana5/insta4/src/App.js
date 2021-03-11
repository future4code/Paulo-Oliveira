import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import profileIcon from './img/profile.png'
import labenuIcon from './img/labenu.png'
import astrodevIcon from './img/astrodev.png'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'devpaulo'}
          fotoUsuario={ profileIcon }
          fotoPost={'https://picsum.photos/200/150?grayscale'}
        />

        <Post
          nomeUsuario={'labenu'}
          fotoUsuario={ labenuIcon }
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'astrodev'}
          fotoUsuario={ astrodevIcon }
          fotoPost={'https://picsum.photos/200/150?blur=2'}
        />
      </div>
    );
  }
}

export default App;
