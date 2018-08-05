import React, { Component } from 'react';
import PopUpWindow from './PopUpWindow.js'
import Login from './Login.js'
import CreateAccount from './CreateAccount.js'
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
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}><Login removeSelf={this.deletePopUp}/></PopUpWindow>)
        }
    
        if (this.state.popUp === 'CreateAccount') {
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}><CreateAccount removeSelf={this.deletePopUp}/></PopUpWindow>)
        }
        
    
        return (
          <div className='accountMenu'>
          
    
            
            <button onClick={this.popUp} value='Login'>Login</button>
            <button onClick={this.popUp} value='CreateAccount'>Create Account</button>
            {popUp}
          
          </div>
        );
      }
}


export default AccountMenu