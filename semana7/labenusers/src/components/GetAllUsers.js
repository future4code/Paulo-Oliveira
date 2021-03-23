import React from "react"
import styled from "styled-components"
import axios from "axios"

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
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

    &:hover {
        background-color: #f58634;
        color: #fff;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
    }
`

const DivList = styled.div`
    background-color: #00af91;
    box-shadow: 3px 3px grey;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 300px;
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
    width: 300px;
    border-bottom: 1px solid grey;
    padding-top: 15px;
    color: #007965;
    font-weight: bold;
`

const DeleteButton = styled.button`
    background-color: #f58634;
    color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 20px;
    padding: 1px;
    margin-bottom: 2px;
    cursor: pointer;

    &:hover {
        background-color: #ffcc29;
        border: 1px solid gray;
        color: #f58634;
    }
`

export default class GetAllUsers extends React.Component {
    state = {
        users: [],
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
            headers: {
                Authorization: "paulo-oliveira-cruz",
            },
            }
        )

        .then((res) => {
            this.setState({ users: res.data })
            console.log("Usuário cadastrado!", res)
        })
        .catch((err) => {
            console.log("Erro ao cadastrar", err.message)
        })
    }

    deleteUser = (user) => {
        if (window.confirm(`tem certeza que deseja deletar ${user.name}?`)) {
        axios
            .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
            {
                headers: {
                Authorization: "paulo-oliveira-cruz",
                },
            }
            )

            .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.getAllUsers()
            })

            .catch((err) => {
            alert("Erro ao deletar o usuário")
            console.log(err)
            })
        }
    }

    render() {
        const usersList = this.state.users.map((user) => (
        <ListLi key={user.id}>
            {user.name}
            <DeleteButton onClick={() => this.deleteUser(user)}>X</DeleteButton>
        </ListLi>
        ))

        return (
        <ListContainer>
            <DivButton>
            <ChangeButton onClick={this.props.changepage}>Voltar</ChangeButton>
            </DivButton>
            <DivList>
            {this.state.users.length > 0 ? (
                <ListUl>{usersList}</ListUl>
            ) : (
                <ListLi>Carregando...</ListLi>
            )}
            </DivList>
        </ListContainer>
        )
    }
}