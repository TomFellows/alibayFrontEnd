import React, { Component } from 'react';
import '../CSS/Global.css';



class Image extends Component {
    render() {
      return <img src={this.props.src} className="img"/>
    }
}
  


export default Image;



