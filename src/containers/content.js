import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'Components/ItemsList/content';
import { fecthItemList } from 'Actions/index';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state)  => (
   { items: state.ItemsReducer.items }
)
function mapDispatchToProps(dispatch){
  return bindActionCreators( { fecthItemList }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Content)




