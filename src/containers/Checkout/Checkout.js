import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from  '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for ( let param in query.entries()) {
      // ['bacon', '2']
      ingredients[param[0]] = +param[1]; // '+' turns string into number
    }
    this.setState({ingredients: ingredients});
  }

  checkoutCancelledHandler= () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
      </div>
    );
  }
}

export default Checkout;