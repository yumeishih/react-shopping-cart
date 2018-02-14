import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Layout/header';
import Footer from 'Components/Layout/footer';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
