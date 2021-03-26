import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CreateContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    width: 400px;
    height: 420px;
    text-align: center;

    h2 {
        margin-top: 60px;
    }

    label {
        margin-top: 40px;
    }

    input {
        width: 200px;
        margin: 10px auto;
    }

    button {
        width: 80px;
        margin: 0 auto;
        margin-top: 40px;
    }
`

export default class CreatePlaylist extends React.Component {
    state = {
        inputPlaylist: ''
    }

    handleInputPlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }

    addPlaylist = () => {
        const body = {
            name: this.state.inputPlaylist
        }

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                body,
                {
                    headers: {
                        Authorization: 'paulo-oliveira-cruz'
                    },
                }
            )
            .then((res) => {
                console.log('Playlist adicionada com sucesso!',res.data)
                alert('Playlist adicionada com sucesso!')
                this.setState({ inputPlaylist: '' })
            })
            .catch((err) => {
                console.log('Verifique o campo de envio', err)
                alert('Verifique o campo de envio')
            })
    }

    render() {

        return(
            <CreateContainer>
                <h2>CRIAR PLAYLIST</h2>
                <label>NOME DA PLAYLIST</label>
                <input
                    placeholder={'Nova Playlist'}
                    value={this.state.inputPlaylist}
                    onChange={this.handleInputPlaylist}
                />
                <button onClick={this.addPlaylist}>ENVIAR</button>
                <button onClick={this.props.changepage}>VER PLAYLIST</button>
            </CreateContainer>
        )
    }
}