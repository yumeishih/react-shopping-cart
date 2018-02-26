import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import Layout from 'Components/Layout/layout';
import Content from 'Containers/content';
import Cart from 'Containers/cart';
import reducers from 'Src/reducers';
import api from 'Src/middleware/api';

import 'Assets/scss/style.scss';

const app = document.getElementById('app');
const store = createStore(reducers, applyMiddleware(ReduxThunk, api));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Content} />
        <Route path="cart" name="cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
  , app
);

