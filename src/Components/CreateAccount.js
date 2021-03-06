import React, { Component } from 'react';

import '../CSS/CreateAccount.css'

import '../CSS/PopUpWindow.css'



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

       
        let response = await this.props.createAccount(this.state.username, this.state.password, this.state.confirmPassword)

        //The returned object has the .reason and .success properties

        

        if (response.success === true) {
        this.props.removeSelf()
        }
    }



    render () {
        return (<div className='login'>
            <div className = "loginHeading">CREATE ACCOUNT</div>
            <form className='usernamePassword' onSubmit={this.handleSubmit}>
            <br/>
            <div>
            <div className = "fields"> <input className = "input" placeholder = "Username" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div><br/>
            <div className = "fields"><input className = "input"  placeholder = "Password"  type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
            <div className = "fields"> <input className = "input" placeholder = "Confirm Password" type='Password' value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/></div>
            </div>
            <br/>
           
            <input className = "submitButton" type='submit'/>
        </form></div>)
    }
}

export default CreateAccount

// return (<div className='login' onSubmit={this.handleSubmit}>
            
// <h3 className = "loginHeading"><br/>USER LOGIN<br/><br/></h3>
// <form className='usernamePassword'>
// <br/>
// <div >

// <div className = "fields" > <input onClick = {this.clearField} className = "input" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div>
// <div className = "fields" > <input className = "input" type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
// </div>
// <br/>
// <input className = "submitButton" type='submit'/>
// <br/>
// <br/>
// </form></div>)