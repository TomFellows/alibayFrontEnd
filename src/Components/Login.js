import React, { Component } from 'react';


import '../CSS/Login.css'


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
            <h3>Login :</h3>
            <form className='usernamePassword'>
            <div><div>Username:&nbsp; <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div></div>
            <div><div>Password:&nbsp; <input type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div></div>
            <input type='submit'/>
        </form></div>)
    }
}

export default Login