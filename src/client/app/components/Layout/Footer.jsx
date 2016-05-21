import React, { PropTypes } from 'react';

const Footer = props => {
  const { author } = props;
  return (
    <footer>
      <p>© 2016 {author}</p>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Footer;
