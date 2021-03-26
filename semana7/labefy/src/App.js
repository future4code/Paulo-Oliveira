import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Header from './components/Header'
import CreatePlaylist from './components/CreatePlaylist'
import AllPlaylists from './components/AllPlaylists'
import Footer from './components/Footer'

export default class App extends React.Component {
  state = {
    playlistCreated: false
  }

  createPage = () => {
    this.setState({ playlistCreated: true })
  }

  listPage = () => {
    this.setState({ playlistCreated: false })
  }

  render() {
    const renderWindow = () => {
      if (this.state.playlistCreated) {
        return <AllPlaylists changepage={this.listPage} />
      } else {
        return <CreatePlaylist changepage={this.createPage} />
      }
    }

    return (
      <div>
        <Header />
        {renderWindow()}
        <Footer />
      </div>
    )
  }
}