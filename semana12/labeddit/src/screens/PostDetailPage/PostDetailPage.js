import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import { goToFeed } from '../../routes/coordinator'

const PosteDetailPage = () => {
    const history = useHistory()

    return (
        <Fragment>
            <h1>Post Detail</h1>
            <button onClick={() => goToFeed(history)}>Voltar</button>
        </Fragment>
    )
}

export default PosteDetailPage