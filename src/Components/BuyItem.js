import React, { Component } from 'react';

import '../CSS/BuyItem.css'


class BuyItem extends Component {



    render () {
        return (<div className='buyitem'>
            <h3>Buy now :</h3>
            <form id='purchaseInfos'>
            <h4>Shipping informations :</h4>
            <div className='purchaseInfo'>
            <div><div>Address line 1:&nbsp; <input type='text'/></div></div>
            <div><div>Address line 2:&nbsp; <input type='text'/></div></div>
            <div><div>City:&nbsp; <input type='text'/></div></div>
            <div><div>State/Province/Region:&nbsp; <input type='text'/></div></div>
            <div><div>ZIP/Postal code:&nbsp; <input type='text'/></div></div>
            <div><div>Country:&nbsp; <input type='text'/></div></div>
            </div>
            <h4>Payment informations :</h4>
            <div><div><textarea rows='4' form='purchaseInfo'/></div></div>

            <input type='submit'/>
            
        </form></div>)
    }
}

export default BuyItem