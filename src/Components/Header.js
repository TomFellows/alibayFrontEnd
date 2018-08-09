import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu.js'
import Breadcrumb from './Breadcrumb.js';
import AccountMenu from './AccountMenu.js'
import '../CSS/Header.css'

class Header extends Component {

    render () {
        
        return (<div>
        <div className='topRow'>
        {/* <Link to='/'><h1 className='title'>Spectacle</h1></Link> */}
        <Link to='/'><img className = "logo2" src = '/logo2.png'></img></Link>
        <AccountMenu 
        username={this.props.username} 
        loggedIn={this.props.loggedIn} 
        login={this.props.login} 
        logout={this.props.logout} 
        createAccount={this.props.createAccount}
        className='accountMenu'/></div>
        <Menu users={this.props.users} brands={this.props.brands} priceRanges={this.props.priceRanges} />
        <Breadcrumb users={this.props.users}/>



        </div>)

    }
}

export default Header