import React, { Component } from 'react';



// Item Details Page
// itemId: "g1234"
// obj and seller are used for test purposes only
let seller = {}

let obj = {"success":true,
            "seller": {"userName": "pradaLover"},
            "item":{"itemId":"g1234","sellerId":"m123","itemName":"Harry Black","itemDescription":"Delightful","itemPrice":34.99,"numberRemaining":4,"itemImage":"./harryblack.png","keyword":"round"}}


class itemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemDetails: {},
        sellerDetails: {}
    }
    
    this.getItemInfo = this.getItemInfo.bind(this)
  }
  componentDidMount() {
    this.getItemInfo();
  }

  getItemInfo() {
    let bod = JSON.stringify({"itemId": "g1234"}) //JSON.stringify({userId: this.props.userId})

    fetch('/itemDetails', {
      method: 'POST',
      credentials: 'same-origin',
      body: bod
    })
    .then(x => x.text())
    .then(responseBody => {
      let parsedBody = obj //JSON.parse(responseBody)
      if(parsedBody.success === true) {
        let item = parsedBody.item
        seller = parsedBody.seller
        this.setState({itemDetails: item, sellerDetails: seller})
      }
    })
  }

  buyNow(){
    // Bring up payment option, need to watch video guide
    let bod = JSON.stringify({"itemdID": "g1234", "userId": "o40r9k"})
    
    fetch('/buyItem', {
      method: 'POST',
      body: bod
    })
      .then(x => x.text())
      .then(responseBody => {
        let parsedBody = JSON.parse(responseBody)
        if(parsedBody.success === false){
          return (<div> {parsedBody.reason} </div>)
        }
        }
      )
      .then( fetch('/sellItem', {
        method: 'POST',
        body: bod
      })
        .then(x => x.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody)
          if(parsedBody.success === true){
            return (<div> Enjoy your purchase! </div>)
          }
        }
        )
      )
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
              <li> Quantity remaining: {item.numberRemaining} </li>
              <li> Seller: <span style={{color: "green"}}> {this.state.sellerDetails.userName} </span> </li>
              <li> Style tags: {item.keyword} </li>
            </ul>
          </div>
        </div>
        <button onClick={this.buyNow}> Buy now! </button>
      </div>
    )
  }


  render() {
    return (
      <div >
        <h1> Item Details </h1>
        {this.renderItems(this.state.itemDetails)}
      </div>
    );
  }
}

export default itemDetails;

