import React, { Component } from 'react';



// Items Bought
// userId: "r1234"
// obj is for test purposes only

let obj = `{"success":true,
            "itemsBought":[
              {"itemId":"g1234",
              "buyerId":"r1234",
              "itemName":"Harry Black",
              "itemDescription":"Delightful",
              "itemPrice":34.99,
              "numberRemaining":4,
              "itemImage":"./harryblack.png",
              "keyword":"round"}]}`


class ItemsBought extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boughtArray: [
        {"itemId":"g5678",
        "buyerId":"r1234",
        "itemName":"Dean Silver",
        "itemDescription":"Smashing",
        "itemPrice":34.99,
        "numberRemaining":4,
        "itemImage":"./deansilver.png",
        "keyword":"round"}]
    }
    
    this.getPurchaseInfo = this.getPurchaseInfo.bind(this)
  }
  componentDidMount() {
    this.getPurchaseInfo();
  }
  getPurchaseInfo() {
    let bod = JSON.stringify({"userId": "r1234"}) //JSON.stringify({userId: this.props.userId})

    fetch('/itemsBought', {
      method: 'POST',
      credentials: 'same-origin',
      body: bod
    })
    .then(x => x.text())
    .then(responseBody => {
      let parsedBody = JSON.parse(obj) //JSON.parse(responseBody)
      if(parsedBody.success === true) {
        let items = parsedBody.itemsBought
        let temp = this.state.boughtArray.concat(items)
        this.setState({boughtArray : temp})
        
      }
    })
  }

  renderItems(item) {
    return (
      <div >
        <h3> {item.itemName} </h3>
        <div style={{display:"flex"}}>
          <img src={item.itemImage} style={{height: "400px", width: "600px"}} alt={item.itemName} />
        
          <div>
            <h3> Item Details </h3>
            <ul>
              <li> {item.itemDescription} </li>
              <li> {item.itemPrice} </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div >
        <h1> Purchase History </h1>
        {this.state.boughtArray.map( (x) => {
          return this.renderItems(x)})}
      </div>
    );
  }
}

export default ItemsBought;
