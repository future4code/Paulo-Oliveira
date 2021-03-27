import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
`

const DivButton = styled.div`
    padding: 25px;
`

const DivFields = styled.div`
    backdrop-filter: blur(6px);
    box-shadow: 3px 3px grey;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 350px;
    padding: 20px;
    text-align: center;
    color: #fff;

    h2 {
        margin: 30px;
        text-shadow: 2px 2px black;
    }

    label {
        text-shadow: 2px 2px black;
    }

    input {
        color: #00af91;
        font-weight: bold;
        width: 300px;
        height: 30px;
        font-size: 1em;
        margin: 15px auto;
    }

    input::placeholder{
        font-weight: bold;
    }
`

const ChangeButton = styled.button`
    background-color: #8be3e1;
    border: none;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    font-weight: bold;
    width: 130px;
    padding: 5px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        background-color: #f9f7f7;
        color: #112d4e;
        border-bottom: 2px solid #8be3e1;
        border-right: 2px solid #8be3e1;
    }
`

const CreateButton = styled.button`
    background-color: #8be3e1;
    margin-top: 20px;
    border: none;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    font-weight: bold;
    width: 50%;
    padding: 5px;
    align-self: center;
    cursor: pointer;
    font-size: 0.80em;

    &:hover {
        background-color: #f9f7f7;
        color: #112d4e;
        border-bottom: 2px solid #8be3e1;
        border-right: 2px solid #8be3e1;
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
                <DivButton>
                    <ChangeButton onClick={this.props.changepage}>VER PLAYLIST</ChangeButton>
                </DivButton>
                <DivFields>
                    <h2>CRIAR PLAYLIST</h2>
                    <label>NOME DA PLAYLIST</label>
                    <input
                        placeholder={'Nova Playlist'}
                        value={this.state.inputPlaylist}
                        onChange={this.handleInputPlaylist}
                    />
                    <CreateButton onClick={this.addPlaylist}>ENVIAR</CreateButton>
                </DivFields>
                </CreateContainer>
            
        )
    }
}