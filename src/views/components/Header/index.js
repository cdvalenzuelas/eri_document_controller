//Dependencies
import React, { Component } from 'react';
import menu from "./menu.svg";
import '../components.css'
import eri from '../ERI.png'


export class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {}
    }

    render() {        
        return (
            <div id="Header" className='Header'>                
                <button><img src={menu} alt="menu" style={{width:"20px"}}/></button>
                <img src={eri} alt="imagen" height='50' />           
                <h4>Eri Documents Controler</h4>           
                <input type="text" placeholder="Search your document" style={{borderRadius:'5px'}}/>
                <button className='Submit'>{this.props.firstName.toUpperCase()}</button> 
            </div>
        )
    }
}

export default Header