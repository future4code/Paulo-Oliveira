import React from 'react'
import './SecaoCompartilhar.css'

import instagramIcon from '../../img/instagram.png'
import facebookIcon from '../../img/facebook.png'
import twitterIcon from '../../img/twitter.png'

export class SecaoCompartilhar extends React.Component {

    render() {
        return (
            <div className={'share-container'}>
                <input type='image' value='Instagram' onClick={this.props.aoEnviar} src={instagramIcon} alt={'instagram'} />
                <input type='image' value='Facebook' onClick={this.props.aoEnviar} src={facebookIcon} alt={'facebook'} />
                <input type='image' value='Twitter' onClick={this.props.aoEnviar} src={twitterIcon} alt={'twitter'} />
            </div>
        )
    }
}