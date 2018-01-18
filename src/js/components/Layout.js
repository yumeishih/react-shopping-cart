import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class Layout extends Component {
    constructor(){
        super();
        this.state ={
            cart: []
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(item,qty){
        // console.log(item);
        // console.log(qty);
        item["qty"] = qty;
        const newCart  = this.state.cart;
        newCart.push(item);
        this.setState( {cart: newCart});
        console.log(this.state.cart)
    }

    render(){
        return(
            <div class="layout">
                <Header />
                <Content addToCart = {this.addToCart}/>
                <Footer />
            </div>
        );
    };
}