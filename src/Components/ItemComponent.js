import React, { Component } from 'react';
import ItemDetails from './ItemDetails.js';
import { Link } from 'react-router-dom'
import '../CSS/ItemComponent.css'

class ItemComponent extends Component {

 

  

  render() {
    return (
      <div className='itemComponent'>
      <Link to={'/itemdetails/' + this.props.item.itemId}>
      <div>
        <img src={this.props.item.itemImage} className="img2"/>
      </div></Link>
      <div className='itemName'> {this.props.item.itemName}</div>
      <div> Price: {this.props.item.itemPrice} </div> 
      </div>)
  }
}


export default ItemComponent;

