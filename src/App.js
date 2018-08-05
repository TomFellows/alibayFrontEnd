import React, { Component } from 'react';

import './App.css';
import PopUpWindow from './Components/PopUpWindow.js'
import BuyItem from './Components/BuyItem.js'
import Header from './Components/Header.js'

class App extends Component {

  constructor () {
    super() 

    this.state = {popUp: false}
  }

  popUp = (event) => {
    this.setState({popUp: event.target.value})
  }

  deletePopUp = () => {
    this.setState({popUp: false})
  }


  render() {

    let popUp = ''

    
    if (this.state.popUp === 'BuyItem') {
      popUp = (<PopUpWindow removeSelf={this.deletePopUp}><BuyItem/></PopUpWindow>)
    }
    

    return (
      <div>
      <Header/>
      
      <div>
      
        <button onClick={this.popUp} value='BuyItem'>Buy item</button>
        {popUp}
      </div>
      </div>
    );
  }
}

export default App;
