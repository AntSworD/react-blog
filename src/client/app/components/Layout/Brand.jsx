import React, { PropTypes } from 'react';

const Brand = props => {
  const { brand: { url, title } } = props;
  return (
    <a className="brand" href={url} >{title}</a>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;
