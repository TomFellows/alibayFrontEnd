import React, { Component } from 'react';

import '../CSS/PopUpWindow.css'

class PostAd extends Component {

  constructor () {
    super()
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleItemNameChange = this.handleItemNameChange.bind(this)
    this.handleKeywordsChange = this.handleKeywordsChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    
}
  
   handleItemNameChange(event) {
       this.setState({itemName: event.target.value})
   }

   handleDescriptionChange(event) {
       this.setState({description: event.target.value})
   }

   handlePriceChange(event) {
       this.setState({price: event.target.value})
   }

   handleQuantityChange(event) {
     this.setState({quantity: event.target.value})
   }
   handleKeywordsChange(event) {
     this.setState({keywords: event.target.value})
   }
   

   handleSubmit(event) {
     event.preventDefault()
     
     let bod = JSON.stringify({
       itemName: this.state.itemName,
       description: this.state.description,
       price: "$" + this.state.price,
       quantity: this.state.quantity,
       keywords: this.state.keywords
       // image: './imagename.png
     })

     fetch('/putItemForSale', {
       method: 'POST',
       credentials: 'same-origin',
       body: bod
     })
     .then(x => x.text())
     .then(responseBody => {
       let parsedBody = JSON.parse(responseBody)

       if(parsedBody.success === false) {
         alert(parsedBody.response)
       } else if(parsedBody.success === true) {
         alert(parsedBody.response)

         this.props.removeSelf()
       }
     })
   }

   render () {
       return (<div className='login'>
           <h3 className='loginHeading'> <br/>Post an Ad: <br/><br/></h3>
           <form onSubmit={this.handleSubmit} className='usernamePassword'> <br/>
           <div className='fields'><input type='text' value={this.state.itemName} onChange={this.handleItemNameChange} placeholder="Item Name" className='input'  /></div>
           <div className='fields'><input type='text' value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Description" className='input'  /></div>
           <div className='fields'><input type='text' value={this.state.price} onChange={this.handlePriceChange} placeholder="Price" className='input'  /></div>
           <div className='fields'><input type='text' value={this.state.quantity} onChange={this.handleQuantityChange} placeholder="Quantity" className='input'  /></div>
           <div className='fields'><input type='text' value={this.state.keywords} onChange={this.handleKeywordsChange} placeholder="Keywords" className='input' /></div>
           {
             // Line to upload an image yourselves
           }
           <br/>
           <input className='submitButton' type='submit'/>
           <br/><br/>
       </form></div>)
   }
}

export default PostAd;

