import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from 'Components/layout';
import Content from 'Containers/content';
import Cart from 'Containers/cart';
import reducers from './reducers';
import 'Assets/scss/style.scss';

const app = document.getElementById('app');

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Content} />
        <Route path="cart" name="cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
  , app
)

