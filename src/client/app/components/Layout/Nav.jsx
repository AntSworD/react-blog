import React, { PropTypes } from 'react';

import NavItem from './NavItem.jsx';

const Nav = props => {
  const { navList } = props;
  const NavComponets = navList.map((item, id) => <NavItem key={id} {...item} />);
  return (
    <ul className="nav">
      {NavComponets}
    </ul>
  );
};

Nav.propTypes = {
  navList: PropTypes.array.isRequired,
};

export default Nav;
