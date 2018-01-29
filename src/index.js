import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import Layout from 'Components/layout';
import Content from 'Components/content';
import Cart from 'Components/cart';
import { initItemList } from 'Src/store';

import 'Assets/scss/style.scss';

const app = document.getElementById('app');
initItemList();
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Content} />
      <Route path="cart" name="cart" component={Cart} />
    </Route>
  </Router>,
  app
);
