import React, { Component } from 'react';
import ItemDetails from './ItemDetails.js';
import { BrowserRouter, Route } from 'react-router-dom'

class ItemComponent extends Component {

  constructor() {
    super()
    // this.state = {
      
    //   }
    // }
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
      <div onClick={this.itemDetails} >
        <img src={this.props.item.itemImage} style={{'width':'400px'}} className="img2"/>
      </div>)
  }
}


export default ItemComponent;

