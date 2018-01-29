import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/header';
import Footer from 'Components/footer';

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
