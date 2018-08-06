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
       this.clearUserField = this.clearUserField.bind(this)
       this.clearPasswordField = this.clearPasswordField.bind(this)
       this.clearPasswordField2 = this.clearPasswordField2.bind(this)

       this.state = {count3: 0, count2: 0, count: 0, username: 'Enter Username', password: 'aaaaaa', confirmPassword: 'aaaaaa'}
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

    clearUserField(){
        if(this.state.count === 0){
        this.setState({username: ""});
        
        }
        this.setState({count: 1})
    }

    clearPasswordField(){
       if(this.state.count2 === 0){
       this.setState({password: ""});
       
       }
       this.setState({count2: 1})
   }


   clearPasswordField2(){
    if(this.state.count3 === 0){
    this.setState({confirmPassword: ""});
    
    }
    this.setState({count3: 1})
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
        return (<div className='login'>
            <h3 className = "loginHeading"><br/>CREATE ACCOUNT<br/><br/> </h3>
            <form className='usernamePassword' onSubmit={this.handleSubmit}>
            <br/>
            <div>
            <div className = "fields"> <input className = "input" onClick = {this.clearUserField} type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div>
            <div className = "fields"><input className = "input" onClick = {this.clearPasswordField} type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
            <div className = "fields"> <input className = "input" onClick = {this.clearPasswordField2} type='Password' value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/></div>
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