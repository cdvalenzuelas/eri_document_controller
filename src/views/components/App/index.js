//Dependencies
import React, { Component } from 'react'
import '../../components/components.css'

//Components
import LogIn from '../LogIn'
import Aplication from '../Aplication'

class App extends Component {

    constructor () {
        super();
        this.state = {
            userInfo : {},
            active : false
        }
    }

    activeChange = (result) => {
        this.setState({
            userInfo: result,
            active : true
        })
    }

    render() {   
        const { active, userInfo } = this.state;
        console.log(this.state) 
        return (
            <div id="App" className='AppStyle'>
                { !active && <LogIn change={this.stateChange} activeChange={this.activeChange} /> }        
                { active && <Aplication userInfo={userInfo} /> }
            </div>
        )
    }
}

export default App

