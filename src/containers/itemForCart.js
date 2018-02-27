import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCart, updateCart } from 'Actions/index';
import ItemForCart from 'Components/Cart/itemForCart';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCart, updateCart }, dispatch);
}

export default connect(null, mapDispatchToProps)(ItemForCart);
