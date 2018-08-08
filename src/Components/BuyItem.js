import React, { Component } from 'react';
import Payment from './Payment.js'

import '../CSS/BuyItem.css'


class BuyItem extends Component {



    render () {
        return (<div className='buyitem'>
            <h3>Buy now :</h3>
            <br/>
            <form id='purchaseInfos'>
            <h4>Shipping informations :</h4>
            <br/>
            <div className='purchaseInfo'>
            <div>Address line 1:&nbsp; <input type='text'/></div><br/>
            <div>Address line 2:&nbsp; <input type='text'/></div><br/>
            <div>City:&nbsp; <input type='text'/></div><br/>
            <div>State/Province/Region:&nbsp;&nbsp; <input type='text'/></div><br/>
            <div>ZIP/Postal code:&nbsp; <input type='text'/></div><br/>
            <div>Country:&nbsp; <input type='text'/></div><br/>
            </div>
            <h4>Payment informations :</h4>
            <div><textarea rows='4' form='purchaseInfo'/></div>

            <input type='submit'/>
            
            
        </form>
        <Payment name="Spectacle"/>
        </div>)
    }
}

export default BuyItem