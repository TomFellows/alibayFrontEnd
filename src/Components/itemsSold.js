import React, { Component } from 'react';



class ItemsSold extends Component {
  constructor(props) {
    super(props);
    this.state = {
        soldArray: []
    }
    
    this.getPurchaseInfo = this.getPurchaseInfo.bind(this)
  }
  componentDidMount() {
    this.getPurchaseInfo();
  }
  getPurchaseInfo() {
    let bod = JSON.stringify({"userId": this.props.userId}) 

    fetch('/itemsSold', {
      method: 'POST',
      credentials: 'same-origin',
      body: bod
    })
    .then(x => x.text())
    .then(responseBody => {
      let parsedBody = JSON.parse(responseBody)
      if(parsedBody.success === true) {
        let items = parsedBody.itemsSold
        let temp = this.state.soldArray.concat(items)
        this.setState({soldArray: temp})

      }
    })
  }

  renderItems(item) {
    return (
      <div className="itemHistory"> 
        <h3> Transaction date: {item.transactionDate} </h3>
        <div className="itemHistoryDiv">
          <img src={item.item.itemImage} style={{height: "400px", width: "600px"}} alt={item.item.itemName} className="itemHistoryContent" />
        
          <div className="itemHistoryContent">
            <h3> {item.item.itemName} </h3>
            <ul><h6>Item Details</h6>
              <li className="itemDescription"> {item.item.itemDescription} </li>
              <li> {item.item.itemPrice} </li>
              
            </ul>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div >
        <h1> {this.props.username}'s Sales History </h1>
        {this.state.soldArray.map( (x) => {
          return this.renderItems(x)})}
      </div>
    );
  }
}

export default ItemsSold;

