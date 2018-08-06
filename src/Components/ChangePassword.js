import React, { Component } from 'react';

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
    this.handlenewPasswordChange = this.handlenewPasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCurrentPasswordChange(event) {
    this.setState({currentPassword: event.target.value})
  }
  handlenewPasswordChange(event) {
    this.setState({newPassword: event.target.value})
  }
  handleConfirmPasswordChange(event) {
    this.setState({confirmPassword: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    let bod = JSON.parse({
      userId: this.props.userId,
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword
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
          alert(this.parsedBody.response)
        } else if(parsedBody.success === false) {
          alert(this.parsedBody.response)
        }
      })
  }

   render () {
       return (<div>
          <h3> Change Password </h3>
          <form onSubmit={this.handleSubmit}>
          <div><div>Current Password:&nbsp; <input type='text' value={this.state.currentPassword} onChange={this.handleCurrentPasswordChange}/></div></div>
          <div><div>New Passwod:&nbsp; <input type='text' value={this.state.newPassword} onChange={this.handleNewPasswordChange}/></div></div>
          <div><div>Confirm New Password:&nbsp; <input type='text' value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/></div></div>
          <input type="submit" />
          </form> 
          </div>)
   }
}

export default ChangePassword;

