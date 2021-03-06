import React, { Component } from 'react';
import ChangePassword from './ChangePassword.js'
import PopUpWindow from './PopUpWindow.js'

import '../CSS/AccountDetails.css'

class AccountDetails extends Component {



    constructor(props) {
        super(props)

        this.accountDetails = this.accountDetails.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changePasswordPopUp = this.changePasswordPopUp.bind(this)

        this.state = {popUp: false, userId: this.props.userId, address1: '', address2: '', city: '', stateProvRegion: '', zip: '', country: ''}
  
    }

    async componentDidMount() {
       this.accountDetails()
    }

    async accountDetails () {
        let response = await fetch('/accountDetails', {
            method: 'POST',
            body: JSON.stringify({userId: this.state.userId}),
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

        alert(JSON.parse(response).response)


    }

    changePasswordPopUp(event) {
        this.setState({popUp: event.target.value})
    }

    deletePopUp = () => {
        this.setState({popUp: false})
      }

    render () {

        let popUp = ''

        if (this.state.popUp === 'ChangePassword') {
            popUp = (<PopUpWindow removeSelf={this.deletePopUp}>
            <ChangePassword userId={this.state.userId} removeSelf={this.deletePopUp}/>
            </PopUpWindow>)
          }


        //TODO: Populate with the user infos
        return (<div className='accountDetails'>
            <h3>Account details :</h3>
            <br/>
            <h4>Username: {this.props.username}</h4>
            <button value='ChangePassword' onClick={this.changePasswordPopUp}>Change password</button>
            <br/>
            <form id='address' onSubmit={this.handleSubmit}>
            <br/>
            <h4>Shipping informations :</h4>
            <br/>
            <div className='addressInfo'>
            <div>Address line 1:&nbsp; <input value={this.state.address1} onChange={this.handleAddress1Change} type='text'/></div><br/>
            <div>Address line 2:&nbsp; <input value={this.state.address2} onChange={this.handleAddress2Change} type='text'/></div><br/>
            <div>City:&nbsp; <input value={this.state.city} onChange={this.handleCityChange} type='text'/></div><br/>
            <div>State/Province/Region:&nbsp;&nbsp; <input onChange={this.handleStateProvRegionChange} value={this.state.stateProvRegion} type='text'/></div><br/>
            <div>ZIP/Postal code:&nbsp; <input value={this.state.zip} onChange={this.handleZipChange} type='text'/></div><br/>
            <div>Country:&nbsp; <input value={this.state.country} onChange={this.handleCountryChange} type='text'/></div><br/>
            </div>
            <input type='submit'/>
            
        </form>
        {popUp}
        
        

        </div>)
    }
}

export default AccountDetails