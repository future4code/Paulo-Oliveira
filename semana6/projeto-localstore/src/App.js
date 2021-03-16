import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fb743e;
  border-radius: 10px;
  background-color: #383e56;
  width: 600px;
  margin: 0 auto;
  color: #c5d7bd;
  box-shadow: 3px 3px #fb743e;
  h1{
    color: #9fb8ad;
  }
  input{
    border-top: 5px solid #fb743e;
    border-left: 5px solid #fb743e;
    border-radius: 5px;
  }
  button{
    border: none;
    border-radius: 5px;
    font-weight: bold;
    background-color: #fb743e;
    color: #fff;
    box-shadow: 1px 1px #c5d7bd;
    &:hover{
      background-color: #9fb8ad;
      color: #383e56;
      box-shadow: none;
    }
  }
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
    id: Date.now(), 
    texto: 'Estudar',
    completa: false
    },
    {
      id: Date.now(), 
      texto: 'ir no mercado',
      completa: true 
    }
  ],
    inputValue: '',
    filtro: ''
  }

componentDidUpdate() {
  localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
};

componentDidMount() {
  if(localStorage.getItem('tarefas')){
    this.setState({tarefas: JSON.parse(localStorage.getItem('tarefas'))})
  }
};

onChangeInput = (event) => {
  this.setState({inputValue: event.target.value})
}

criaTarefa = () => {
  const novaTarefa = {
    id: Date.now(),
    texto: this.state.inputValue,
    completa: false
  }
  const novaLista = [...this.state.tarefas, novaTarefa]
  this.setState({tarefas: novaLista})
}

selectTarefa = (id) => {
  const novaListaDeTarefas = this.state.tarefas.filter((tarefa) =>{
    if (tarefa.id === id){
      tarefa.completa = !tarefa.completa;
    }
    return tarefa
  })
  this.setState({tarefas: novaListaDeTarefas})
}

onChangeFilter = (event) => {
  this.setState({filtro: event.target.value})
}

render() {
  const listaFiltrada = this.state.tarefas.filter(tarefa => {
    switch (this.state.filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  })

  return (
    <AppContainer>
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={this.state.inputValue} onChange={this.onChangeInput}/>
        <button onClick={this.criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br/>

      <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filter} onChange={this.onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => this.selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </AppContainer>
  )
}
}

export default App
