import React, { Component } from 'react';
import Menu from './Menu.js'
import Breadcrumb from './Breadcrumb.js';
import AccountMenu from './AccountMenu.js'
import '../CSS/Header.css'

class Header extends Component {

    render () {
        
        return (<div>
        <div className='topRow'>
        <h1 className='title'>Spectacle</h1>
        <AccountMenu className='accountMenu'/></div>
        <Menu/>
        <Breadcrumb/>



        </div>)

    }
}

export default Header