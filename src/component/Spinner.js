import React, { Component } from 'react'
import loadingwhite from './loadingwhite.gif'
import loadingblack from './loadingblack.gif'

export default class Spinner extends Component {
    render() {
        return (
            <>
                {this.props.theme === 'light' && <div className={`text-center`}>
                    <img src={loadingblack} alt='loading'></img>
                    <p className='my-3'>Loading...</p>
                </div>}
                {this.props.theme === 'dark' && < div className={`text-center`}>
                    <img src={loadingwhite} alt='loading'></img>
                    <p className='my-3 text-white'>Loading...</p>
                </div>}
            </>
        )
    }
}
