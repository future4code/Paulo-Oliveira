import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import PokeCard from './components/PokeCard';

const ContainerDiv = styled.div`
  margin-top: 20px;
  text-align: center;
  
  select {
    outline: none;
  }
`

export default function App () {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value)
  };
    return (
      <ContainerDiv>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </ContainerDiv>
    );
}