//Dependencies
import React, { Component } from 'react'


//Components
import Header from '../Header'
import InputFile from '../InputFile'

class Aplication extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }   

    render() {
        const { firstName, scope } = this.props.userInfo;
        return (
            <React.Fragment>
                <Header firstName={firstName}/>
                <InputFile scope={scope} />                
            </React.Fragment>
        )
    }
}

export default Aplication;
