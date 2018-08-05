import React, { Component } from 'react';
import PopUpWindow from './PopUpWindow.js'
import Login from './Login.js'
import CreateAccount from './CreateAccount.js'
import PostAd from './PostAd.js'
import '../CSS/AccountMenu.css'

class AccountMenu extends Component {

    constructor () {
        super() 
    
        this.state = {popUp: false}
      }
    
      popUp = (event) => {
        this.setState({popUp: event.target.value})
      }
    
      deletePopUp = () => {
        this.setState({popUp: false})
      }
    
    
      render() {
    
        let popUp = ''
    
        if (this.state.popUp === 'Login') {
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}>
          <Login login={this.props.login} removeSelf={this.deletePopUp}/>
          </PopUpWindow>)
        }
    
        if (this.state.popUp === 'CreateAccount') {
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}>
          <CreateAccount createAccount={this.props.createAccount}removeSelf={this.deletePopUp}/>
          </PopUpWindow>)
        }

        let buttons
        
        if (this.props.loggedIn === true) {
        
        buttons = (<div>Logged in as {this.props.username}
                  <button>Account</button>
                  <button value='Logout' onClick={this.props.logout}>Log out</button>
                  <button>Post Add</button>
          </div>)

        } else {
        buttons = (<div>
                      <button onClick={this.popUp} value='Login'>Login</button>
                      <button onClick={this.popUp} value='CreateAccount'>Create Account</button>
                      <button>Post Add</button>
                      </div>)
        
        }

        if (this.state.popUp === 'PostAd') {
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}><PostAd removeSelf={this.deletePopUp} /></PopUpWindow>)
        }
        
    
        return (
          <div className='accountMenu'>
          
    
            
            {buttons}
            
            {popUp}
          
          </div>
        );
      }
}


export default AccountMenu