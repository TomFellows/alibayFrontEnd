import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';
import Image2 from './Image2.js';


class FilteredItemsPage extends Component {
    constructor(props){
        super(props)
        this.state = {items: [{itemId: 1, cost: 100, src: "/glasses1.png"},
                              {itemId: 2, cost: 50, src: "/glasses2.png"},
                              {itemId: 3, cost: 70, src: "/glasses3.png"},
                              {itemId: 4, cost: 130, src: "/glasses4.png"}]}
        this.priceSortDown = this.priceSortDown.bind(this)
        this.priceSortUp = this.priceSortUp.bind(this)
    }
    priceSortDown(evt){
        evt.preventDefault();
      

          let someArr = this.state.items
          someArr.sort(function(a, b){return a.cost - b.cost});
          this.setState({items: someArr})   
    }

    priceSortUp(evt){
      evt.preventDefault();
    

        let someArr = this.state.items
        someArr.sort(function(a, b){return b.cost - a.cost});
        this.setState({items: someArr})   
  }
  render() {
    let anArr = []
    for(let i = 0; i < this.state.items.length; i++){
      anArr = anArr.concat((<div className ="column">
      <Image2 src = {this.state.items[i].src}/>
      <div>Price: {this.state.items[i].cost}</div>
      
      </div>))
    }
    return ( 
      <div>
      <div className = "parentOfColumns2">
        {anArr}
      </div>
      
      <div>
      <button onClick = {this.priceSortDown}>Sort by descending price</button>
      <button onClick = {this.priceSortUp}>Sort by ascending price</button>
      </div>
      </div>

    );
  }
}




export default FilteredItemsPage;