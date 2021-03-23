import React from "react"
import styled from "styled-components"
import axios from 'axios'
import AddUsers from "./components/AddUsers"
import GetAllUsers from "./components/GetAllUsers"

export default class App extends React.Component {
  state = {
    usersCreated: false,
  }

  createPage = () => {
    this.setState({ usersCreated: true })
  }

  listPage = () => {
    this.setState({ usersCreated: false })
  }

  render() {
    const renderWindow = () => {
      if (this.state.usersCreated) {
        return <GetAllUsers changepage={this.listPage} />
      } else {
        return <AddUsers changepage={this.createPage} />
      }

    }
    return <div className="App">{renderWindow()}</div>
  }
}