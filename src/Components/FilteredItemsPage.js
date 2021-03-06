import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';
import Image2 from './Image2.js';
import ItemComponent from './ItemComponent.js'


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

        this.state = {items: []}

         }



        this.priceSortDown = this.priceSortDown.bind(this)
        this.priceSortUp = this.priceSortUp.bind(this)
        this.colorSort = this.colorSort.bind(this)
      
    }

  componentDidMount() {
    this.populateItems();
  }

  populateItems() {
    if(this.props.seller) {

    let body = JSON.stringify(this.props.seller)

    fetch('/itemsBySeller', {
      method: 'POST',
      body: body,
      credentials: "same-origin"
    })
      .then(x => x.text())
      .then(responseBody => {
        let parsedBody = JSON.parse(responseBody)
        this.setState({ items: parsedBody.itemsForSale })
      });
    } else if(this.props.brand) {

      let body = JSON.stringify(this.props.brand)

      fetch('/itemsByBrand', {
        method: 'POST',
        body: body,
        credentials: "same-origin"
      })
        .then(x => x.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody)
          this.setState({items: parsedBody.itemsByBrand})
        })

    }else if(this.props.price) {
      let body = JSON.stringify(this.props.price)

      fetch('/itemsByPrice', {
        method: 'POST',
        body: body,
        credentials: "same-origin"
      })
        .then(x => x.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody)
          this.setState({items: parsedBody.itemsByPrice})
        })
    }
  }

    colorSort(evt){
        evt.preventDefault();
        let someArr = this.state.items;
   
        someArr.sort(function(a, b){
            if(a.itemColor < b.itemColor) return -1;
            if(a.itemColor > b.itemColor) return 1;
            return 0;
        })
        this.setState({items: someArr})
    }
    priceSortDown(evt){
        evt.preventDefault();
      

          let someArr = this.state.items
          someArr.sort(function(a, b){return b.itemPrice - a.itemPrice});
          this.setState({items: someArr})   
    }

    priceSortUp(evt){
      evt.preventDefault();
        let someArr = this.state.items
        someArr.sort(function(a, b){return a.itemPrice - b.itemPrice});
        this.setState({items: someArr})   
  }
      

      
  render() {
    let anArr = []
    // for(let i = 0; i < this.state.items.length; i++){
    //   anArr = anArr.concat((<div className ="column">
    //   <Image2  src = {this.state.items[i].itemImage}/>
      
    //   <div>Price: {this.state.items[i].itemPrice}</div>
      
    //   </div>))
    // }

    
      for(let i = 0; i < this.state.items.length; i++) {
      anArr = anArr.concat((<div className="column">
      <ItemComponent item={this.state.items[i]} /> 
      </div>))
      
    }
    

    return ( 
      <div>
        <br/>
        <br/>
       

        <div class="dropdown">
        
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            SORT BY
            </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="filterButtons" onClick={this.priceSortDown} class="dropdown-item" type="button">Descending price</button>
            <button className="filterButtons" onClick={this.priceSortUp} class="dropdown-item" type="button">Ascending price</button>
            <button className="filterButtons" onClick={this.colorSort} class="dropdown-item" type="button">Color</button>
          </div>
        </div>



      <div className = "parentOfColumns2">
        {anArr}
      </div>
      
   
      </div>

    );
  }
}

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className = "filterButtons" onClick = {this.priceSortDown} class="dropdown-item" type="button">Descending price</button>
    <button className = "filterButtons" onClick = {this.priceSortUp} class="dropdown-item" type="button">Ascending price</button>
    <button className = "filterButtons" onClick = {this.colorSort} class="dropdown-item" type="button">Color</button>
  </div>
</div>


export default FilteredItemsPage;