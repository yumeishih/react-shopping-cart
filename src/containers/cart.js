import { connect } from 'react-redux';
import { fetchCart } from 'Actions/index';
import { bindActionCreators } from 'redux';

import Cart from 'Components/Cart/cart';


const mapStateToProps = (state) => ({
  shoppingCart: state.ShoppingCartReducer.shoppingCart,
  isChanged: state.ShoppingCartReducer.isChanged,
}
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

