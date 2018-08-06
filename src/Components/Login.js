import React, { Component } from 'react';

import '../CSS/Login.css'

import '../CSS/PopUpWindow.css'


class Login extends Component {

    constructor () {
        super()
 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.clearUserField = this.clearUserField.bind(this)
        this.clearPasswordField = this.clearPasswordField.bind(this)
 
        this.state = {count2: 0,count: 0, username: 'Enter Username', password: "somepass"}
  }
    
     handleUsernameChange(event) {
         
         this.setState({username: event.target.value})
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
            {/* <div className = "fields" ><div >Username:&nbsp; <input className = "input" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div></div>
           
            <div className = "fields" ><div >Password:&nbsp; <input className = "input" type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div></div> */}

            <div className = "fields" > <input onClick = {this.clearUserField} className = "input" type='text' value={this.state.username} onChange={this.handleUsernameChange}/></div>
            
           <div className = "fields" > <input onClick = {this.clearPasswordField} className = "input" type='Password' value={this.state.password} onChange={this.handlePasswordChange}/></div>
            </div>
            <br/>
            <input className = "submitButton" type='submit'/>
            <br/>
            <br/>
        </form></div>)
    }
}

export default Login