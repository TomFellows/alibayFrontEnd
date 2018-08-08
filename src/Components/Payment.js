import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout name={this.props.name}
        token={this.onToken}
        stripeKey="pk_test_mgh6fTLa7XeO2BMDJbl6yJGr"
      />
    )
  }
}

export default Payment;