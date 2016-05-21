import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout.jsx';

const blog = document.getElementById('blog');

render((
  <Router history={hashHistory} >
    <Route path="/" component={Layout} />
  </Router>
), blog);
