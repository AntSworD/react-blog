import React, { PropTypes } from 'react';

const NavItem = props => {
  const { url, title } = props;
  return (
    <li><a href={url}>{title}</a></li>
  );
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
