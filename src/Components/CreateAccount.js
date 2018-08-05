import React, { Component } from 'react';

import '../CSS/CreateAccount.css'


class CreateAccount extends Component {



    render () {
        return (<div className='createAccount'>
            <h3>Create account : </h3>
            <form className='usernamePassword'>
            <div><div>Username:&nbsp; <input type='text'/></div></div>
            <div><div>Password:&nbsp; <input type='Password'/></div></div>
            <input type='submit'/>
        </form></div>)
    }
}

export default CreateAccount