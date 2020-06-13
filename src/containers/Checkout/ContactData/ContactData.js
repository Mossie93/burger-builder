import React, { Component } from 'react';

import axios from '../../../axios-orders';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price, // this should be calculated on the server
      customer: {
        name: 'John Doe',
        address: 'Test street 65, 00-000 Norway',
        email: 'example@exaple.com'
      }
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false})
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false})
      });
  }

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your name"/>
        <Input inputtype="input" type="email" name="email" placeholder="Your email"/>
        <Input inputtype="input" type="text" name="street" placeholder="Street"/>
        <Input inputtype="input" type="text" name="postal" placeholder="Postal code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;