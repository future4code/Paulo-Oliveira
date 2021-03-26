import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    width: 400px;
    height: 350px;
    text-align: center;
`

export default class AllPlaylists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                {
                    headers: {
                        Authorization: 'paulo-oliveira-cruz'
                    },
                }
            )
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log('Playlist cadastrada!', res)
            })
            .catch((err) => {
                console.log('Erro ao cadastrar', err.message)
            })
    }

    deletePlaylist = (playlist) => {
        if (window.confirm(`Tem certeza que deseja deletar ${playlist.name}`)) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
                    {
                        headers: {
                            Authorization: 'paulo-oliveira-cruz',
                        },
                    }
                )
                .then((res) => {
                    alert('Playlist deletado com sucesso!')
                    this.getAllPlaylists()
                })
                .catch((err) => {
                    alert('Erro ao deletar a playlist')
                    console.log(err)
                })
        }
    }

    render() {
        const listPlaylist = this.state.playlists.map((playlist) => (
            <li key={playlist.id}>
            {playlist.name}
            <button onClick={() => this.deletePlaylist(playlist)}>X</button>
            </li>
        ))

        return(
            <ListContainer>
                <button onClick={this.props.changepage}>VER PLAYLIST</button>
                <div>
                    {this.state.playlists.length > 0 ? (
                        <ul>{listPlaylist}</ul>
                    ) : (
                        <li>Carregando...</li>
                    )}
                </div>
            </ListContainer>
        )
    }
}