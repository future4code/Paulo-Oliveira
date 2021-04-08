import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Home from './pages/Home'
import Matches from './pages/Matches'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  const [pages, setpages] = useState(true)

  const changePages = () => {
    setpages(!pages)
  }

  return (
    <AppDiv>
      {pages ?(
        <Home changePages={changePages}/>
      ) : (
        <Matches changePages={changePages}/>
      )
    }
    </AppDiv>
  );
}

export default App;