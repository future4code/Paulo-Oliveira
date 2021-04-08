import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'

const ContainerDiv = styled.div`
  backdrop-filter: blur(10px);
  margin: 20px auto;
  width: 50vh;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 1px 1px 5px white;
  

  p {
    font-size: 1.25rem;
    color: white;
    text-shadow: 2px 2px blue;
  }
`

export default function PokeCard(props) {
  const [ pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon])

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <ContainerDiv>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </ContainerDiv>
    );
  }

