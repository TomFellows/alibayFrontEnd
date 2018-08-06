import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';
import Image2 from './Image2.js';


class FilteredItemsPage extends Component {
    constructor(props){
        super(props)

        if (!this.props.seller) {
        this.state = {items: [{itemId: 1, cost: 100, src: "/glasses1.png", color: "red"},
                              {itemId: 2, cost: 50, src: "/glasses2.png", color: "black"},
                              {itemId: 3, cost: 70, src: "/glasses3.png", color: "blue"},
                              {itemId: 4, cost: 130, src: "/glasses4.png", color: "blue"},
                              {itemId: 5, cost: 65, src: "/glasses5.png", color: "black"},
                              {itemId: 6, cost: 90, src: "/glasses6.png", color: "red"},
                              {itemId: 7, cost: 40, src: "/glasses7.png", color: "blue"}]}
        } else {

        this.state = {items: this.props.seller.items}

         }



        this.priceSortDown = this.priceSortDown.bind(this)
        this.priceSortUp = this.priceSortUp.bind(this)
        this.colorSort = this.colorSort.bind(this)
      
    }

    componentDidUpdate() {
      
    }

    colorSort(evt){
        evt.preventDefault();
        let someArr = this.state.items;
   
        someArr.sort(function(a, b){
            if(a.color < b.color) return -1;
            if(a.color > b.color) return 1;
            return 0;
        })
        this.setState({items: someArr})
    }
    priceSortDown(evt){
        evt.preventDefault();
      

          let someArr = this.state.items
          someArr.sort(function(a, b){return b.cost - a.cost});
          this.setState({items: someArr})   
    }

    priceSortUp(evt){
      evt.preventDefault();
    

        let someArr = this.state.items
        someArr.sort(function(a, b){return a.cost - b.cost});
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
      <button onClick = {this.colorSort}>Sort by color</button>
      </div>
      </div>

    );
  }
}




export default FilteredItemsPage;