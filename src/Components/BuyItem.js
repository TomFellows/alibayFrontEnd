import React, { Component } from 'react';
import Payment from './Payment.js'

import '../CSS/BuyItem.css'
import '../CSS/PopUpWindow.css'


class BuyItem extends Component {


    constructor(props) {
        super(props)

        this.accountDetails = this.accountDetails.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        

        this.state = {popUp: false, userId: this.props.userId, address1: '', address2: '', city: '', stateProvRegion: '', zip: '', country: ''}
  
    }

    async componentDidMount() {
       this.accountDetails()
    }

    async accountDetails () {
        let response = await fetch('/accountDetails', {
            method: 'POST',
            body: JSON.stringify({userId: this.props.userId}),
            credentials: 'same-origin'
        })

        response = await response.text()

        let shippingInfo =  JSON.parse(response).accountDetails.shippingInfo

        this.setState({address1: shippingInfo.address1, address2: shippingInfo.address2, city: shippingInfo.city,
            stateProvRegion: shippingInfo.stateProvRegion, zip: shippingInfo.zip, country: shippingInfo.country})

    }


    handleAddress1Change = (event) => {
        this.setState({address1: event.target.value})
    }

    handleAddress2Change = (event) => {
        this.setState({address2: event.target.value})
    }

    handleCityChange =(event) => {
        this.setState({city: event.target.value})
    }

    handleStateProvRegionChange = (event) => {
        this.setState({stateProvRegion: event.target.value})
    }

    handleZipChange = (event) => {
        this.setState({zip: event.target.value})
    }

    handleCountryChange = (event) => {
        this.setState({country: event.target.value})
    }

    async handleSubmit (event) {
        event.preventDefault()

        let response = await fetch('/updateShippingInfo', {
            method: 'POST',
            body: JSON.stringify({userId: this.state.userId, shippingInfo: {
                address1: this.state.address1, address2: this.state.address2, city: this.state.city,
                stateProvRegion: this.state.stateProvRegion, zip: this.state.zip, country: this.state.country
            }}),
            credentials: 'same-origin'
        })

        response = await response.text()

        //alert(JSON.parse(response).response)


    }


    render () {
        return (<div className='login' id='buyitem'>
            <div>Buy now :</div>
            <br/>
            <form id='purchaseInfos' onSubmit={this.handleSubmit}>
            <h4>Shipping informations :</h4>
            <br/>
            <div className='purchaseInfo'>
            <div>Address line 1:&nbsp; <input value={this.state.address1} onChange={this.handleAddress1Change} type='text'/></div><br/>
            <div>Address line 2:&nbsp; <input value={this.state.address2} onChange={this.handleAddress2Change} type='text'/></div><br/>
            <div>City:&nbsp; <input value={this.state.city} onChange={this.handleCityChange} type='text'/></div><br/>
            <div>State/Province/Region:&nbsp;&nbsp; <input onChange={this.handleStateProvRegionChange} value={this.state.stateProvRegion} type='text'/></div><br/>
            <div>ZIP/Postal code:&nbsp; <input value={this.state.zip} onChange={this.handleZipChange} type='text'/></div><br/>
            <div>Country:&nbsp; <input value={this.state.country} onChange={this.handleCountryChange} type='text'/></div><br/>
            <input type='submit' className='updateInfosButton' value='Update shipping infos'/>
            </div>
   
        </form>
        <br />
        <div onClick={this.props.removeSelf}>
        <Payment  name="Spectacle"/>
        </div>
        </div>)
    }
}

export default BuyItem