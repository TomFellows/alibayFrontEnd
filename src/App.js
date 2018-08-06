import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import PageContent from './Components/PageContent.js'
import Header from './Components/Header.js'

class App extends Component {

  constructor () {
    super() 

    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.logout = this.logout.bind(this)

    this.state = {username: 'Anton', loggedIn: true}
  }

  async login (username, password) {

    let response = await fetch('/login', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
          username: username, 
          password: password})
  })

  response = response.text()

  let parsedBody = JSON.parse(response)

  if (parsedBody.success === true) {
      
      this.setState({username: username, loggedIn: true})
      
  } 
     return(parsedBody) //Returns the body object, with .success and .reason properties

  }

  async logout () {

    let response = await fetch('/logout', {
      method: 'POST',
      body: JSON.stringify({
          credentials: 'same-origin'
        })
    })
      response = response.text()
    
      let parsedBody = JSON.parse(response)

     if (parsedBody.success === true) { 
    
      this.setState({username: '', loggedIn: false})
      }
  }

  async createAccount (username, password, confirmPassword) {
    let response = await fetch('/createAccount', {
        method: 'POST',
        body: JSON.stringify({
            username: username, 
            password: password,
            confirmPassword: confirmPassword})
    })

    response = response.text()

    let parsedBody = JSON.parse(response)

    
    return(parsedBody) //Returns the body object, with .success and .reason properties
  }

  render() {

    return (
      <BrowserRouter>
      <div>
      <Header 
      username={this.state.username} 
      loggedIn={this.state.loggedIn} 
      login={this.login} 
      logout={this.logout} 
      createAccount={this.createAccount}/>
      <PageContent/>
      
     
      </div>
      </BrowserRouter>
    );
  }
}


export default App;


