import React from "react"
import styled from "styled-components"
import axios from "axios"

const DivAddPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const DivButton = styled.div`
    padding: 25px;
`

const DivFields = styled.div`
    background-color: #00af91;
    box-shadow: 3px 3px grey;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 1.25em;

    input {
        color: #00af91;
        font-weight: bold;
        height: 30px;
        font-size: 1em;
    }

    input::placeholder{
        color: #00af9190;
        font-weight: bold;
    }
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
    font-size: 1em;

    &:hover {
        background-color: #f58634;
        color: #fff;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
    }
`

const CreateButton = styled.button`
    background-color: #ffcc29;
    margin-top: 20px;
    border: none;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    color: #00af91;
    font-weight: bold;
    width: 50%;
    padding: 5px;
    align-self: center;
    cursor: pointer;
    font-size: 0.80em;

    &:hover {
        background-color: #f58634;
        color: #fff;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
    }
`

const InputTitle = styled.p`
    color: #007965;
    font-weight: bold;
`

export default class AddUsers extends React.Component {
    state = {
        inputNameValue: "",
        inputEmailValue: ""
    }

    handleInputNameChange = (e) => {
        this.setState({ inputNameValue: e.target.value })
    }

    handleInputEmailChange = (e) => {
        this.setState({ inputEmailValue: e.target.value })
    }

    createUser = () => {
        const body = {
        name: this.state.inputNameValue,
        email: this.state.inputEmailValue,
        }

        axios
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
            headers: {
                Authorization: "paulo-oliveira-cruz",
            },
            }
        )
        .then((res) => {
            console.log("Usuário adicionado com sucesso!", res.data)
            alert("Usuário adicionado com sucesso!")
            this.setState({ inputNameValue: "" })
            this.setState({ inputEmailValue: "" })

        })
        .catch((err) => {
            console.log("Verifique seus campos de envio", err)
            alert("Verifique seus campos de envio")
        })
    }

    render() {

        return (
        <DivAddPage>
            <DivButton>
            <ChangeButton onClick={this.props.changepage}>Veja a Lista</ChangeButton>
            </DivButton>
            <DivFields>
            <InputTitle>Nome:</InputTitle>
            <input
                placeholder={"Nome"}
                value={this.state.inputNameValue}
                onChange={this.handleInputNameChange}
            />
            <InputTitle>Email:</InputTitle>
            <input
                placeholder={"E-mail"}
                value={this.state.inputEmailValue}
                onChange={this.handleInputEmailChange}
            />
            <CreateButton onClick={this.createUser}>Salvar Usuário</CreateButton>
            </DivFields>
        </DivAddPage>
        )
    }
}