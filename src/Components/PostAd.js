import React, { Component } from 'react';

import '../CSS/PopUpWindow.css'



class PostAd extends Component {

  constructor () {
    super()
    this.state = {itemName: '', itemDescription: '', itemPrice: '', numberRemaining: '', keywords: '', itemImage: '', itemColor: ''}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleItemNameChange = this.handleItemNameChange.bind(this)
    this.handleKeywordsChange = this.handleKeywordsChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  
    
}

    uploadFile(file) {
      let filename = file.name;
      let fileExtension = filename.split('.').pop();
      fetch('/upics?ext=' + fileExtension,{method: "POST", body: file})
      .then(response => response.text())
      .then(response =>{
        console.log(response)
        this.setState({itemImage: response})

      })
    }
  
   handleItemNameChange(event) {
       this.setState({itemName: event.target.value})
   }

   handleDescriptionChange(event) {
       this.setState({itemDescription: event.target.value})
   }

   handlePriceChange(event) {
       this.setState({itemPrice: event.target.value})
   }

   handleQuantityChange(event) {
     this.setState({numberRemaining: event.target.value})
   }
   handleColorChange(event) {
    this.setState({itemColor: event.target.value})
  }
   handleKeywordsChange(event) {
     this.setState({keywords: event.target.value})
   }
   

   handleSubmit(event) {
     event.preventDefault()
     
     let bod = JSON.stringify({item: {
       itemName: this.state.itemName,
       itemDescription: this.state.itemDescription,
       itemPrice: parseInt(this.state.itemPrice),
      numberRemaining: this.state.numberRemaining,
       keywords: this.state.keywords,
       itemImage: "/" + this.state.itemImage
     }})

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

  render() {
    return (<div className='login'>
      <div className='loginHeading'>POST AN AD</div>
      <form onSubmit={this.handleSubmit} className='usernamePassword'>

        <div className='fields'><input type='text' value={this.state.itemName} onChange={this.handleItemNameChange} placeholder="Item Name" className='input' /></div>
        <div className='fields'><textarea rows='3' value={this.state.itemDescription} onChange={this.handleDescriptionChange} placeholder="Description" className='input'/></div>
        <div className='fields'><input type='number' value={this.state.itemPrice} onChange={this.handlePriceChange} placeholder="Price" className='input' /></div>
        <div className='fields'><input type='number' value={this.state.numberRemaining} onChange={this.handleQuantityChange} placeholder="Quantity" className='input' /></div>
        <div className='fields'><input type='text' value={this.state.itemColor} onChange={this.handleColorChange} placeholder="Color" className='input' /></div>
        <div className='fields'><input type='text' value={this.state.keywords} onChange={this.handleKeywordsChange} placeholder="Keywords" className='input' /></div>
        <br/>Upload picture: <br/><input className='uploadFile' type="file" onChange={file => this.uploadFile(file.target.files[0])} /> <br/>

        <br />
        <input className='submitButton' type='submit' />
        <br />
      </form></div>)


  }
}

export default PostAd;

