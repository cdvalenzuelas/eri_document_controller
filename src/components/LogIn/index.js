//Dependencies
import React, { Component } from 'react'
import compare from '../../server/logIn'
import '../../components/components.css'
import eri from '../../components/ERI.png'

export class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateUsername: "",
            statePassword:"",            
            wrong: false            
        };           
    }

    handleLogInClick = e => {
        e.preventDefault();
        
        const {stateUsername:username, statePassword: password} = this.state;        
        const result = compare(username, password);
        const activeChange = this.props.activeChange;

        if (result.wrong) {
            this.setState({
                wrong: true
            });
        } else {
            activeChange(result.userInfo);                      
        }        
    };

    handleDataChanged = e => {        
        this.setState({
            wrong: false,
            [e.target.name] : e.target.value
        });    
    };
    
    render() {
        const { wrong } = this.state;                 
        return (
            <div id="LogIn" className='formStyle'>
                <div>
                    <form> 
                        <label style={{textAlign: 'left'}}>
                            Username:
                            <br />
                            <input name="stateUsername" type="text" onChange={this.handleDataChanged} className='textStyle' />
                        </label>
                        < br />
                        <label style={{textAlign: 'left'}}>
                            Password:
                            <br />
                            <input name="statePassword" type="password" onChange={this.handleDataChanged} className='textStyle' />
                        </label>
                        <br />
                        <br />
                        <input type="submit" value="LOG IN" className='Submit' onClick={this.handleLogInClick}/>
                    </form>
                    <p style={{color:"red"}}>
                        { !wrong ? "" : "The username or password is incorrect" }
                    </p>
                </div>
                <div>
                    <img src={eri} alt="imagen" height='220' style={{marginLeft: '20px'}}/>
                </div>                
            </div>
        )
    }
}

export default LogIn
