import React, { Component } from "react";

export default class cartButton extends Component{
    render(){
        return(
            <div  class="col-md-8 ml-auto">
                <input type="image" src="./src/imgs/icons/shopping-basket.jpg" class="myCart"/>
            </div>
        )
    }

}