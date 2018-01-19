import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from "react-router";


import Layout from './components/Layout';
import Content from './components/Content';
import Cart from './components/Cart';

import '../scss/style.scss';

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Content}></IndexRoute>
            <Route path="cart" name="cart" component={Cart}></Route>
        </Route>
    </Router>,
    app);
