import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';


class HighlightArea extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return ( 
      <div className = "parentOfColumns">
      
        <div className ="column">
        <Image src = "/glasses1.png"/>
        
          
        </div>

        <div className="column">
        <Image src = "/chanel.jpg"/>
       
        <Image src = "/bvlgari.jpg"/>
        </div>
   
        <div className="column">
        <Image src = "/rayban.jpg"/>
        </div>

       

      </div>
    );
  }
}


// class Column extends Component {
//   render() {
//     return <div className="column">{...this.props.children}</div>
//   }
// }

export default HighlightArea;
