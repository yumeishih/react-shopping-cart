import React, { Component } from "react";
import CartButton from "./header/CartButton";
import { IndexLink, Link } from 'react-router';



export default class Header extends Component {
    render(){
        return(
            <header>
                    <IndexLink to="/" ><h2>Shopping Cart</h2></IndexLink>
                    <Link to="cart" ><img src="./src/imgs/icons/shopping-basket.jpg" class="myCart"/></Link>
            </header>
        )
    }
}