import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { goToPostDetail } from '../../routes/coordinator'

const FeedPage = () => {
    const history = useHistory()

    return (
        <Fragment>
            <h1>Feed</h1>
            <button onClick={() => goToPostDetail(history)}>Detalhes</button>
        </Fragment>
    )
}

export default FeedPage