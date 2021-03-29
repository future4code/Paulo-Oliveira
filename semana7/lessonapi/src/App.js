import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BoredApi from './components/BoredApi'

export default class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        <BoredApi />
      </div>
    )
  }
}