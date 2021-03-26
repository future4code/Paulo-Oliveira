import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 1.25em;
`

const DivButton = styled.div`
    padding: 25px;
`

const ChangeButton = styled.button`
    background-color: #ffcc29;
    border: none;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    color: #00af91;
    font-weight: bold;
    width: 130px;
    padding: 5px;
    cursor: pointer;
    font-size: 0.80em;
`

const DivList = styled.div`
    background-color: #00af91;
    box-shadow: 3px 3px grey;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

const ListUl = styled.ul`
    margin: 0;
    padding: 0;
`

const ListLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 400px;
    border-bottom: 1px solid grey;
    padding-top: 15px;
    color: #007965;
    font-weight: bold;
`

const DeleteButton = styled.button`
    background-color: red;
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
            <ListLi key={playlist.id}>
            {playlist.name}
            <DeleteButton onClick={() => this.deletePlaylist(playlist)}>X</DeleteButton>
            </ListLi>
        ))

        return(
            <ListContainer>
                <DivButton>
                <ChangeButton onClick={this.props.changepage}>ADICIONAR PLAYLIST</ChangeButton>
                </DivButton>
                <DivList>
                    {this.state.playlists.length > 0 ? (
                        <ListUl>{listPlaylist}</ListUl>
                    ) : (
                        <ListLi>Carregando...</ListLi>
                    )}
                </DivList>
            </ListContainer>
        )
    }
}