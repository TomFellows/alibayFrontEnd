import React, { Component } from 'react';

import '../CSS/Login.css'


class Login extends Component {



    render () {
        return (<div className='login'>
            <h3>Login :</h3>
            <form className='usernamePassword'>
            <div><div>Username:&nbsp; <input type='text'/></div></div>
            <div><div>Password:&nbsp; <input type='Password'/></div></div>
            <input type='submit'/>
        </form></div>)
    }
}

export default Login