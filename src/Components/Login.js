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
 

 
     async handleSubmit(event) {
        event.preventDefault()

        
        let response = await this.props.login(this.state.username, this.state.password)

        //The returned object has the .reason and .success properties


        if (response.success === true) {
        this.props.removeSelf()
            }
         
     }



    render () {
        return (<div className='login' onSubmit={this.handleSubmit}>
            
            <div className = "loginHeading">USER LOGIN</div>
            <form className='usernamePassword'>
            <br/>
            <div >
            
         
            <div className = "fields" style={{'margin-bottom': '10px'}}> <input  placeholder = "Username" className = "input" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div>
           
           <div className = "fields" > <input  placeholder = "Password" className = "input" type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
            </div>
            <br/>
            <input className = "submitButton" type='submit'/>
            <br/>
            <br/>
        </form></div>)
    }
}

export default Login