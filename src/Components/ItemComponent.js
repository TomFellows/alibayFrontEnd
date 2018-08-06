import React, { Component } from 'react';
import ItemDetails from './ItemDetails.js';
import { BrowserRouter, Route } from 'react-router-dom'

class ItemComponent extends Component {

  constructor() {
    super()
    this.state = {
      item: {//this.props.item
        itemImage: './harryblack.png',
        itemName: 'Harry Black'
      }
    }
    this.itemDetails = this.itemDetails.bind(this)

  }

  

  itemDetails(event) {
    event.preventDefault();

    return (
      <div>
        <ItemDetails item={this.props.item} />
      </div>
    )
  }

  

  render() {
    return (
      <div onClick={this.itemDetails}>
        <img src={this.state.item.itemImage} style={{'width':'400px'}}/>
      </div>)
  }
}


export default ItemComponent;

