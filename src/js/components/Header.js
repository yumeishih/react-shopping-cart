import React, { Component } from "react";
import CartButton from "./header/CartButton";

export default class Header extends Component {
    render(){
        return(
            <header>
                    <h2>Shopping Cart</h2>
                    <CartButton />
            </header>
        )
    }
}