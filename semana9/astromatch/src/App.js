import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Container from './pages/Container'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <AppDiv>
      <Container />
    </AppDiv>
  );
}

export default App;