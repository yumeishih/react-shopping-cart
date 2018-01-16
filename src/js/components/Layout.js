import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Header class="row"/>
                <Footer class="row"/>
            </div>
        );
    };
}