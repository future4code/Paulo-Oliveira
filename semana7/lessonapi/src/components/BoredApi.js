import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #dbe2ef;

    button {
      background-color: #f9f7f7;
      color: #3f72af;
      font-weight: bold;
      border: none;
      border-bottom: 3px solid #3f72af;
      width: 100px;
      height: 30px;
      cursor: pointer;

      :hover {
        background-color: #3f72af;
        border-bottom: 3px solid #f9f7f7;
        color: #f9f7f7;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      width: 600px;
      margin: 20px;
      text-align: center;
      padding: 30px;
      border: 5px solid #3f72af;
      border-radius: 8px;

      p {
        margin:5px;
        font-size: 1.20rem;
      }

      span {
        font-weight: bold;
      }
    }
`

export default class BoredApi extends React.Component {
  state = {
    activity: {}
  }

  getActivity = async () => {
    try {
      const response = await axios.get(
        'https://www.boredapi.com/api/activity/'
      )
      console.log(response.data)
      this.setState({ activity: response.data })
    } catch (error) {
      console.log(error.response.data)
    }
  }

  render() {
    const { activity, type, price, participants } = this.state.activity
    return (
      <Container>
        <h1>Are you bored?</h1>
        <button onClick={this.getActivity}>Click here</button>
        <div>
          <p><span>Activity:</span> {activity}</p>
          <p><span>Participants:</span> {participants}</p>
          <p><span>Price: </span>US$ {price}</p>
          <p><span>Type:</span> {type}</p>
        </div>
      </Container>
    )
  }

}