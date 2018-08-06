import React, { Component } from 'react';

import '../CSS/AccountDetails.css'

class AccountDetails extends Component {



    render () {



        //TODO: Populate with the user infos
        return (<div className='accountDetails'>
            <h3>Account details :</h3>
            <br/>
            <h4>Username: this.props.username</h4>
            <button>Change password</button>
            <br/>
            <form id='address'>
            <br/>
            <h4>Shipping informations :</h4>
            <br/>
            <div className='addressInfo'>
            <div>Address line 1:&nbsp; <input type='text'/></div><br/>
            <div>Address line 2:&nbsp; <input type='text'/></div><br/>
            <div>City:&nbsp; <input type='text'/></div><br/>
            <div>State/Province/Region:&nbsp;&nbsp; <input type='text'/></div><br/>
            <div>ZIP/Postal code:&nbsp; <input type='text'/></div><br/>
            <div>Country:&nbsp; <input type='text'/></div><br/>
            </div>
            <input type='submit'/>
            
        </form>
        
        

        </div>)
    }
}

export default AccountDetails