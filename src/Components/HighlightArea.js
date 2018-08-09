import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';
import ItemComponent from './ItemComponent.js'

class HighlightArea extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: []
        }
       
      this.populateItems = this.populateItems.bind(this)
    }
  componentDidMount() {
    this.populateItems()
  }

  populateItems() {
    let body = JSON.stringify({username: "Jacques420"})

    fetch('/itemsBySeller', {
      method: 'POST',
      body: body,
      credentials: "same-origin"
    })
      .then(x => x.text())
      .then(responseBody => {
        let parsedBody = JSON.parse(responseBody)
        let temp = this.state.items.concat(parsedBody.itemsForSale[0])
        temp = temp.concat(parsedBody.itemsForSale[4])
        temp = temp.concat(parsedBody.itemsForSale[2])
        this.setState({ items: temp })
      });
  }
  


  render() {
    return ( 
      <div> <h1 className="highlightHeading">Newest Additions</h1>
      <div className = "parentOfColumns">
      
        {this.state.items.map(x => {
          return (

            <div className="column">
              <ItemComponent item={x} />
            </div>

          )
        })}
        </div>

        {/* <div className ="column">
        <ItemComponent item={this.state.items[0]}/> 
        </div>

        <div className="column">
        <ItemComponent item={this.state.items[1]}/> 
        </div>
   
        <div className="column">
        <ItemComponent item={this.state.items[2]}/>
        </div> */}

      </div>
      /*
      <div className="parentOfColumns">
        <div className="column">
        <ItemComponent src={this.state.items[0].itemImage}
        </div>

      <div className="parentOfColumns">
        <div className="column">
        <ItemComponent src={this.state.items[1].itemImage}
        </div>
      
      <div className=parentOfColumns">
        <div className="column">
        <ItemComponent src={this.state.items[2].itemImage}
        </div>

      </div>
      */
    );
  }
}




export default HighlightArea;
