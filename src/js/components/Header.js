import React from "react";

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <div className = "container">
                    <h1>Shopping Cart</h1>
                    <span class="glyphicon glyphicon-shopping-cart"></span>
                </div>
            </header>
        )
    }
}