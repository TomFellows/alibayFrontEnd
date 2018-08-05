import React, { Component } from 'react';
import '../CSS/Global.css';

//This component is to render the images in the filteredItemsComponent

class Image2 extends Component {
    render() {
      return <img src={this.props.src} className="img2"/>
    }
}
  


export default Image2;
