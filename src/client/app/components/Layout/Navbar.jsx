import React, { PropTypes } from 'react';

import Nav from './Nav.jsx';
import Brand from './Brand.jsx';

const Navbar = props => {
  const { brand, navList } = props;
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="container-narrow">
          <Brand brand={brand} />
          <Nav navList={navList} />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  navList: PropTypes.array.isRequired,
  brand: PropTypes.object.isRequired,
};

export default Navbar;
