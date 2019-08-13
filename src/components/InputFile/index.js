//Dependencies
import React, { Component } from 'react'
import '../components.css'

export class InputFile extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleName : '',
            editor : '',
            code : '',
            year : 2000,
            version : 1,
            discipline : 0,
            about: '',
            file: '',
            fileType: 0                      
        }       
    }

    //CAMBIA EL ESTADO DE ESTE ELEMENTO
    handleStateChanged = e => {
        if (e.target.name === 'discipline' || e.target.name === 'fileType') {
            if (Number(e.target.value) !== this.state.discipline) {
                this.setState({
                    [e.target.name]: Number(e.target.value)                
                })
            }            
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }        
    };

    //SEND FILE
    send = (e) => {
        console.log(this.state)
    }

    render() {   
        const { version, year, discipline, fileType } = this.state;    
        return (
            <div className='formStyle'>
                <label style={{textAlign: 'left'}}>
                    Title File
                    <br />
                    <input type='text' name='titleName' className='textStyle' onChange={this.handleStateChanged} />
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Editor
                    <br />
                    <input type='text' name='editor' className='textStyle'onChange={this.handleStateChanged} />
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Code
                    <br />
                    <input type='text' name='code' className='textStyle' onChange={this.handleStateChanged} />
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Year
                    <br />
                    <input type='number' name='year' className='textStyle' onChange={this.handleStateChanged} value={year} />
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Version
                    <br />
                    <input type='number' name='version' className='textStyle' onChange={this.handleStateChanged} value={version}/>
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Version
                    <br />
                    <input type='number' name='version' className='textStyle' onChange={this.handleStateChanged} />
                </label>
                <br />
                <label>
                    File type
                    <br />
                    <input type='checkbox' name='fileType' checked={fileType === 0} value={0} onChange={this.handleStateChanged}/>Recommended Practice <br />
                    <input type='checkbox' name='fileType' checked={fileType === 1} value={1} onChange={this.handleStateChanged}/>Standard <br />
                    <input type='checkbox' name='fileType' checked={fileType === 2} value={2} onChange={this.handleStateChanged}/>Code <br />
                    <input type='checkbox' name='fileType' checked={fileType === 3} value={3} onChange={this.handleStateChanged}/>Specification <br />
                    <input type='checkbox' name='fileType' checked={fileType === 4} value={4} onChange={this.handleStateChanged}/>Catalogue <br />
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Discipline
                    <br />
                    <br />
                    {this.props.scope.map((item, key)=>(
                        <React.Fragment key={key}>
                            <input type='checkbox' name='discipline' checked={discipline === key} onChange={this.handleStateChanged} value={Number(key)} />{item}<br />
                        </React.Fragment>                        
                    ))}                    
                </label>
                <br />
                <label style={{textAlign: 'left'}}>
                    Description
                    <br />
                    <textarea name='about' className='textStyle' onChange={this.handleStateChanged} />
                </label>                
                <label style={{display: 'in-line'}}>                                        
                    <input type='file' className='Submit' accept='.pdf' />
                    <br />
                    <br />
                    <input type='submit' className='Submit' value={'SEND'} onClick={this.send}/>
                </label>                
            </div>
        )
    }
}

export default InputFile
