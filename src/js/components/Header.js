import React, { Component } from "react";
import CartButton from "../header/CartButton";

export default class Header extends Component {
    render(){
        return(
            <header>
                <div class="row">
                    <div class="col-md-4"> <h2>Shopping Cart</h2></div>
                    <CartButton />
                </div>
            </header>
        )
    }
}