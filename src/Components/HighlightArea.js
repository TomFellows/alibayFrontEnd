import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';


class HighlightArea extends Component {
    constructor(props){
        super(props)
        this.state = {items: [{itemId: 1, cost: 100, src: "/glasses1.png"},
        {itemId: 2, cost: 50, src: "/glasses2.png"},
        {itemId: 3, cost: 70, src: "/glasses3.png"},
        {itemId: 4, cost: 130, src: "/glasses4.png"}]}
       
    }
    
  render() {
    return ( 
      
      <div className = "parentOfColumns">
      
        <div className ="column">
        <Image src = {this.state.items[0].src}/> 
        </div>

        <div className="column">
        <Image src = {this.state.items[1].src}/> 
        </div>
   
        <div className="column">
        <Image src = {this.state.items[2].src}/>
        </div>

      </div>
    
    );
  }
}




export default HighlightArea;
