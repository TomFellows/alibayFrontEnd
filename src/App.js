import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import PageContent from './Components/PageContent.js'
import Header from './Components/Header.js'

let users = [
  {
    userId: 0,
    username: 'Jacques420',
    items: []
  },
  {
    userId: 1,
    username: 'Billy Mays',
    items: []
  },
  {
    userId: 2,
    username: 'Leo Krupps',
    items: []
  },
  {
    userId: 3,
    username: 'Fanny Lechien',
    items: []
  }
]

let brands = [
  {brandName: "Prada"},
  {brandName: "Michael Kors"},
  {brandName: "Polette"}
]

let priceRanges = [

]


class App extends Component {

  constructor () {
    super() 

    this.login = this.login.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {username: '', userId: '', loggedIn: false}
  }

  componentDidMount () {
    fetch('/cookie', {
      method: 'GET',
      credentials: 'same-origin'
    })

  }

  async login (username, password) {

    let response = await fetch('/login', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
          username: username, 
          password: password})
  })

  response = await response.text()

  let parsedBody = JSON.parse(response)

  alert('Success: ' + parsedBody.success + ' Reason: ' + parsedBody.response)

  if (parsedBody.success === true) {
      
      this.setState({username: username, userId: parsedBody.userId, loggedIn: true})
      
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
      response = await response.text()
    
      let parsedBody = JSON.parse(response)

      alert('Success: ' + parsedBody.success + ' Reason: ' + parsedBody.response)

     if (parsedBody.success === true) { 
    
      this.setState({username: '', userId: '', loggedIn: false})
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

    response = await response.text()

    let parsedBody = JSON.parse(response)

    alert('Success: ' + parsedBody.success + ' Reason: ' + parsedBody.response)
    
    return(parsedBody) //Returns the body object, with .success and .reason properties
  }

  render() {

    return (
      <BrowserRouter>
      <div>
      <Header 
      username={this.state.username}
      userId={this.state.userId} 
      loggedIn={this.state.loggedIn} 
      login={this.login} 
      logout={this.logout} 
      createAccount={this.createAccount}
      users={users}
      brands={brands}/>
      <PageContent users={users} userId={this.state.userId} username={this.state.username} brands={brands} />
      
     
      </div>
      </BrowserRouter>
    );
  }
}


export default App;


