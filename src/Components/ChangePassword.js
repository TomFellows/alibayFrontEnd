import React, { Component } from 'react';
import '../CSS/PopUpWindow.css'

class ChangePassword extends Component {

  constructor () {
    super()
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
    this.handleCurrentPasswordChange = this.handleCurrentPasswordChange.bind(this)
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCurrentPasswordChange(event) {
    this.setState({currentPassword: event.target.value})
  }
  handleNewPasswordChange(event) {
    this.setState({newPassword: event.target.value})
  }
  handleConfirmPasswordChange(event) {
    this.setState({confirmPassword: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.newPassword !== this.state.confirmPassword) {
      alert('Password confirmation must match new password')
    } else {

    let bod = JSON.stringify({
      userId: this.props.userId,
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword
      
    })

    fetch('/changePassword', {
      method: 'POST',
      credentials: 'same-origin',
      body: bod
    })
      .then(x => x.text())
      .then(responseBody => {
        let parsedBody = JSON.parse(responseBody)

        if(parsedBody.success === true) {
          alert(parsedBody.response)
          this.props.removeSelf()
        } else if(parsedBody.success === false) {
          alert(parsedBody.response)
        }
      })
    }
  }

   render () {
       return (<div className='login'>
          <div className = "loginHeading">CHANGE PASSWORD</div>
          <form className='usernamePassword' onSubmit={this.handleSubmit}>
          <div className = "fields" ><input type='Password' className = "input" placeHolder="Current Password" value={this.state.currentPassword} onChange={this.handleCurrentPasswordChange}/></div><br/>
          <div className = "fields" ><input type='Password' className = "input" placeHolder="New Password" value={this.state.newPassword} onChange={this.handleNewPasswordChange}/></div>
          <div className = "fields" ><input type='Password' className = "input" placeHolder=" Confirm Password " value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/></div><br/>
          <input className = "submitButton" type="submit" />
          </form> 
          </div>)
   }
}

export default ChangePassword;

