import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import PageContent from './Components/PageContent.js'
import Header from './Components/Header.js'

let users = [
  {
    userId: 0,
    name: 'Jacques 420',
    items: [{itemId: 1, cost: 100, src: "/glasses1.png", color: "red"},
    {itemId: 2, cost: 50, src: "/glasses2.png", color: "black"}]
  },
  {
    userId: 1,
    name: 'Billy Mays',
    items: [{itemId: 3, cost: 70, src: "/glasses3.png", color: "blue"},
    {itemId: 4, cost: 130, src: "/glasses4.png", color: "blue"}]
  },
  {
    userId: 2,
    name: 'Leo Krupps',
    items: [{itemId: 5, cost: 65, src: "/glasses5.png", color: "black"},
    {itemId: 6, cost: 90, src: "/glasses6.png", color: "red"},
    {itemId: 7, cost: 40, src: "/glasses7.png", color: "blue"}]
  },
  {
    userId: 3,
    name: 'Fanny Lechien',
    items: [{itemId: 2, cost: 50, src: "/glasses2.png", color: "black"},
    {itemId: 3, cost: 70, src: "/glasses3.png", color: "blue"},
    {itemId: 4, cost: 130, src: "/glasses4.png", color: "blue"},
    {itemId: 5, cost: 65, src: "/glasses5.png", color: "black"}]
  }
]


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
      createAccount={this.createAccount}
      users={users}/>
      <PageContent users={users}/>
      
     
      </div>
      </BrowserRouter>
    );
  }
}


export default App;


