import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCart } from 'Actions/index';
import Item from 'Components/ItemsList/item'

function mapDispatchToProps(dispatch){
  return bindActionCreators( { addToCart, updateCart}, dispatch);
}
const mapStateToProps = (state)  => (
  { shoppingCart: state.ShoppingCartReducer.shoppingCart }
)
export default connect(mapStateToProps,mapDispatchToProps)(Item);