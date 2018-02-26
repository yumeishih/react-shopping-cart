import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCart, updateCart } from 'Actions/index';
import ItemForCart from 'Components/Cart/itemForCart';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCart, updateCart }, dispatch);
}

const mapStateToProps = (state) => (
  { shoppingCart: state.ShoppingCartReducer.shoppingCart }
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemForCart);
