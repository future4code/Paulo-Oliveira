import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FireIcon from './../assets/fire.svg'
import MatchesIcon from './../assets/comments.svg'
import UserIcon from './../assets/user.svg'
import DeleteIcon from './../assets/delete.svg'

import AstromatchLogo from './../assets/astromatch.png'

const Container = styled.div`
    background-color: #fff;
    width: 60vh;
	display: flex;
	flex-direction: column;
`

const Header = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin-top: 8px;
    margin-bottom: 18px;

    img:nth-child(2) {
        width: 200px;
        height: 60px;

        :hover {
            width: 200px;
            height: 60px;
            opacity: 1;
        }
    }

    a {
        margin: 0 30px;
        cursor: pointer;
        height: 30px;
    }
    
    img {
        width: 1.8rem;

        :hover {
            opacity: 0.8;
        }
    }
`

const Div = styled.div`
    width: 80%;
    min-height: 63vh;
    max-height: 300vh;
`

const List = styled.li`
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 30px;
    padding: 10px; 
    border: 1px solid lightgray;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-top: 10px;
        object-fit: cover;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }
`

const FooterDiv = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    a {
        margin: 50px;
        cursor: pointer;
        height: 30px;
    }

    img {
        width: 3rem;

        :hover {
            width: 4rem;
            opacity: 0.8;
        }
    }
`


const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(props.matches);
  }, [props.matches]);

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paulo/matches")
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err));
  };

  const clear = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paulo/clear")
      .then(() => getMatches())
      .catch((err) => console.log(err));
  };

  const seeMatches = matches.map((person) => {
    return (
      <List>
        <img src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </List>
    );
  });

  return (
      <div>
        <Container>
            <Header>
                <a onClick={() => props.changePages() }><img src={ FireIcon } /></a>
                <img src={ AstromatchLogo } />
                <a><img src={ MatchesIcon } /></a>
            </Header>
            <Div>
                { seeMatches }
            </Div>
            </Container>
            <FooterDiv>
                <a onClick={ clear }><img src={ DeleteIcon }/></a>
            </FooterDiv>
    </div>
  );
};

export default Matches;