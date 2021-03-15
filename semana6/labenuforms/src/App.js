import React from 'react'
import styled from 'styled-components'

import Etapa1 from './components/Etapa1.js'
import Etapa2 from './components/Etapa2.js'
import Etapa3 from './components/Etapa3.js'
import Final from './components/Final.js'

const ContainerForm = styled.div`
  text-align: center;
  font-size: 1.25rem;
`

const ButtonForm = styled.button`
  width: 185px;
  height: 30px;
  background-color: #025955;
  color: #fde8cd;
  border: 1px solid #433520;
  margin: 10px;
  border-radius: 8px;
  &:hover{
    background-color: #fde8cd;
    color: #00917c;
    border: 1px solid #00917c;
  }
`

class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }
  }

  irParaProximaEtapa = () => [
    this.setState({ etapa: this.state.etapa + 1 })
  ]

  render() {
    return (
      <ContainerForm>
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <ButtonForm on onClick={this.irParaProximaEtapa}>Próxima etapa</ButtonForm>
          )}
        
      </ContainerForm>
    );
  }
}

export default App;
