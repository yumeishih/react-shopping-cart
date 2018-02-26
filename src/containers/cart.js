import React from 'react';
import { connect } from 'react-redux';
import { fecthCart } from 'Actions/index';
import { bindActionCreators } from 'redux';

import Cart from 'Components/Cart/cart';


const mapStateToProps = (state)  => ({
    shoppingCart: state.ShoppingCartReducer.shoppingCart,
    isChanged: state.ShoppingCartReducer.isChanged,
  }
)

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fecthCart }, dispatch);
}

 export default connect(mapStateToProps,mapDispatchToProps)(Cart)


