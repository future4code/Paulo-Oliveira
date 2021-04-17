import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FireIcon from './../assets/fire.svg'
import MatchesIcon from './../assets/comments.svg'
import UserIcon from './../assets/user.svg'
import TimesIcon from './../assets/times.svg'
import StarIcon from './../assets/star.svg'
import HeartIcon from './../assets/heart.svg'

import AstromatchLogo from './../assets/astromatch.png'

const ContainerDiv = styled.div`
    background-color: #fff;
    width: 60vh;
    height: 100vh;
	display: flex;
	flex-direction: column;
`

const Navbar = styled.div`
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

const MainDiv = styled.div`
    position: relative;
    margin: 0 auto;
    width: 55vh;
    height: 70vh;
    border-radius: 10px;

    img {
        width: 40vh;
    }
`

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;

    p {
        width: 80%;
        position: absolute;
        top: 290px;
        left: 15px;
        color: #fff;
        font-size: 25px;
        font-weight: bold;
        text-shadow: 2px 2px 5px black, 3px 3px 5px black, 5px 5px 5px black;
    }

    span {
        position: absolute;
        margin-top: 360px;
        left: 15px;
        width: 90%;
        color: #fff;
        font-size: 20px;
        text-shadow: 2px 2px 5px black, 3px 3px 5px black, 5px 5px 5px black;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        border-radius: 5px;
    }
`

const FooterDiv = styled.div`
    background-color: #fff;
    flex: auto;
	display: flex;
    justify-content: center;
	align-items: center;
`

const IconDiv = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);

    :nth-child(2) {
        height: 48px;
        width: 48px;
        margin: 0 1rem;
        color: #2db1ff;

        img {
            width: 1.5rem;
        }

    }

    a {
        cursor: pointer;
    }

    img {
        width: 2rem;

        :hover {
            width: 2.5rem;
            opacity: 0.8;
        }
    }
`

const Home = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose(props.profile)
    }, [props.profile])

    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paulo/person')
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    }

    const profiles = () => {
        return(
            <ProfileDiv>
                <img src={profile.photo} alt={profile.name} />
                <p>{profile.name}, {profile.age}</p>
                <span>{profile.bio}</span>
            </ProfileDiv>
        )
    }

    const ChoosePerson = (choices) => {
        const body = {
            id: profile.id,
            choice: choices
        }
        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paulo/choose-person', body)
            .then((res) => getProfileToChoose())
            .catch((err) => console.log(err))
    }


        return(
            <ContainerDiv>
                <Navbar>
                    <a><img src={ FireIcon } /></a>
                    <img src={ AstromatchLogo } />
                    <a onClick={() => props.changePages() }><img src={ MatchesIcon } /></a>
                </Navbar>
                <MainDiv>
                    { (profile && Object.keys(profile).length !== 0) && profiles() }
                </MainDiv>
                <FooterDiv>
                    <IconDiv>
                        <a onClick={() => ChoosePerson(false)} ><img src={ TimesIcon } /></a>
                    </IconDiv>
                    <IconDiv>
                        <a><img src={ StarIcon } /></a>
                    </IconDiv>
                    <IconDiv>
                        <a onClick={() => ChoosePerson(true)} ><img src={ HeartIcon } /></a>
                    </IconDiv>
                </FooterDiv>
            </ContainerDiv>

        )
    }

export default Home