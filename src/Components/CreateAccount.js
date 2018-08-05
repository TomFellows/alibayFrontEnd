import React, { Component } from 'react';

import '../CSS/CreateAccount.css'



class CreateAccount extends Component {

   constructor () {
       super()

       this.handleSubmit = this.handleSubmit.bind(this)
       this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleUsernameChange = this.handleUsernameChange.bind(this)
       this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)

       this.state = {username: '', password: '', confirmPassword: ''}
 }
   
    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault()

       
        let response = this.props.createAccount(this.state.username, this.state.password, this.state.confirmPassword)

        //The returned object has the .reason and .success properties

        alert(response.reason)

        if (response.success === true) {
        this.props.removeSelf()
        }
    }



    render () {
        return (<div className='createAccount'>
            <h3>Create account : </h3>
            <form className='usernamePassword' onSubmit={this.handleSubmit}>
            <div><div>Username:&nbsp; <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div></div>
            <div><div>Password:&nbsp; <input type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div></div>
            <div><div>Confirm password:&nbsp; <input type='Password' value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/></div></div>
            <input type='submit'/>
        </form></div>)
    }
}

export default CreateAccount