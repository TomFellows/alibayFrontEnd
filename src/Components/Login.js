import React, { Component } from 'react';

import '../CSS/Login.css'

import '../CSS/PopUpWindow.css'


class Login extends Component {

    constructor () {
        super()
 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        
 
        this.state = {username: '', password: ''}
  }
    
     handleUsernameChange(event) {
         
         this.setState({username: event.target.value})
     }

  
 
     handlePasswordChange(event) {
         this.setState({password: event.target.value})
     }
 

 
     handleSubmit(event) {
        event.preventDefault()

        
        let response = this.props.login(this.state.username, this.state.password)

        //The returned object has the .reason and .success properties

        alert(response.reason)

        if (response.success === true) {
        this.props.removeSelf()
            }
         
     }



    render () {
        return (<div className='login' onSubmit={this.handleSubmit}>
            
            <h3 className = "loginHeading"><br/>USER LOGIN<br/><br/></h3>
            <form className='usernamePassword'>
            <br/>
            <div >
            
         
            <div className = "fields" > <input  placeHolder = "Username" className = "input" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div>
           
           <div className = "fields" > <input  placeHolder = "Password" className = "input" type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
            </div>
            <br/>
            <input className = "submitButton" type='submit'/>
            <br/>
            <br/>
        </form></div>)
    }
}

export default Login