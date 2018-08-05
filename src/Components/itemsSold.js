import React, { Component } from 'react';



// Items Sold
// userId: "o40r9k"
// obj is for test purposes only

let obj = {"success":true,
"itemsSold":[{
  "itemId":"g1234",
  "sellerId":"m123",
  "itemName":"Harry Black",
  "itemDescription":"Delightful",
  "itemPrice":34.99,
  "numberRemaining":4,
  "itemImage":"./harryblack.png",
  "keyword":"round"
}]}


class itemsSold extends Component {
  constructor(props) {
    super(props);
    this.state = {
        soldArray: [{"itemId":"g5678",
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
    let bod = JSON.stringify({"userId": "o40r9k"}) //JSON.stringify({userId: this.props.userId})

    fetch('/itemsSold', {
      method: 'POST',
      body: bod
    })
    .then(x => x.text())
    .then(responseBody => {
      let parsedBody = obj //JSON.parse(responseBody)
      if(parsedBody.success === true) {
        let items = parsedBody.itemsSold
        let temp = this.state.soldArray.concat(items)
        this.setState({soldArray: temp})

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
        <h1> Sales History </h1>
        {this.state.soldArray.map( (x) => {
          return this.renderItems(x)})}
      </div>
    );
  }
}

export default itemsSold;

