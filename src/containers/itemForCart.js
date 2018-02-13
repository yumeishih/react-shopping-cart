import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCart, updateCart } from 'Actions/index';
import ItemForCart from 'Components/itemForCart'

function mapDispatchToProps(dispatch){
  return bindActionCreators( { deleteCart , updateCart }, dispatch);
}

function mapStateToProps( { shoppingCart } ) {
  return { shoppingCart }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemForCart);
