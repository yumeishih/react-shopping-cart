import React from 'react';
import { connect } from 'react-redux';
import { getTotal } from 'Actions/index';
import { bindActionCreators } from 'redux';

import Cart from 'Components/Cart/cart';

function mapStateToProps( { shoppingCart, total } ) {
  return { shoppingCart, total }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators( { getTotal }, dispatch);
}

 export default connect(mapStateToProps,mapDispatchToProps)(Cart)


