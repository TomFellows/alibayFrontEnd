import React, { Component } from 'react';
import PopUpWindow from './PopUpWindow.js'
import BuyItem from './BuyItem.js'

import {withRouter} from 'react-router'

import '../CSS/ItemDetails.css'

let seller = {};


class itemDetailsBare extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemDetails: {},
        sellerDetails: {},
        popUp: false
    }
    
    this.getItemInfo = this.getItemInfo.bind(this)
    this.buyNow = this.buyNow.bind(this)
  }
  componentDidMount() {
    this.getItemInfo();
    
  }

  getItemInfo() {
    let bod = JSON.stringify({itemId: this.props.itemId}) 

    fetch('/itemDetails', {
      method: 'POST',
      credentials: 'same-origin',
      body: bod
    })
    .then(x => x.text())
    .then(responseBody => {
      let parsedBody = JSON.parse(responseBody);
      
      if(parsedBody.success === true) {
        let item = parsedBody.item
        seller = parsedBody.seller
        this.setState({itemDetails: item, sellerDetails: seller})
      }
    })
  }

 

  deletePopUp = () => {
    this.setState({popUp: false})
    //this.props.history.push('/refresh/' + this.props.location.pathname)
  }

  buyNow(){

    this.setState({popUp: 'BuyItem'})

    // Bring up payment option, need to watch video guide
    let bod = JSON.stringify({itemId: this.props.itemId, userId: this.props.userId})
    
    fetch('/buyItem', {
      method: 'POST',
      body: bod,
      credentials: 'same-origin'
    })
      .then(x => x.text())
      .then(responseBody => {
        let parsedBody = JSON.parse(responseBody)
        if(parsedBody.success === false){
          return (<div> {parsedBody.reason} </div>)
        }
        }
      )
        
   
      
  }


  


  renderItems(item) {

    let popUp = ''
    let buyButton =''

    if (this.props.userId === '') {
      buyButton= (<div style={{'font-weight': 'bold'}}>Log in to buy</div>)
    } else {
      buyButton = (<button className='buyNowButton' onClick={this.buyNow}> Buy now! </button>)

    }

    if (this.state.popUp === 'BuyItem') {
      popUp = (<PopUpWindow removeSelf={this.deletePopUp}>
      <BuyItem userId={this.props.userId} removeSelf={this.deletePopUp}/>
      </PopUpWindow>)
    }


    return (
      <div >
        <h3> {item.itemName} </h3>
        <div>
          <div className='detailsBlock'>
            <img src={item.itemImage} className='detailsImage' alt={item.itemName} />

            <div>
              <div  className='detailsList'>
              <ul>
                <li> {item.itemDescription} </li>
                <li> {item.itemPrice} </li>
                <li> Quantity remaining: {item.numberRemaining} </li>
                <li> Style tags: {item.keyword} </li>
              </ul>
              {buyButton}
              </div>
              
              {popUp}
            </div>
            
          </div>
          
        </div>

      </div>
    )
  }


  render() {
    return (
      <div className='details'>
        <h1> Item Details </h1>
        {this.renderItems(this.state.itemDetails)}
      </div>
    );
  }
}

let itemDetails = withRouter(itemDetailsBare)

export default itemDetails;

