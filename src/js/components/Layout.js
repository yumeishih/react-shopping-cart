import React, { Component } from "react";
import { Link } from "react-router";

import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component {
    constructor(){
        super();
        this.state ={
            cart: []
        }
        this.addToCart = this.addToCart.bind(this),
        this.getCart = this.getCart.bind(this)
    }
    addToCart(item,qty){
        item["qty"] = qty;
        const newCart  = this.state.cart;
        newCart.push(item);
        this.setState( {cart: newCart});
        console.log(this.state.cart)
    }
    getCart(){
        return this.state.cart;
    }

    render(){
        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child =>
             React.cloneElement(child, {
                 addToCart: this.addToCart,
                 getCart: this.getCart
        }));
        return(
            <div class="layout">
                <Header />
                {childrenWithProps}
                <Footer />
            </div>
        );
    };
}