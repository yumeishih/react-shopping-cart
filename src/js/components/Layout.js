import React, { Component } from "react";
import { Link } from "react-router";

import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component {
    render(){
        return(
            <div class="layout">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    };
}
