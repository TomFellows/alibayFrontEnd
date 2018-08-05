import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';
import HighlightArea from './HighlightArea.js'
import Carousel from './Carousel.js'
import Menu from './Menu.js'

class App extends Component {
    constructor(props){
        super(props)     
    }
    

  
  render() {
    return (
      <div> 
        <Menu/>
        <Carousel/>
        <br/>
        <br/>
        <br/>
        <br/>
        <HighlightArea/>
      </div>
    );
  }
}


export default App;
