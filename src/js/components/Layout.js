import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class Layout extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div class="layout">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    };
}