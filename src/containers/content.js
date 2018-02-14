import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'Components/ItemsList/content'

function mapStateToProps( { items } ) {
  return { items }
}
export default connect(mapStateToProps)(Content)




