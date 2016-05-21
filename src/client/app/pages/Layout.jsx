import React, { PropTypes, Component } from 'react';

import Navbar from '../components/Layout/Navbar.jsx';
import Footer from '../components/Layout/Footer.jsx';
import BlogStore from '../stores/BlogStore.jsx';

class Layout extends Component {
  constructor() {
    super();

    const { navbar, author } = BlogStore.getSiteConf();

    this.state = {
      navbar,
      author,
    };
  }
  render() {
    const { children, location } = this.props;
    const { navbar: { brand, navList }, author } = this.state;
    return (
      <div>
        <Navbar
          brand={brand}
          navList={navList}
          location={location}
        />
        <div className="container-narrow">
          <div className="content">
            Content
            {children}
          </div>
          <hr />
          <Footer author={author} />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export default Layout;
