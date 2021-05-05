import React from 'react'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/labeddit1.png'
import { Container } from './styled'
import { goToLogout, goToFeed } from '../../routes/coordinator'
import Button from '../../constants/Button'

const Header = () => {
    const history = useHistory()

    return (
        <Container>
            <img src={ logo } alt='logo'/>
            <div>
                <Button onClick={() => goToFeed(history)}>Feed</Button>
                <Button onClick={() => goToLogout(history)}>Logout</Button>
            </div>
        </Container>
    )
}

export default Header