import React, { Component} from 'react';
import {withRouter} from 'react-router';

import PopUpWindow from './PopUpWindow.js'
import Login from './Login.js'
import CreateAccount from './CreateAccount.js'

import PostAd from './PostAd.js'
import '../CSS/AccountMenu.css'

class AccountMenuBare extends Component {

    constructor () {
        super() 
    
        this.accountDetails = this.accountDetails.bind(this)
        this.state = {popUp: false}
      }
    
      popUp = (event) => {
        this.setState({popUp: event.target.value})
      }
    
      deletePopUp = () => {
        this.setState({popUp: false})
      }

      accountDetails () {
        this.props.history.push('/accountDetails')
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

        

        if (this.state.popUp === 'PostAd') {
          popUp = (<PopUpWindow removeSelf={this.deletePopUp}><PostAd removeSelf={this.deletePopUp} /></PopUpWindow>)
        }

        let buttons
        
        if (this.props.loggedIn === true) {
        
        buttons = (<div><div id='username'>Logged in as {this.props.username}&nbsp;</div>
                  <button className = "accountMenuButtons" onClick={this.accountDetails}>Account</button>
                  <button className = "accountMenuButtons" value='Logout' onClick={this.props.logout}>Log out</button>
                  <button className = "accountMenuButtons" onClick={this.popUp} value='PostAd'>Post Ad</button>
          </div>)

        } else {
        buttons = (<div className = "buttons">
                      <button className = "accountMenuButtons" onClick={this.popUp} value='Login'>Login</button>
                      <button className = "accountMenuButtons" onClick={this.popUp} value='CreateAccount'>Create Account</button>
                      <button className = "accountMenuButtons" onClick={this.popUp} value='PostAd'>Post Ad</button>
                      
                      </div>)
        
        }

        
        
    
        return (
          <div className='accountMenu'>
          
    
            {buttons}
            
            {popUp}
          
          </div>
        );
      }
}

let AccountMenu = withRouter(AccountMenuBare)


export default AccountMenu;